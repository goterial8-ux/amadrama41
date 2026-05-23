import React from 'react';
import { ProjectData } from '../types.ts';
import { DataBlock, RevisionBox } from './Shared.tsx';

export function OutlineView({ data, setData }: { data: ProjectData, setData: React.Dispatch<React.SetStateAction<ProjectData>> }) {
  if (!data.stage02) return <div className="p-8 text-[#666] font-mono uppercase text-[10px] tracking-widest">Awaiting outline generation...</div>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-8">
      <div className="border-b border-[#222] pb-4 mb-8">
        <h2 className="text-3xl font-light italic font-serif text-white">02 MACRO OUTLINE</h2>
        <p className="text-[10px] text-[#666] uppercase tracking-widest font-mono mt-1">The structured 9-part emotional and payoff map.</p>
      </div>

      <div className="bg-black border border-[#333] p-4 text-xs font-mono text-[#a3a3a3] whitespace-pre-wrap overflow-auto max-h-[800px]">
         {JSON.stringify(data.stage02, null, 2)}
      </div>

      <RevisionBox 
        stage="outline" 
        currentData={data.stage02} 
        onSuccess={(newData) => setData(prev => ({ ...prev, stage02: newData }))} 
      />
    </div>
  );
}
