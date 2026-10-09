import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AcademicJourney } from './components/AcademicJourney';
import { DomainsExpertise } from './components/DomainsExpertise';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { InteractiveAIPipeline } from './components/InteractiveAIPipeline';
import { BusinessRoiCalculator } from './components/BusinessRoiCalculator';
import { GeoAuditSection } from './components/GeoAuditSection';
import { StepContactForm } from './components/StepContactForm';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Identity & Visual cyber system */}
        <HeroSection />

        {/* 2. Academic Journey & UNIKIN Teaching */}
        <AcademicJourney />

        {/* 3. Domains of Expertise & Business Strategy */}
        <DomainsExpertise />

        {/* 4. Real-world Projects & Research Showcase */}
        <ProjectsShowcase />

        {/* 5. Interactive Engineering Tools (Simulation & Business ROI) */}
        <section id="simulateurs" className="py-20 border-b border-cyan-950/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <InteractiveAIPipeline />
            <BusinessRoiCalculator />
          </div>
        </section>

        {/* 6. Semantic GEO & SEO Knowledge Base */}
        <GeoAuditSection />

        {/* 7. Step-by-Step 3-tier Contact Form & WhatsApp */}
        <StepContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action (+243 857348387) */}
      <WhatsAppFloatingButton />
    </div>
  );
}
