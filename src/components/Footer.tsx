import React from 'react';
import { PorticoLogo } from './PorticoLogo.tsx';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#15202A] text-slate-400 border-t border-white/10 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <PorticoLogo variant="light" size="md" showSubtitle={true} />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Grandes proyectos, mejores historias. Empresa constructora especializada en obras civiles, dirección técnica, remodelaciones comerciales y desarrollos inmobiliarios llave en mano.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF8A00]" />
                <span>Normas IRAM & Seguridad ART</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF8A00]" />
                <span>Profesionales Matriculados</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegación Institucional
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onScrollToSection('quienes-somos')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left"
                >
                  Quiénes Somos & Filosofía
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('servicios')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left"
                >
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('obras')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left"
                >
                  Obras Realizadas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('valores')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left"
                >
                  Valores Fundamentales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('faq')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left"
                >
                  Preguntas Frecuentes & Garantías
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="hover:text-[#FF8A00] transition-colors cursor-pointer text-left font-semibold text-white"
                >
                  Contacto & Presupuesto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Casa Central & Obras
            </h4>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>Av. Siempre Viva 1234, Buenos Aires, Argentina</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <a href="tel:+5491112345678" className="hover:text-[#FF8A00] transition-colors">
                  +54 9 11 1234 5678
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <a href="mailto:info@portico.com.ar" className="hover:text-[#FF8A00] transition-colors">
                  info@portico.com.ar
                </a>
              </p>
            </div>

            <div className="mt-5 p-3 rounded bg-[#1A2733] border border-white/5 text-[11px] text-slate-400">
              <span className="text-white font-semibold">Atención telefónica:</span> Lunes a Viernes 08:00 a 18:00 hs.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} Pórtico Construcciones. Todos los derechos reservados.
            </span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                title="Configuración de video de fondo (Ctrl+Shift+U)"
                className="opacity-20 hover:opacity-100 transition-opacity p-0.5 text-slate-500 hover:text-[#FF8A00] cursor-pointer"
                aria-label="Admin video"
              >
                ⚙
              </button>
            )}
          </div>

          <div className="flex items-center gap-6">
            <span>Términos & Condiciones</span>
            <span>·</span>
            <span>Política de Privacidad</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
