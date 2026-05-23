import React from 'react';
import { ProjectData } from '../types.ts';
import { DataBlock, TagsBlock, RevisionBox } from './Shared.tsx';

export function FoundationView({ data, setData }: { data: ProjectData, setData: React.Dispatch<React.SetStateAction<ProjectData>> }) {
  if (!data.stage00) return <div className="p-8 text-[#666] font-mono uppercase text-[10px] tracking-widest">Awaiting foundation generation...</div>;

  const s00 = data.stage00;

  return (
    <div className="max-w-6xl mx-auto py-12 px-8 space-y-8">
      <div className="border-b border-[#222] pb-4 mb-4">
        <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-light italic font-serif text-white">00 Idea Setup & 01 Foundation DNA</h2>
              <p className="text-[10px] text-[#666] uppercase tracking-widest font-mono mt-1">Creative Diagnosis & Trope Remix Matrix</p>
            </div>
            <div className={`px-4 py-2 border font-mono text-[10px] uppercase font-bold tracking-widest ${s00.finalDecision.decision.includes('APPROVED') ? 'text-[#10b981] border-[#10b981]' : 'text-[#f43f5e] border-[#f43f5e]'}`}>
                {s00.finalDecision.decision}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
        
        {/* SNAPSHOT & DNA */}
        <div className="bg-[#111] p-6 border border-[#222] flex flex-col gap-4">
           <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border-b border-[#222] pb-2">1. Raw Idea & DNA</h3>
           <DataBlock title="Summary" content={s00.rawIdeaSnapshot.summary} />
           <div className="grid grid-cols-2 gap-4">
             <DataBlock title="Protagonist Wound" content={s00.storyDNA.protagonistWound} />
             <DataBlock title="Hidden Advantage" content={s00.storyDNA.hiddenAdvantage} />
             <DataBlock title="Status Symbol" content={s00.storyDNA.mainStatusSymbol} />
             <DataBlock title="Collapse Type" content={s00.storyDNA.finalCollapseType} />
             <DataBlock title="Main Proof System" content={s00.storyDNA.mainProofSystem} />
           </div>
        </div>

        {/* OPENING FINGERPRINT */}
        <div className="bg-[#111] p-6 border border-[#222] flex flex-col gap-4">
           <div className="flex justify-between items-end border-b border-[#222] pb-2 mb-4">
               <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em]">7. Selected Opening Fingerprint</h3>
               <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 border ${s00.openingFingerprint.status === 'PASSED' ? 'text-[#10b981] border-[#10b981]' : 'text-[#f43f5e] border-[#f43f5e]'}`}>
                   {s00.openingFingerprint.status}
               </span>
           </div>
           
           <div className="bg-black p-4 border border-[#333] mb-4">
             <DataBlock title="First Visual Image" content={s00.openingFingerprint.firstVisualImage} />
             <div className="grid grid-cols-2 gap-4 mt-4">
               <DataBlock title="Location" content={s00.openingFingerprint.location} />
               <DataBlock title="Witness Group" content={s00.openingFingerprint.publicWitnessGroup} />
               <DataBlock title="Humiliation Method" content={s00.openingFingerprint.humiliationMethod} />
             </div>
           </div>

           <DataBlock title="What MUST NOT be repeated" content={<span className="text-[#f43f5e]">{s00.openingFingerprint.whatMustNotBeRepeated}</span>} />
        </div>
      </div>

      <div className="bg-[#111] p-6 border border-[#222]">
         <div className="flex items-center justify-between mb-6 border-b border-[#222] pb-2">
            <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em]">Module 00-B: Trope Remix Matrix</h3>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <DataBlock title="Main Trope" content={<span className="text-white font-mono text-xs">{s00.mainTropeSelection?.trope}</span>} />
            <DataBlock title="Power System" content={<span className="text-[#d4d4d4] font-mono text-xs">{s00.tropeMixMatrix?.powerSystemTrope}</span>} />
            <DataBlock title="Emotional Core" content={<span className="text-[#d4d4d4] font-mono text-xs">{s00.tropeMixMatrix?.emotionalTrope}</span>} />
            <DataBlock title="Anti-Cliché Twist" content={<span className="text-[#10b981] font-mono text-xs font-bold">{s00.antiClicheTwist?.twist}</span>} />
         </div>
         <div className="p-4 bg-black border border-[#333]">
           <DataBlock title="Matrix Integration Explanation" content={s00.tropeMixMatrix?.explanation} />
           <p className="text-[10px] text-[#f43f5e] font-mono tracking-widest uppercase mb-1 mt-4">Handoff Key Rule</p>
           <p className="font-serif text-[#d4d4d4] text-sm italic">{s00.handoffPackageToStage01?.keyOriginalityRule}</p>
         </div>
      </div>

      {/* CORE ENGINE & SURFACES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="bg-[#111] p-6 border border-[#222] flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border-b border-[#222] pb-2">3. Emotional Architecture</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <DataBlock title="Initial Injustice" content={s00.coreEmotionalEngine.initialInjustice} />
                <DataBlock title="Wrong Choice" content={s00.coreEmotionalEngine.wrongChoice} />
                <DataBlock title="Hidden Advantage" content={s00.coreEmotionalEngine.heroSilentAdvantage} />
                <DataBlock title="Midpoint Proof" content={s00.coreEmotionalEngine.midpointPublicProof} />
                <DataBlock title="Final Trap" content={s00.coreEmotionalEngine.finalTrap} />
                <DataBlock title="Restored Dignity" content={s00.coreEmotionalEngine.restoredDignity} />
            </div>
         </div>
         <div className="bg-[#111] p-6 border border-[#222] flex flex-col gap-4">
             <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border-b border-[#222] pb-2">4. Restricted Surfaces</h3>
             <TagsBlock title="Surfaces To Avoid" tags={s00.functionVsSurfaceSeparation.surfaceRisks} />
             <div className="mt-4 p-3 border-l-2 border-[#f43f5e] bg-[#f43f5e]/10">
                 <p className="text-[10px] text-[#f43f5e] font-mono tracking-widest uppercase mb-1">Key Originality Rule</p>
                 <p className="font-serif text-[#d4d4d4] text-sm italic">{s00.handoffPackageToStage01.keyOriginalityRule}</p>
             </div>
         </div>
      </div>
      
      {/* ANTI-TEMPLATE VISUALS */}
      <div className="mt-8 border-t border-[#222] pt-8">
           <h3 className="text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">11. Anti-Template Risk Report</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {s00.antiTemplateRiskReport.map((risk, idx) => (
                  <div key={idx} className="p-4 border border-[#333] bg-[#111] flex flex-col gap-2">
                       <span className="text-[#f43f5e] font-mono text-[10px] uppercase tracking-wider">{risk.riskCheck}</span>
                       <span className="text-white font-serif text-sm italic">{risk.preventionNote}</span>
                  </div>
              ))}
           </div>
      </div>

      {data.stage01 && (
        <div className="mt-8 border-t border-[#222] pt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#f43f5e] text-lg font-bold uppercase tracking-[0.3em] font-serif">01 FOUNDATION DNA</h3>
              {data.stage01.foundationFinalDecision?.decision && (
                <div className={`px-4 py-2 border font-mono text-[10px] uppercase font-bold tracking-widest ${data.stage01.foundationFinalDecision.decision.includes('APPROVED') ? 'text-[#10b981] border-[#10b981]' : 'text-[#f43f5e] border-[#f43f5e]'}`}>
                    {data.stage01.foundationFinalDecision.decision}
                </div>
              )}
            </div>
            
            <div className="space-y-4 mb-4 text-[#d4d4d4]">
               <p className="text-sm">The Character Function Lock and Emotional Chain / Dramatic Progression have been established based on the 00 IDEA SETUP limits. Review the resulting DNA payload below before moving on to generating the macro outline.</p>
            </div>
            <div className="bg-black border border-[#333] p-4 text-xs font-mono text-[#a3a3a3] whitespace-pre-wrap overflow-auto max-h-[800px]">
                {JSON.stringify(data.stage01, null, 2)}
            </div>
        </div>
      )}

      <RevisionBox 
        stage="foundation"
        currentData={{ stage00: data.stage00, stage01: data.stage01 }}
        onSuccess={(newData) => {
          setData(prev => ({
            ...prev,
            stage00: newData.stage00 || prev.stage00,
            stage01: newData.stage01 || prev.stage01,
          }));
        }}
      />
    </div>
  );
}
