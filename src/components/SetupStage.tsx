import React, { useState } from 'react';
import { ProjectData } from '../types.js';
import { Button, Card, Loader } from './ui.js';

interface SetupStageProps {
  data: ProjectData;
  onGenerate: (idea: string) => void;
  status: ProjectData['status'];
}

export function SetupStage({ data, onGenerate, status }: SetupStageProps) {
  const [idea, setIdea] = useState(data.rawIdea || '');

  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light italic font-serif text-white">00 Idea Setup</h2>
        <p className="text-[#666] text-xs font-mono uppercase tracking-widest mt-2">Enter your raw story idea to expand.</p>
      </div>

      <Card className="p-6">
        <label className="block text-[#f43f5e] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
          Raw Story Concept (The premise)
        </label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="w-full h-48 p-4 border border-[#222] rounded-none focus:outline-none focus:border-[#f43f5e] text-white bg-black resize-y mb-6 font-serif text-sm leading-relaxed"
          placeholder="e.g. A genius hacker is framed for stealing corporate funds by his best friend and fiancée. He goes to prison, but a mysterious chip activates in his brain giving him control over global financial networks. He returns after 3 years secretly owning the bank that his enemies are trying to borrow from..."
        />
        
        <div className="flex justify-end gap-4">
          <Button 
            onClick={() => onGenerate(idea)} 
            disabled={!idea || status !== 'idle'}
            className="w-full sm:w-auto font-bold tracking-widest uppercase"
          >
            {status !== 'idle' ? (
              <>
                <Loader className="w-4 h-4 mr-2" />
                Processing Pipeline...
              </>
            ) : (
              'Ignite Generation Pipeline'
            )}
          </Button>
        </div>
      </Card>
      
      {status === 'generating_foundation' && (
        <div className="mt-12 text-center text-[#666] flex flex-col items-center">
            <Loader className="mb-4 !border-t-[#f43f5e] !border-r-[#f43f5e] w-8 h-8 rounded-full" />
            <p className="font-mono text-[10px] tracking-[0.4em] text-[#f43f5e] animate-pulse">ANALYZING DNA / EXTRACTING TROPES / MAPPING EMOTIONS</p>
        </div>
      )}
    </div>
  );
}
