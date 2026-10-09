import React from 'react';
import {
  BrainCircuit,
  TrendingUp,
  Server,
  GraduationCap,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { DOMAIN_SPECIALTIES } from '../data/portfolioData';

const iconMap = {
  BrainCircuit,
  TrendingUp,
  Server,
  GraduationCap,
};

export const DomainsExpertise: React.FC = () => {
  return (
    <section id="domaines" className="py-20 border-b border-cyan-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            <span>Piliers d'Intervention &amp; Compétences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Domaines de Spécialité &amp; Ingénierie
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            De la théorie fondamentale des réseaux neuronaux au calcul rigoureux du ROI financier,
            l’ingénieur Tshimanga Ntumba Michel déploie une expertise multidimensionnelle au service
            des organisations et du savoir.
          </p>
        </div>

        {/* 4 Specialties Grid matching IA.jpg aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOMAIN_SPECIALTIES.map((spec) => {
            const IconComponent = iconMap[spec.iconName as keyof typeof iconMap] || BrainCircuit;

            const borderGlow =
              spec.color === 'cyan'
                ? 'border-cyan-500/30 hover:border-cyan-400'
                : spec.color === 'magenta'
                  ? 'border-fuchsia-500/30 hover:border-fuchsia-400'
                  : spec.color === 'blue'
                    ? 'border-blue-500/30 hover:border-blue-400'
                    : 'border-purple-500/30 hover:border-purple-400';

            const iconBg =
              spec.color === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-400'
                : spec.color === 'magenta'
                  ? 'bg-fuchsia-500/10 text-fuchsia-400'
                  : spec.color === 'blue'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-purple-500/10 text-purple-400';

            return (
              <div
                key={spec.id}
                className={`p-8 rounded-2xl bg-[#090f2e]/85 border ${borderGlow} shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${iconBg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">PÔLE EXPERTISE</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{spec.title}</h3>

                  <p className="text-xs font-semibold text-cyan-300 mb-3">{spec.tagline}</p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{spec.description}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Capacités opérationnelles :
                    </p>
                    {spec.coreCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-cyan-900/40">
                  <div className="mb-3">
                    <span className="text-[11px] text-slate-400 block mb-1.5">
                      Stack technologique &amp; Outils :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-[#0f1742] text-cyan-200 border border-cyan-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#060a22] border border-cyan-950 text-xs">
                    <span className="text-fuchsia-300 font-semibold block mb-0.5">
                      Impact Économique &amp; Mesure :
                    </span>
                    <p className="text-slate-300">{spec.businessImpact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Banner: Synergy AI & Business */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#090f2e] via-[#0e1642] to-[#120f2e] border border-fuchsia-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase">
              Vision Industrielle
            </span>
            <h3 className="text-2xl font-bold text-white">
              Pourquoi la passion du Business transforme l'ingénierie IA ?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              « Dans de nombreuses organisations, les modèles d’intelligence artificielle restent
              confinés à des prototypes de laboratoire parce qu’ils n'ont pas été pensés dès le
              premier jour pour créer un effet de levier financier. En tant qu'ingénieur et
              passionné de business, je conçois chaque réseau de neurones avec un compte de résultat
              (P&amp;L) en tête : réduction des coûts d’exploitation, fidélisation client et
              nouveaux revenus numériques. »
            </p>
            <div className="text-xs text-cyan-300 font-semibold">
              — Ir. Tshimanga Ntumba Michel
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <img
              src="/src/assets/images/business_ai_strategy_1791531634484.jpg"
              alt="Stratégie Business et IA de rentabilité"
              className="w-full h-44 object-cover rounded-xl border border-fuchsia-500/30 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
