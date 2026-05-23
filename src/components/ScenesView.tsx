import React from 'react';
import { ProjectData } from '../types.ts';
import { DataBlock, TagsBlock, RevisionBox } from './Shared.tsx';

export function ScenesView({ data, setData }: { data: ProjectData, setData: React.Dispatch<React.SetStateAction<ProjectData>> }) {
  if (!data.stage03) return <div className="p-8 text-[#666] font-mono uppercase text-[10px] tracking-widest">Awaiting scene generation...</div>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-8">
      <div className="border-b border-[#222] pb-4 mb-8">
        <h2 className="text-3xl font-light italic text-white font-serif">03 SCENE CARDS</h2>
        <p className="text-[10px] text-[#666] uppercase tracking-widest font-mono mt-1">Detailed scene mapping preserving rhythm and originality.</p>
      </div>

      <div className="bg-black border border-[#333] p-4 text-xs font-mono text-[#a3a3a3] whitespace-pre-wrap overflow-auto max-h-[800px]">
         {JSON.stringify(data.stage03, null, 2)}
      </div>

      <RevisionBox 
        stage="scenes" 
        currentData={data.stage03} 
        onSuccess={(newData) => setData(prev => ({ ...prev, stage03: newData }))} 
      />
    </div>
  );
}
