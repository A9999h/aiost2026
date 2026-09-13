/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OrientationSection } from './components/OrientationSection';
import { AiTaxonomySection } from './components/AiTaxonomySection';
import { FeaturedCaseManufacturing } from './components/FeaturedCaseManufacturing';
import { Text2SqlCase } from './components/Text2SqlCase';
import { IndustryIntelligenceCase } from './components/IndustryIntelligenceCase';
import { GoverningPrinciples } from './components/GoverningPrinciples';
import { CareerTrajectory } from './components/CareerTrajectory';
import { AboutArchitect } from './components/AboutArchitect';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EA] text-[#292B2F] flex flex-col font-sans selection:bg-[#F3E7B8] selection:text-[#292B2F]">
      {/* Sticky Header with Navigation & Branding */}
      <Header
        onOpenCvModal={() => setCvModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 01: Hero with Shark Visual Signature */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Section 02: Architectural Orientation (Problem, System, Execution) */}
        <OrientationSection />

        {/* Section 03: AI Taxonomy & Strategy (3 Narrative Patterns) */}
        <AiTaxonomySection />

        {/* Section 04: Featured Hero Case — Manufacturing Work Management */}
        <FeaturedCaseManufacturing />

        {/* Section 05: Case 02 — Text2SQL with Defined System Boundaries */}
        <Text2SqlCase />

        {/* Section 06: Case 03 — Weekly Industry Intelligence & Rigorous KPIs */}
        <IndustryIntelligenceCase />

        {/* Section 07: Governing Principles (How I Make Product Decisions) */}
        <GoverningPrinciples />

        {/* Section 08: Career Trajectory & Technical Heritage (Data -> SA/SD -> AI PM) */}
        <CareerTrajectory />

        {/* Section 09: About the Architect with Signature Shark Philosophy */}
        <AboutArchitect />

        {/* Section 10: Call To Action (Have a messy problem? Let's make it clear.) */}
        <ContactCta
          onOpenCvModal={() => setCvModalOpen(true)}
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
