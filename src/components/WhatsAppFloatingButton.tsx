import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#090f2e] border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] text-xs text-white max-w-xs animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <div>
            <p className="font-semibold text-emerald-300">WhatsApp Direct</p>
            <p className="text-[11px] text-slate-300">{PERSONAL_INFO.phoneFormatted}</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white p-1 ml-1"
            aria-label="Fermer la bulle d'aide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Icon */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-transform hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
      </a>
    </div>
  );
};
