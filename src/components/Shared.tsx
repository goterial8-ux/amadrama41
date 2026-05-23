import React, { useState } from 'react';

export function DataBlock({ title, content }: { title: string, content: React.ReactNode }) {
  if (!content) return null;
  return (
    <div className="mb-4">
      <h4 className="text-[#666] font-mono text-[10px] uppercase mb-1">{title}</h4>
      <div className="font-serif italic text-[#d4d4d4] text-base">{typeof content === 'string' ? content : content}</div>
    </div>
  );
}

export function TagsBlock({ title, tags }: { title: string, tags: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="mb-4">
      <h4 className="text-[#666] font-mono text-[10px] uppercase mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-zinc-800 px-2 py-1 text-[9px] uppercase text-[#d4d4d4] border border-[#333]">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export function RevisionBox({ stage, currentData, onSuccess }: { stage: string, currentData: any, onSuccess: (newData: any) => void }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRevise = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate/revise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage, currentData, prompt })
      });
      const raw = await res.text();
      let newData;
      try {
        newData = JSON.parse(raw);
      } catch {
        throw new Error("Backend returned HTML/non-JSON. Check API route.");
      }
      if (!res.ok) throw new Error(newData.error || "Revision failed");
      if (onSuccess) onSuccess(newData);
      setPrompt('');
    } catch (e: any) {
      alert("Revision error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 border-t border-[#222] pt-6 pb-2">
      <h4 className="text-[#888] text-xs font-mono uppercase mb-2">Request Revision (AI)</h4>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={prompt} 
          onChange={e => setPrompt(e.target.value)} 
          placeholder="Enter changes to make to this section..."
          className="flex-1 bg-[#111] border border-[#333] p-3 text-sm text-white rounded-none outline-none focus:border-[#f43f5e] transition-colors"
        />
        <button 
          onClick={handleRevise}
          disabled={loading || !prompt}
          className="bg-[#222] hover:bg-[#f43f5e] text-white px-6 py-2 text-sm font-mono uppercase disabled:opacity-50 transition-colors"
        >
          {loading ? 'Revising...' : 'Apply'}
        </button>
      </div>
    </div>
  );
}
