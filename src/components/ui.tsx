import React from 'react';
import '../index.css';

export const Loader = ({ className }: { className?: string }) => (
  <div className={`animate-spin rounded-full h-8 w-8 border-2 border-t-white border-r-white border-b-transparent border-l-transparent ${className}`}></div>
);

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#111] border border-[#222] p-5 shadow-none rounded-none ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, onClick, disabled, className, variant = 'primary' }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean; className?: string; variant?: 'primary' | 'secondary' }) => {
  const base = "inline-flex items-center px-4 py-2 text-[11px] font-bold uppercase tracking-wider focus:outline-none transition-colors border";
  const primary = "bg-white text-black border-white hover:bg-zinc-200 focus:ring-white disabled:bg-[#333] disabled:text-[#666] disabled:border-[#333] disabled:cursor-not-allowed";
  const secondary = "bg-[#111] text-[#d4d4d4] border-[#222] hover:bg-[#1a1a1a] focus:ring-[#f43f5e] disabled:bg-[#111] disabled:text-[#444] disabled:border-[#222]";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variant === 'primary' ? primary : secondary} ${className}`}
    >
      {children}
    </button>
  );
};
