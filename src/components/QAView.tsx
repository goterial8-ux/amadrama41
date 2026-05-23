import React from 'react';
import { ProjectData } from '../types.js';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { RevisionBox } from './Shared.js';

export function QAView({ data, setData }: { data: ProjectData, setData: React.Dispatch<React.SetStateAction<ProjectData>> }) {
  if (!data.stage08) return <div className="p-8 text-[#666] font-mono uppercase text-[10px] tracking-widest">Awaiting QA...</div>;

  const qa: any = data.stage08;
  const content = qa.content || '';
  const isPassed = content.includes('PASSED') && !content.includes('FAILED REQUIRES TARGETED REPAIR');

  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
       <div className="border-b border-[#222] pb-6 mb-8 flex items-center justify-between">
         <div>
            <h2 className="text-3xl font-light italic font-serif text-white">QA / Linter Report</h2>
            <p className="text-[10px] text-[#666] uppercase font-mono tracking-widest mt-1">Checking metrics, pacing, and surface constraints.</p>
         </div>
         {isPassed ? (
           <div className="flex items-center gap-2 text-[#10b981] font-mono text-[10px] uppercase font-bold border border-[#10b981] px-2 py-1">
             <CheckCircle2 className="w-4 h-4" />
             <span>Passed</span>
           </div>
         ) : (
           <div className="flex items-center gap-2 text-[#f43f5e] font-mono text-[10px] uppercase font-bold border border-[#f43f5e] px-2 py-1">
             <AlertCircle className="w-4 h-4" />
             <span>Warnings Issued</span>
           </div>
         )}
       </div>

       <div className="bg-[#111] p-6 border border-[#222] text-[#d4d4d4]">
           <pre className="font-mono text-xs whitespace-pre-wrap leading-relaxed text-[#eee]">
               {content}
           </pre>
       </div>

       <RevisionBox 
        stage="qa" 
        currentData={content} 
        onSuccess={(newData) => setData(prev => ({ ...prev, stage08: { ...qa, content: newData.content } }))} 
      />
    </div>
  );
}
