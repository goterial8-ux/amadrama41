import React from 'react';
import { ProjectData } from '../types.js';
import { CheckCircle2, Circle, Clock, Loader2, FileText, LayoutTemplate, Layers, GitCommit, FileCode2 } from 'lucide-react';
import { cn } from '../lib/utils.js';

interface SidebarProps {
  data: ProjectData;
  activeStage: string;
  setActiveStage: (s: string) => void;
  clearSession: () => void;
}

export function Sidebar({ data, activeStage, setActiveStage, clearSession }: SidebarProps) {
  const steps = [
    { id: 'setup', label: '00 Idea Setup', status: data.status !== 'idle' ? 'complete' : 'current' },
    { id: 'foundation', label: '01 Foundation DNA', status: !!data.stage00 ? 'complete' : (data.status === 'generating_foundation' ? 'running' : 'pending') },
    { id: 'outline', label: '02 Macro Outline', status: !!data.stage02 ? 'complete' : (data.status === 'generating_outline' ? 'running' : 'pending') },
    { id: 'scenes', label: '03 Scene Cards', status: !!data.stage03 ? 'complete' : (data.status === 'generating_scenes' ? 'running' : 'pending') },
    { id: 'script', label: '04 Final Script', status: !!data.stage07 && data.stage07.length === 9 ? 'complete' : (data.status === 'generating_script' ? 'running' : 'pending') },
    { id: 'qa', label: '05 Linter / QA', status: !!data.stage08 ? 'complete' : (data.status === 'qa' ? 'running' : 'pending') },
  ];

  return (
    <div className="w-56 border-r border-[#222] pr-4 flex flex-col gap-1 h-full shrink-0">
      <div className="mb-6 border-b border-[#222] pb-6">
        <h1 className="text-xl font-light italic font-serif text-white">Project: ScriptForge</h1>
        <p className="text-[10px] text-[#666] uppercase tracking-[0.2em] font-mono mt-1">Creative Engine Pipeline</p>
      </div>

      <div className="text-[10px] text-[#444] font-bold uppercase mb-2 tracking-[0.2em]">Pipeline Stages</div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {steps.map((step) => {
            const isActive = activeStage === step.id;
            return (
              <li key={step.id}>
                <button
                  onClick={() => setActiveStage(step.id)}
                  className={cn(
                    "flex items-center gap-3 p-2 transition-colors cursor-pointer w-full text-left",
                    isActive ? "bg-[#1a1a1a] border-l-2 border-[#f43f5e] text-white opacity-100" : "opacity-40 hover:opacity-100"
                  )}
                >
                  <span className={cn("text-xs uppercase tracking-wider", isActive ? "font-semibold text-white" : "")}>{step.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-4 pt-4 border-t border-[#222] flex flex-col gap-2">
        <button 
          onClick={clearSession} 
          className="w-full bg-[#111] hover:bg-red-900 border border-[#333] hover:border-red-500 text-[#d4d4d4] hover:text-white px-3 py-2 text-[10px] font-mono uppercase tracking-widest transition-colors text-center"
        >
          Clear Session
        </button>
        <p className="text-[10px] text-[#666] font-mono tracking-widest text-center mt-2">STATUS: {data.status.replace('_', ' ').toUpperCase()}</p>
      </div>
    </div>
  );
}
