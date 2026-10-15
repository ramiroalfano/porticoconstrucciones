import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { BeforeAfterProcess } from './components/BeforeAfterProcess.tsx';
import { ValuesSection } from './components/ValuesSection.tsx';
import { ProjectsPortfolio } from './components/ProjectsPortfolio.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { AnimatedWhatsAppButton } from './components/AnimatedWhatsAppButton.tsx';
import { Footer } from './components/Footer.tsx';
import { AdminVideoModal } from './components/AdminVideoModal.tsx';

export default function App() {
  const [isAdminVideoOpen, setIsAdminVideoOpen] = useState(false);
  const [quoteData, setQuoteData] = useState<{
    workType?: string;
    area?: number;
    quality?: string;
    services?: string[];
    estimateText?: string;
  } | null>(null);

  useEffect(() => {
    // Check for ?admin=video or #admin in URL
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('admin') === 'video' || window.location.hash === '#admin-video') {
      setIsAdminVideoOpen(true);
    }

    // Keyboard shortcut: Ctrl + Shift + U or Cmd + Shift + U
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        setIsAdminVideoOpen((prev) => !prev);
      }
    };

    // Custom event
    const handleOpenAdmin = () => setIsAdminVideoOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-admin-video', handleOpenAdmin);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-admin-video', handleOpenAdmin);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setQuoteData({
      workType: serviceName,
    });
    scrollToSection('contacto');
  };

  const handleQuoteSimilarProject = (projectName: string) => {
    setQuoteData({
      workType: `Proyecto similar a: ${projectName}`,
    });
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F2D3A] flex flex-col selection:bg-[#FF8A00] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenContact={() => scrollToSection('contacto')}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Cinematic Animated Construction Background & Proof Strip */}
        <Hero
          onScrollToSection={scrollToSection}
          onOpenContact={() => scrollToSection('contacto')}
        />

        {/* Quiénes Somos / Institucional */}
        <AboutUs onOpenContact={() => scrollToSection('contacto')} />

        {/* 5 Unidades de Negocio & Servicios */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Obras y Proyectos Realizados */}
        <ProjectsPortfolio
          onQuoteSimilar={handleQuoteSimilarProject}
        />

        {/* Detrás de Escena: Antes / Proceso / Después */}
        <BeforeAfterProcess />

        {/* 4 Valores Fundamentales */}
        <ValuesSection />

        {/* FAQ - Transparencia en Plazos, Materiales y Pagos */}
        <FAQSection onOpenContact={() => scrollToSection('contacto')} />

        {/* Sección de Contacto Directo */}
        <ContactSection prefilledData={quoteData} />
      </main>

      {/* Floating Animated WhatsApp Button */}
      <AnimatedWhatsAppButton phoneNumber="5491112345678" />

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenAdmin={() => setIsAdminVideoOpen(true)}
      />

      {/* Secret Admin Video Modal (Only accessible via ?admin=video or Ctrl+Shift+U or admin link) */}
      <AdminVideoModal
        isOpen={isAdminVideoOpen}
        onClose={() => setIsAdminVideoOpen(false)}
      />
    </div>
  );
}
