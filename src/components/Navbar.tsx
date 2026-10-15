import React, { useState, useEffect } from 'react';
import { PorticoLogo } from './PorticoLogo.tsx';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Obras', id: 'obras' },
    { label: 'Valores', id: 'valores' },
    { label: 'Preguntas', id: 'faq' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F2D3A]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-sm"
            aria-label="Pórtico Construcciones - Inicio"
          >
            <PorticoLogo variant="light" size="sm" />
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-[#FF8A00] transition-colors whitespace-nowrap shrink-0 text-slate-200 cursor-pointer focus:outline-none focus-visible:text-[#FF8A00]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] transition-all rounded shadow-md hover:shadow-orange-500/20 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A00]"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF8A00] transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F2D3A] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-base font-medium text-slate-200 hover:text-[#FF8A00] py-2 border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] rounded text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Presupuesto</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+5491112345678"
                className="w-full py-2.5 text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>+54 9 11 1234 5678</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
