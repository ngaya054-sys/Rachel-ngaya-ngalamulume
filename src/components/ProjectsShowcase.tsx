import React, { useState } from 'react';
import { Layers, ArrowUpRight, X, CheckCircle, Sparkles, Cpu } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';

export const ProjectsShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai-ml' | 'business' | 'academic'>(
    'all'
  );
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    selectedFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projets" className="py-20 border-b border-cyan-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Industrialisation &amp; Cas Réels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets Majeurs &amp; Recherches Appliquées
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Une sélection de réalisations combinant réseaux neuronaux profonds, architectures cloud
            résilientes et retour sur investissement concret.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#090f2e] border border-cyan-900/40 rounded-xl mb-10 w-fit">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tous les Projets ({PORTFOLIO_PROJECTS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('ai-ml')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedFilter === 'ai-ml'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Intelligence Artificielle &amp; LLM
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('business')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedFilter === 'business'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Business Intelligence &amp; FinTech
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('academic')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedFilter === 'academic'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Recherche UNIKIN &amp; Lab
          </button>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#090f2e]/85 border border-cyan-500/20 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.06)] hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual image */}
                <div className="relative h-48 overflow-hidden bg-[#060a22]">
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090f2e] via-transparent to-transparent opacity-75" />
                  <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-300 bg-[#090f2e]/90 px-2.5 py-1 rounded border border-cyan-500/30">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  {/* Clean unboxed metadata with separators (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{project.clientOrContext}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-cyan-300">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Quantitative metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-cyan-900/40 mb-4">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2 rounded-lg bg-[#060a22] border border-cyan-950">
                        <span className="text-[10px] text-slate-400 block">{m.label}</span>
                        <span className="text-sm font-bold text-cyan-300 font-mono tabular-nums">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-cyan-200 bg-[#0c1438] hover:bg-[#131f54] border border-cyan-500/30 rounded-xl transition-all"
                >
                  <span>Examiner l'Architecture Technique</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#090f2e] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Fermer la fenêtre"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-cyan-400 mb-2">
              {activeModalProject.categoryLabel} · {activeModalProject.year}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{activeModalProject.title}</h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalProject.fullOverview}
            </p>

            {/* Architecture points */}
            <div className="space-y-3 mb-6 bg-[#060a22] p-4 rounded-xl border border-cyan-900/60">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Spécifications &amp; Architecture Déployée :
              </h4>
              {activeModalProject.architectureDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activeModalProject.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#0d163d] border border-cyan-500/30 text-center"
                >
                  <span className="text-[11px] text-slate-400 block">{m.label}</span>
                  <span className="text-base sm:text-lg font-bold text-cyan-300 font-mono tabular-nums">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeModalProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#101b4c] text-cyan-200 border border-cyan-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-cyan-900/40">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 rounded-lg"
              >
                Fermer
              </button>
              <a
                href={`https://wa.me/243857348387?text=Bonjour%20Ing%C3%A9nieur%20Tshimanga%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20projet%20${encodeURIComponent(activeModalProject.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg"
              >
                Discuter de ce cas sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
