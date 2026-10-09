import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight, MessageSquare } from 'lucide-react';

export const BusinessRoiCalculator: React.FC = () => {
  const [employees, setEmployees] = useState<number>(12);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(25);
  const [aiInvestment, setAiInvestment] = useState<number>(12000);

  // 48 working weeks per year
  const totalHoursSavedAnnual = employees * hoursPerWeek * 48;
  const grossSavingsAnnual = totalHoursSavedAnnual * hourlyRate;
  const netFirstYearSavings = grossSavingsAnnual - aiInvestment;
  const roiPercentage =
    aiInvestment > 0 ? Math.round(((grossSavingsAnnual - aiInvestment) / aiInvestment) * 100) : 0;
  const paybackMonths =
    grossSavingsAnnual > 0
      ? Math.max(0.5, Number(((aiInvestment / grossSavingsAnnual) * 12).toFixed(1)))
      : 0;

  const whatsappMessage = encodeURIComponent(
    `Bonjour Ingénieur Tshimanga Ntumba Michel, j'ai simulé un projet IA sur votre portfolio :\n` +
      `- Collaborateurs : ${employees}\n` +
      `- Heures automatisables : ${hoursPerWeek}h/semaine/pers.\n` +
      `- Gain brut annuel estimé : ${grossSavingsAnnual.toLocaleString()} $\n` +
      `- ROI prévisionnel : ${roiPercentage}%\n` +
      `Je souhaite échanger sur une étude de faisabilité pour mon entreprise.`
  );

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#090f2e]/90 border border-fuchsia-500/30 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-cyan-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-fuchsia-400 uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4 text-fuchsia-400" />
            <span>Finance &amp; Stratégie Technologique</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Calculateur de Rentabilité (ROI) IA pour Entreprise
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Évaluez l'impact financier net de l'automatisation par intelligence artificielle dans
            votre organisation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input */}
        <div className="lg:col-span-6 space-y-5 bg-[#070c26] p-5 rounded-xl border border-cyan-900/40">
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">Nombre de collaborateurs concernés</span>
              <span className="text-cyan-400 font-mono font-bold">{employees} personnes</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="1"
              value={employees}
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">
                Heures répétitives automatisables / semaine
              </span>
              <span className="text-fuchsia-400 font-mono font-bold">
                {hoursPerWeek} heures / pers.
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">
                Coût horaire moyen chargé de l'équipe
              </span>
              <span className="text-blue-400 font-mono font-bold">{hourlyRate} $/heure</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">
                Budget estimé d'implémentation IA &amp; MLOps
              </span>
              <span className="text-emerald-400 font-mono font-bold">
                {aiInvestment.toLocaleString()} $
              </span>
            </div>
            <input
              type="range"
              min="3000"
              max="50000"
              step="1000"
              value={aiInvestment}
              onChange={(e) => setAiInvestment(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>

        {/* Dynamic ROI Financial Results */}
        <div className="lg:col-span-6 bg-[#070c26] p-6 rounded-xl border border-fuchsia-500/30 space-y-4">
          <div className="text-xs font-mono text-fuchsia-300 uppercase tracking-wider mb-2">
            PROJECTION FINANCIÈRE ANNUELLE
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0c1438] border border-cyan-900/50">
              <span className="text-xs text-slate-400 block mb-1">Gain Brut Annuel</span>
              <span className="text-2xl font-extrabold text-cyan-300 font-mono tabular-nums">
                {grossSavingsAnnual.toLocaleString()} $
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                {totalHoursSavedAnnual.toLocaleString()} h libérées
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c1438] border border-fuchsia-900/50">
              <span className="text-xs text-slate-400 block mb-1">Gain Net An 1</span>
              <span
                className={`text-2xl font-extrabold font-mono tabular-nums ${netFirstYearSavings >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}
              >
                {netFirstYearSavings.toLocaleString()} $
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">Après amortissement</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c1438] border border-cyan-900/50">
              <span className="text-xs text-slate-400 block mb-1">ROI Année 1</span>
              <span className="text-2xl font-extrabold text-fuchsia-400 font-mono tabular-nums">
                +{roiPercentage}%
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">Rendement du capital</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0c1438] border border-cyan-900/50">
              <span className="text-xs text-slate-400 block mb-1">Délai d'Amortissement</span>
              <span className="text-2xl font-extrabold text-blue-300 font-mono tabular-nums">
                {paybackMonths} mois
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">Payback opérationnel</span>
            </div>
          </div>

          {/* Action to send to WhatsApp */}
          <div className="pt-2">
            <a
              href={`https://wa.me/243857348387?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Soumettre cette estimation à l'Ingénieur Michel sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
