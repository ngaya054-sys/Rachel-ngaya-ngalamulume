import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  CheckCircle,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  Building,
  Mail,
  Phone,
  User,
  Briefcase,
  Calendar,
  DollarSign,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const StepContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    userType: 'enterprise',
    serviceType: 'ai-consulting',
    timeline: '1-3months',
    budgetEstimate: '5,000$ – 15,000$',
    projectDescription: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.email.trim()) {
        alert('Veuillez renseigner au moins votre nom complet et votre adresse email.');
        return;
      }
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formattedWhatsAppText = encodeURIComponent(
    `*Demande de Consultation - Portfolio Ir. Tshimanga Michel*\n\n` +
      `*1. Identité & Profil*\n` +
      `- Nom : ${formData.fullName || 'Non spécifié'}\n` +
      `- Email : ${formData.email || 'Non spécifié'}\n` +
      `- Téléphone : ${formData.phone || 'Non spécifié'}\n` +
      `- Organisation : ${formData.organization || 'Non spécifié'}\n` +
      `- Profil : ${formData.userType}\n\n` +
      `*2. Cadrage du Projet*\n` +
      `- Type de besoin : ${formData.serviceType}\n` +
      `- Échéance : ${formData.timeline}\n` +
      `- Budget estimé : ${formData.budgetEstimate}\n\n` +
      `*3. Description*\n` +
      `${formData.projectDescription || 'Demande de premier échange exploratoire.'}`
  );

  return (
    <section id="contact" className="py-20 border-b border-cyan-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Consultation &amp; Partenariat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initier une Collaboration avec l'Ir. Michel
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Vous avez un projet d'intelligence artificielle à industrialiser, une opportunité
            d'affaires à accélérer ou une intervention académique à planifier à l'UNIKIN ? Remplissez
            le formulaire en 3 étapes ou contactez directement par WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Phone & WhatsApp Sidebar Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090f2e]/90 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                CANAL DIRECT &amp; PRIORITAIRE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp &amp; Téléphonie</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Pour une réactivité immédiate, vous pouvez joindre directement l'Ingénieur Tshimanga
                Ntumba Michel au numéro ci-dessous :
              </p>

              {/* Phone display with copy button */}
              <div className="p-4 rounded-xl bg-[#060a22] border border-cyan-900/60 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    Ligne Directe RDC (+243)
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-white font-mono tracking-wide">
                    {PERSONAL_INFO.phoneFormatted}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-lg bg-[#0e1742] hover:bg-cyan-900/40 text-cyan-300 transition-colors"
                  title="Copier le numéro"
                >
                  {copiedPhone ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Direct WhatsApp click button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all mb-4"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Ouvrir la Discussion WhatsApp</span>
              </a>

              <div className="text-xs text-slate-400 space-y-2 pt-2 border-t border-cyan-950">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>UNIKIN, Faculté des Sciences et Technologies</span>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="p-5 rounded-xl bg-[#080d28]/70 border border-cyan-900/40 text-xs text-slate-300">
              <span className="text-cyan-300 font-semibold block mb-1">Délai moyen de réponse :</span>
              <p>Moins de 24 heures pour les demandes formulées via ce portail.</p>
            </div>
          </div>

          {/* Step-by-Step Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090f2e]/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              {/* Stepper Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span className={currentStep >= 1 ? 'text-cyan-400 font-bold' : ''}>
                    1. Coordonnées
                  </span>
                  <span className={currentStep >= 2 ? 'text-cyan-400 font-bold' : ''}>
                    2. Cadrage du Projet
                  </span>
                  <span className={currentStep >= 3 ? 'text-cyan-400 font-bold' : ''}>
                    3. Validation
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#060a22] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Demande Enregistrée avec Succès !</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Merci pour votre message. L'Ir. Tshimanga Ntumba Michel étudiera votre dossier et
                    vous contactera sous 24h.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`https://wa.me/243857348387?text=${formattedWhatsAppText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transférer également sur WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl"
                    >
                      Nouvelle soumission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Identification & Profil */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-white border-b border-cyan-900/40 pb-2">
                        Étape 1 sur 3 : Vos Coordonnées &amp; Profil
                      </h4>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Nom complet &amp; Titre *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="ex. Dr. Jean Kabongo"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Adresse E-mail professionnelle *
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                            <input
                              type="email"
                              required
                              placeholder="jean.kabongo@entreprise.cd"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Numéro de téléphone / WhatsApp
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                            <input
                              type="tel"
                              placeholder="+243 ..."
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Organisation / Entreprise / Institution
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="text"
                            placeholder="Nom de votre structure ou université"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({ ...formData, organization: e.target.value })
                            }
                            className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Votre profil :
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'enterprise', label: 'Entreprise' },
                            { id: 'academic', label: 'Étudiant / Chercheur' },
                            { id: 'investor', label: 'Investisseur' },
                            { id: 'individual', label: 'Autre' },
                          ].map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  userType: t.id as ContactFormData['userType'],
                                })
                              }
                              className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                                formData.userType === t.id
                                  ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                                  : 'border-slate-800 bg-[#060a22] text-slate-400 hover:text-white'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Cadrage du Projet */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-white border-b border-cyan-900/40 pb-2">
                        Étape 2 sur 3 : Nature du Besoin &amp; Cadrage
                      </h4>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-2">
                          Type d'intervention souhaitée :
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            {
                              id: 'ai-consulting',
                              label: 'Consulting en Ingénierie & Stratégie IA',
                            },
                            {
                              id: 'business-automation',
                              label: 'Automatisation de Processus & ROI',
                            },
                            {
                              id: 'academic-course',
                              label: 'Masterclass, Conférence ou Cours UNIKIN',
                            },
                            {
                              id: 'research-partnership',
                              label: 'Partenariat R&D ou Thèse Industrielle',
                            },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  serviceType: item.id as ContactFormData['serviceType'],
                                })
                              }
                              className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                                formData.serviceType === item.id
                                  ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200'
                                  : 'border-slate-800 bg-[#060a22] text-slate-400 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Échéance prévisionnelle :
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                timeline: e.target.value as ContactFormData['timeline'],
                              })
                            }
                            className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                          >
                            <option value="urgent">Immédiat / Urgent (&lt; 1 mois)</option>
                            <option value="1-3months">Moyen terme (1 à 3 mois)</option>
                            <option value="long-term">Vision stratégique long terme</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Enveloppe budgétaire estimée :
                          </label>
                          <select
                            value={formData.budgetEstimate}
                            onChange={(e) =>
                              setFormData({ ...formData, budgetEstimate: e.target.value })
                            }
                            className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                          >
                            <option value="2,000$ – 5,000$">2,000$ – 5,000$</option>
                            <option value="5,000$ – 15,000$">5,000$ – 15,000$</option>
                            <option value="15,000$ – 40,000$+">15,000$ – 40,000$+</option>
                            <option value="Cadre Académique / Non rémunéré">
                              Cadre Académique / Conférence
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Descriptif & Récapitulatif */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-white border-b border-cyan-900/40 pb-2">
                        Étape 3 sur 3 : Descriptif &amp; Confirmation
                      </h4>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Description de vos attentes ou problématique :
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Décrivez brièvement le contexte : objectifs visés, volume de données, systèmes existants..."
                          value={formData.projectDescription}
                          onChange={(e) =>
                            setFormData({ ...formData, projectDescription: e.target.value })
                          }
                          className="w-full bg-[#060a22] border border-cyan-900/60 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      {/* Summary box */}
                      <div className="p-4 rounded-xl bg-[#060a22] border border-cyan-900/40 text-xs space-y-1.5 text-slate-300">
                        <span className="font-bold text-cyan-400 block mb-1">
                          Récapitulatif de votre demande :
                        </span>
                        <div>
                          <strong className="text-white">Demandeur :</strong> {formData.fullName} (
                          {formData.organization || 'Indépendant'})
                        </div>
                        <div>
                          <strong className="text-white">Email :</strong> {formData.email} ·{' '}
                          <strong className="text-white">Téléphone :</strong>{' '}
                          {formData.phone || 'Non renseigné'}
                        </div>
                        <div>
                          <strong className="text-white">Prestation :</strong>{' '}
                          {formData.serviceType} ·{' '}
                          <strong className="text-white">Budget :</strong> {formData.budgetEstimate}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyan-950">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-lg"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Précédent</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      >
                        <span>Continuer</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={`https://wa.me/243857348387?text=${formattedWhatsAppText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Envoyer via WhatsApp</span>
                        </a>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        >
                          <Send className="w-4 h-4" />
                          <span>Valider la Demande</span>
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
