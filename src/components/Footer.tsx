import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040614] border-t border-cyan-950/50 py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Identity column */}
          <div className="space-y-3 md:col-span-1">
            <a href="#" className="text-base font-bold text-white tracking-wide block">
              {PERSONAL_INFO.honorificTitle}
            </a>
            <p className="text-slate-400 text-xs leading-relaxed">
              Spécialiste en Intelligence Artificielle &amp; Deep Learning, Consultant en Stratégie
              d'Affaires et Enseignant à l'Université de Kinshasa (UNIKIN).
            </p>
            <div className="text-cyan-400 text-xs font-semibold">
              Faculté des Sciences et Technologies
            </div>
          </div>

          {/* Quick navigation */}
          <div className="space-y-2">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Navigation
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="#parcours" className="hover:text-cyan-300 transition-colors">
                  Parcours Académique UNIKIN
                </a>
              </li>
              <li>
                <a href="#domaines" className="hover:text-cyan-300 transition-colors">
                  Spécialités IA &amp; Business
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-cyan-300 transition-colors">
                  Projets &amp; Recherches
                </a>
              </li>
              <li>
                <a href="#simulateurs" className="hover:text-cyan-300 transition-colors">
                  Simulateurs &amp; Calculateur ROI
                </a>
              </li>
              <li>
                <a href="#geo-faq" className="hover:text-cyan-300 transition-colors">
                  Entité SEO / GEO
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Coordonnées Officielles
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="hover:text-cyan-300 font-mono transition-colors"
                >
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>UNIKIN, Faculté des Sciences &amp; Tech.</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Kinshasa, RDC</span>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Accompagnement &amp; Audit
            </p>
            <p className="text-slate-400 text-xs">
              Disponible pour missions de conseil, audits d'architecture IA et interventions
              universitaires.
            </p>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-sm transition-all"
            >
              <span>Écrire sur WhatsApp (+243 857348387)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Ir. Tshimanga Ntumba Michel. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>Portfolio Officiel</span>
            <span aria-hidden="true">·</span>
            <span>Optimisé SEO / GEO</span>
            <span aria-hidden="true">·</span>
            <span>UNIKIN FST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
