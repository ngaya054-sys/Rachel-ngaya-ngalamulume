import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-950/40 bg-[#050816]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_#00f0ff]"></span>
          <span>{PERSONAL_INFO.honorificTitle}</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#parcours"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            Parcours Académique
          </a>
          <a
            href="#domaines"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            Spécialités & IA
          </a>
          <a
            href="#projets"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            Projets Réalisés
          </a>
          <a
            href="#simulateurs"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            Simulateurs & ROI
          </a>
          <a
            href="#geo-faq"
            className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0"
          >
            Entité & GEO
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all whitespace-nowrap shrink-0"
          >
            <span>WhatsApp Direct</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-cyan-900/40 bg-[#070b24] px-4 pt-3 pb-5 space-y-2">
          <a
            href="#parcours"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/50 rounded-md"
          >
            Parcours Académique
          </a>
          <a
            href="#domaines"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/50 rounded-md"
          >
            Spécialités & IA
          </a>
          <a
            href="#projets"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/50 rounded-md"
          >
            Projets Réalisés
          </a>
          <a
            href="#simulateurs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/50 rounded-md"
          >
            Simulateurs & ROI
          </a>
          <a
            href="#geo-faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/50 rounded-md"
          >
            Entité & GEO
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-950/40 rounded-md"
          >
            Formulaire de Contact
          </a>
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg"
            >
              <span>Écrire sur WhatsApp (+243 857348387)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
