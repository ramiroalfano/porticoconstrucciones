import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsPortfolio } from './components/ProjectsPortfolio.tsx';
import { SuppliersSection } from './components/SuppliersSection.tsx';
import { ClientsTrustSection } from './components/ClientsTrustSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { AnimatedWhatsAppButton } from './components/AnimatedWhatsAppButton.tsx';
import { Footer } from './components/Footer.tsx';
import { AdminVideoModal } from './components/AdminVideoModal.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';

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
    // Dynamic SEO URL synchronization for SPA (canonical, og:url, og:image, twitter:image, JSON-LD)
    const currentUrl = window.location.origin + window.location.pathname;
    const ogImageUrl = `${window.location.origin}/imgreal/07_fachada_edificio.png`;

    const canonicalEl = document.getElementById('canonical-link') as HTMLLinkElement | null;
    if (canonicalEl) canonicalEl.href = currentUrl;

    const ogUrlEl = document.getElementById('og-url') as HTMLMetaElement | null;
    if (ogUrlEl) ogUrlEl.content = currentUrl;

    const ogImgEl = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (ogImgEl) ogImgEl.content = ogImageUrl;

    const twImgEl = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
    if (twImgEl) twImgEl.content = ogImageUrl;

    const schemaEl = document.getElementById('schema-local-business');
    if (schemaEl && schemaEl.textContent) {
      try {
        const schemaData = JSON.parse(schemaEl.textContent);
        schemaData.url = currentUrl;
        schemaData.image = ogImageUrl;
        schemaEl.textContent = JSON.stringify(schemaData);
      } catch {
        // ignore JSON parse error
      }
    }

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
      workType: `Consulta por obra similar: ${projectName}`,
    });
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F2D3A] flex flex-col selection:bg-[#FF8A00] selection:text-white">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

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

        {/* Unidades de Negocio & Servicios */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Proyectos Realizados y en Marcha */}
        <ProjectsPortfolio onQuoteSimilar={handleQuoteSimilarProject} />

        {/* Proveedores con los que trabajamos */}
        <SuppliersSection />

        {/* Quiénes Confiaron en Nosotros */}
        <ClientsTrustSection />

        {/* Sección de Contacto Directo */}
        <ContactSection prefilledData={quoteData} />
      </main>

      {/* Floating Animated WhatsApp Button */}
      <AnimatedWhatsAppButton phoneNumber="5492615550192" />

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
