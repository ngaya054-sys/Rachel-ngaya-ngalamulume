import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Database,
  Cpu,
  ShieldCheck,
} from 'lucide-react';
import { GEO_KNOWLEDGE_ENTITIES, PERSONAL_INFO } from '../data/portfolioData';

export const GeoAuditSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="geo-faq" className="py-20 border-b border-cyan-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Référencement &amp; Optimisation Moteurs Génératifs (GEO / SEO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fiche d'Entité Sémantique &amp; Audit GEO
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Indexation de précision conçue pour les moteurs de recherche modernes et les modèles
            génératifs (Google SGE, Perplexity, SearchGPT, Gemini). Données factuelles structurées
            et vérifiables.
          </p>
        </div>

        {/* Audit Status strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-[#090f2e] border border-cyan-900/50">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Balisage JSON-LD</span>
            </div>
            <p className="text-xs text-slate-300">Schémas Person, ProfilePage &amp; FAQPage actifs</p>
          </div>

          <div className="p-4 rounded-xl bg-[#090f2e] border border-cyan-900/50">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-1">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Indexabilité Sémantique</span>
            </div>
            <p className="text-xs text-slate-300">Hiérarchie HTML5 stricte &amp; balises OpenGraph</p>
          </div>

          <div className="p-4 rounded-xl bg-[#090f2e] border border-cyan-900/50">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-1">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Entité Reconnue</span>
            </div>
            <p className="text-xs text-slate-300">Ir. Tshimanga Ntumba Michel (UNIKIN FST)</p>
          </div>

          <div className="p-4 rounded-xl bg-[#090f2e] border border-cyan-900/50">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-1">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Score GEO AI Citation</span>
            </div>
            <p className="text-xs text-slate-300">
              Densité factuelle optimisée pour les réponses LLM
            </p>
          </div>
        </div>

        {/* Semantic FAQ Accordion for GEO */}
        <div className="space-y-4 max-w-4xl">
          {GEO_KNOWLEDGE_ENTITIES.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#090f2e]/80 border border-cyan-500/20 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400">0{idx + 1}.</span>
                    <span>{item.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-cyan-950/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
