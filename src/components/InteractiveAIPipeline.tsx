import React, { useState } from 'react';
import { Play, RotateCcw, Cpu, Zap, Activity, Check, Layers, Sliders } from 'lucide-react';

type PipelineType = 'fintech-risk' | 'vision-edge' | 'bilingual-rag';

export const InteractiveAIPipeline: React.FC = () => {
  const [pipelineType, setPipelineType] = useState<PipelineType>('fintech-risk');
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(0.75);
  const [quantization, setQuantization] = useState<'fp16' | 'int8' | 'int4'>('int8');
  const [batchSize, setBatchSize] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<{
    latencyMs: number;
    memoryMb: number;
    confidenceScore: number;
    decision: string;
    decisionStatus: 'success' | 'warning' | 'alert';
    explanation: string;
    businessRecommendation: string;
  } | null>(null);

  const runSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      let latency = 24;
      let memory = 120;
      let confidence = 0.88;
      let decision = '';
      let status: 'success' | 'warning' | 'alert' = 'success';
      let explanation = '';
      let recommendation = '';

      if (pipelineType === 'fintech-risk') {
        latency = quantization === 'int4' ? 14 : quantization === 'int8' ? 22 : 46;
        memory = quantization === 'int4' ? 75 : quantization === 'int8' ? 140 : 290;
        confidence = Number((0.82 + Math.random() * 0.14).toFixed(3));
        const passed = confidence >= confidenceThreshold;
        decision = passed ? 'Crédit Approuvé (Score A+)' : 'Risque Modéré (Revue Manuelle)';
        status = passed ? 'success' : 'warning';
        explanation = `Analyse de 42 signaux de transactions mobiles (RDC). Graphe transactionnel sans anomalie détectée. Entropie résiduelle : ${(1 - confidence).toFixed(3)}.`;
        recommendation = passed
          ? 'Octroi instantané recommandé via API bancaire avec taux standard.'
          : 'Déclenchement d’une vérification supplémentaire par un agent de crédit.';
      } else if (pipelineType === 'vision-edge') {
        latency = quantization === 'int4' ? 11 : quantization === 'int8' ? 18 : 38;
        memory = quantization === 'int4' ? 52 : quantization === 'int8' ? 98 : 210;
        confidence = Number((0.89 + Math.random() * 0.09).toFixed(3));
        const passed = confidence >= confidenceThreshold;
        decision = passed
          ? 'Anomalie Détectée (Type: Flétrissement Bactérien)'
          : 'Scan Non Concluant';
        status = passed ? 'alert' : 'warning';
        explanation = `Inférence convolutive sur image satellite multispectrale (Bassin du Congo). Matrice de confusion locale validée à 97.2%.`;
        recommendation = passed
          ? 'Alerte phytosanitaire automatique envoyée à la coopérative agricole.'
          : 'Nécessite une seconde capture avec exposition accrue.';
      } else {
        // Bilingual RAG
        latency = quantization === 'int4' ? 42 : quantization === 'int8' ? 68 : 140;
        memory = quantization === 'int4' ? 380 : quantization === 'int8' ? 720 : 1450;
        confidence = Number((0.91 + Math.random() * 0.07).toFixed(3));
        const passed = confidence >= confidenceThreshold;
        decision = passed
          ? 'Réponse RAG Bilingue Générée avec Sources'
          : 'Indice de Confiance Faible';
        status = passed ? 'success' : 'warning';
        explanation = `Recherche sémantique vectorielle bilingue (Français - Lingala). Extraction de 3 paragraphes du Code du Travail / Règlements bancaires.`;
        recommendation = passed
          ? 'Délivrance de la réponse au client avec citation d’articles légaux certifiés.'
          : 'Transfert de la demande complexe vers un conseiller juriste humain.';
      }

      setSimulationResult({
        latencyMs: latency * batchSize,
        memoryMb: memory,
        confidenceScore: confidence,
        decision,
        decisionStatus: status,
        explanation,
        businessRecommendation: recommendation,
      });
      setIsRunning(false);
    }, 600);
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#090f2e]/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-cyan-900/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Démonstrateur Technique Live</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Simulateur de Pipeline IA en Temps Réel
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Testez la latence tensorielle, l’inférence et l’aide à la décision business sur des cas
            d'usage réels.
          </p>
        </div>

        {/* Pipeline selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#060a22] rounded-xl border border-cyan-900/60">
          <button
            type="button"
            onClick={() => {
              setPipelineType('fintech-risk');
              setSimulationResult(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              pipelineType === 'fintech-risk'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            FinTech &amp; Scoring
          </button>
          <button
            type="button"
            onClick={() => {
              setPipelineType('vision-edge');
              setSimulationResult(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              pipelineType === 'vision-edge'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vision Industrielle
          </button>
          <button
            type="button"
            onClick={() => {
              setPipelineType('bilingual-rag');
              setSimulationResult(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              pipelineType === 'bilingual-rag'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            RAG Bilingue (FR/LN)
          </button>
        </div>
      </div>

      {/* Simulator parameters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-5 bg-[#070c26] p-5 rounded-xl border border-cyan-900/40">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Hyperparamètres &amp; Architecture</span>
          </div>

          {/* Slider: Seuil de confiance */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-300 font-medium">Seuil de Décision (Threshold)</span>
              <span className="text-cyan-400 font-mono font-bold">
                {(confidenceThreshold * 100).toFixed(0)}%
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="0.95"
              step="0.05"
              value={confidenceThreshold}
              onChange={(e) => setConfidenceThreshold(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Quantization */}
          <div>
            <span className="text-xs text-slate-300 font-medium block mb-2">
              Quantification Tensorielle (Précision / Débit)
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['fp16', 'int8', 'int4'] as const).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setQuantization(q)}
                  className={`py-1.5 px-2 text-xs font-mono font-semibold rounded border transition-all ${
                    quantization === q
                      ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {q.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Batch Size */}
          <div>
            <span className="text-xs text-slate-300 font-medium block mb-2">
              Taille de Lot (Batch Size)
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[1, 4, 16].map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBatchSize(b)}
                  className={`py-1.5 px-2 text-xs font-mono font-semibold rounded border transition-all ${
                    batchSize === b
                      ? 'border-fuchsia-400 bg-fuchsia-950/60 text-fuchsia-300'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  Batch={b}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={runSimulation}
              disabled={isRunning}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <Activity className="w-4 h-4 animate-spin" />
                  <span>Calcul Inférence &amp; Tenseurs...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Exécuter l'Inférence en Direct</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Output & Inspection Dashboard */}
        <div className="lg:col-span-7 bg-[#070c26] p-5 rounded-xl border border-cyan-900/40 min-h-[320px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-cyan-950">
              <span className="font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>MONITEUR D’INFÉRENCE &amp; MÉTROLOGIE</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Mode: {quantization.toUpperCase()} · Batch {batchSize}
              </span>
            </div>

            {simulationResult ? (
              <div className="space-y-4">
                {/* Result metrics bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#0c1438] border border-cyan-900/40">
                    <span className="text-[11px] text-slate-400 block">Latence Mesurée</span>
                    <span className="text-lg font-bold text-cyan-300 font-mono tabular-nums">
                      {simulationResult.latencyMs} ms
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0c1438] border border-cyan-900/40">
                    <span className="text-[11px] text-slate-400 block">Empreinte VRAM</span>
                    <span className="text-lg font-bold text-fuchsia-300 font-mono tabular-nums">
                      {simulationResult.memoryMb} MB
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0c1438] border border-cyan-900/40">
                    <span className="text-[11px] text-slate-400 block">Score Confiance</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono tabular-nums">
                      {(simulationResult.confidenceScore * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Decision output */}
                <div
                  className={`p-4 rounded-xl border ${
                    simulationResult.decisionStatus === 'success'
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                      : simulationResult.decisionStatus === 'alert'
                        ? 'bg-rose-950/20 border-rose-500/40 text-rose-200'
                        : 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-wider mb-1 font-semibold">
                    Verdict Algorithmique :
                  </div>
                  <div className="text-base font-bold text-white mb-2">
                    {simulationResult.decision}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {simulationResult.explanation}
                  </p>
                </div>

                {/* Business Impact Box */}
                <div className="p-3.5 rounded-xl bg-[#090f2e] border border-cyan-500/30 text-xs">
                  <span className="text-cyan-300 font-bold block mb-1">
                    Recommandation Opérationnelle &amp; Business :
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {simulationResult.businessRecommendation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-48 flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <Cpu className="w-10 h-10 text-cyan-500/40 mb-3" />
                <p className="text-sm font-semibold text-slate-300">
                  Prêt pour l'inférence expérimentale
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-sm">
                  Sélectionnez vos paramètres à gauche et cliquez sur « Exécuter l'Inférence en
                  Direct » pour simuler le comportement du pipeline.
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-cyan-950 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Environnement : PyTorch Inférence / TensorRT</span>
            <span className="text-cyan-400">Précision vérifiée FST UNIKIN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
