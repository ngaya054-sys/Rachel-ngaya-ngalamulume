import React from 'react';
import { ArrowUpRight, MessageSquare, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-cyan-950/30">
      {/* Background ambient neon glows matching IA.jpg design system */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic & Identity Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean kicker without pill badge */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              <span>Faculté des Sciences & Technologies · UNIKIN</span>
              <span aria-hidden="true">·</span>
              <span className="text-fuchsia-400">Kinshasa, RDC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {PERSONAL_INFO.fullName}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cyan-200/90 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.primaryTitle} &amp; {PERSONAL_INFO.affiliation}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick badges or key tags (clean typography separated by dots) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 pt-1">
              <span className="text-cyan-300 font-medium">Deep Learning &amp; LLMs</span>
              <span aria-hidden="true">·</span>
              <span className="text-fuchsia-300 font-medium">Monétisation Business &amp; ROI</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-300 font-medium">Data Engineering</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300 font-medium">Enseignement FST UNIKIN</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp : {PERSONAL_INFO.phoneFormatted}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-cyan-200 bg-[#0c1338] hover:bg-[#131d54] border border-cyan-500/30 hover:border-cyan-400 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all whitespace-nowrap shrink-0"
              >
                <span>Formulaire de Consultation (3 Étapes)</span>
              </a>

              <a
                href="#simulateurs"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Tester le Simulateur IA</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Cybernetic AI Visual inspired by IA.jpg */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#060a22]">
                <img
                  src="/src/assets/images/hero_ai_portrait_1791531600834.jpg"
                  alt="Avatar cybernétique et visionnaire IA - Ingénieur Tshimanga Ntumba Michel"
                  className="w-full h-full object-cover object-center filter saturate-110 contrast-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cybernetic overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a22] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090f33]/85 backdrop-blur-md border border-cyan-500/30">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white tracking-wide">
                        Ir. Tshimanga Ntumba Michel
                      </p>
                      <p className="text-cyan-300 text-[11px]">
                        Spécialiste IA &amp; Enseignant UNIKIN
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Disponibilité Consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Impact Metric Strip below the split (strictly adheres to portfolio guidelines) */}
        <div className="mt-14 pt-8 border-t border-cyan-950/40 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#080d28]/70 border border-cyan-900/30 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-fuchsia-400 font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
