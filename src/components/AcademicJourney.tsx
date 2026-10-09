import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  FileText,
  Building2,
  Users,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  ACADEMIC_DEGREES,
  CERTIFICATIONS,
  UNIKIN_COURSES,
  RESEARCH_PUBLICATIONS,
} from '../data/portfolioData';

type TabKey = 'degrees' | 'teaching' | 'certs' | 'publications';

export const AcademicJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('degrees');

  return (
    <section id="parcours" className="py-20 border-b border-cyan-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Excellence &amp; Rigueur Universitaire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Parcours Académique &amp; Enseignement à l'UNIKIN
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Formé à la Faculté des Sciences et Technologies de l’Université de Kinshasa et certifié
            par les plus grands programmes mondiaux, l'Ir. Tshimanga Ntumba Michel combine rigueur
            mathématique, transmission pédagogique et recherche appliquée.
          </p>
        </div>

        {/* Tab selection bar (interactive button elements allowed per frontend-design) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#090f2e] border border-cyan-900/40 rounded-xl mb-10 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('degrees')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'degrees'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Diplômes &amp; Ingéniorat</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('teaching')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'teaching'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Enseignement UNIKIN (FST)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('certs')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'certs'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certifications Internationales</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('publications')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'publications'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Publications &amp; Recherches</span>
          </button>
        </div>

        {/* Tab 1: Diplômes */}
        {activeTab === 'degrees' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              {ACADEMIC_DEGREES.map((deg) => (
                <div
                  key={deg.id}
                  className="p-6 rounded-2xl bg-[#090f2e]/80 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.06)] relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-cyan-400 font-semibold">{deg.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span>{deg.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-cyan-300">{deg.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{deg.degree}</h3>

                  {deg.honors && (
                    <div className="inline-block text-xs font-semibold text-emerald-400 mb-3">
                      ★ {deg.honors}
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{deg.description}</p>

                  <div className="border-t border-cyan-900/40 pt-3">
                    <p className="text-xs font-medium text-slate-400 mb-2">
                      Disciplines approfondies :
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                      {deg.keyTopics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#0f1742] border border-cyan-900/60"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual preview of the academic lab */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#090f2e] shadow-[0_0_25px_rgba(6,182,212,0.15)] p-2">
                <img
                  src="/src/assets/images/unikin_academic_lab_1791531624198.jpg"
                  alt="Laboratoire et amphithéâtre de recherche IA - UNIKIN Faculté des Sciences et Technologies"
                  className="w-full h-64 sm:h-72 object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4">
                  <h4 className="text-base font-bold text-white">
                    Faculté des Sciences et Technologies – UNIKIN
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Haut lieu de formation scientifique d’excellence en RDC. Laboratoire
                    d'expérimentation pour les modèles d’intelligence artificielle et algorithmes
                    avancés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Enseignement UNIKIN */}
        {activeTab === 'teaching' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#090f2e]/80 border border-cyan-500/20 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Chaire &amp; Enseignement Magistral à l'UNIKIN
                  </h3>
                  <p className="text-sm text-cyan-300 mt-1">
                    Faculté des Sciences et Technologies · Département de Mathématiques et
                    Informatique
                  </p>
                </div>
                <div className="flex items-center gap-6 text-xs text-slate-300 font-mono">
                  <div>
                    <span className="block text-xl font-bold text-cyan-400 tabular-nums">650+</span>
                    <span>Étudiants formés</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-fuchsia-400 tabular-nums">
                      15+
                    </span>
                    <span>Mémoires dirigés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UNIKIN_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl bg-[#080d28]/90 border border-cyan-900/40 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono text-cyan-400 font-semibold">{course.code}</span>
                      <span>{course.level}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">{course.title}</h4>

                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="space-y-1.5 border-t border-cyan-900/40 pt-3">
                      <p className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                        Syllabus &amp; Thématiques :
                      </p>
                      {course.syllabusHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-cyan-900/40 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Promotion active</span>
                    <span className="text-cyan-300">{course.studentsCount} inscrits</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#090f2e]/80 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:border-cyan-400/50 transition-all"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="text-fuchsia-400 font-semibold">{cert.issuer}</span>
                  <span className="font-mono text-cyan-300">{cert.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{cert.title}</h3>

                <div className="flex flex-wrap gap-2 text-xs">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#0f1742] border border-cyan-900/60 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Publications & Recherches */}
        {activeTab === 'publications' && (
          <div className="space-y-6">
            {RESEARCH_PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-[#090f2e]/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2">
                  <span className="text-cyan-400 font-semibold">{pub.venue}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-fuchsia-400">{pub.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">{pub.field}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{pub.title}</h3>

                <p className="text-xs text-slate-400 mb-3">
                  Auteurs :{' '}
                  <span className="text-slate-200 font-medium">{pub.authors.join(', ')}</span>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">{pub.abstract}</p>

                {pub.doi && (
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <span>Identifiant &amp; Archivage :</span>
                    <span className="underline decoration-cyan-500/50">{pub.doi}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
