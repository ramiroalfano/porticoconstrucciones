import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal.tsx';

export const SuppliersSection: React.FC = () => {
  const suppliers = [
    {
      name: 'Loma Negra',
      category: 'Hormigón & Cemento',
      detail: 'Hormigón elaborado H21/H30 certificado IRAM',
      badge: 'Norma IRAM 50000',
    },
    {
      name: 'Acindar',
      category: 'Acero Estructural',
      detail: 'Hierro ADN 420 y mallas electrosoldadas',
      badge: 'ArcelorMittal',
    },
    {
      name: 'Klaukol',
      category: 'Adhesivos & Mezclas',
      detail: 'Pegamentos especiales e hidrófugos de alta adherencia',
      badge: 'Garantía Fabril',
    },
    {
      name: 'Barbieri',
      category: 'Steel Framing',
      detail: 'Perfiles de acero galvanizado para construcción en seco',
      badge: 'Calidad Certificada',
    },
    {
      name: 'Ternium',
      category: 'Chapas & Perfilería',
      detail: 'Chapas cincalum y perfiles estructurales pesados',
      badge: 'Normas Siderúrgicas',
    },
    {
      name: 'Sika',
      category: 'Química de Obra',
      detail: 'Aditivos, selladores elásticos e impermeabilización técnica',
      badge: 'Líder Global',
    },
    {
      name: 'Ferrum',
      category: 'Sanitarios',
      detail: 'Porcelana sanitaria de alta resistencia y durabilidad',
      badge: 'Garantía Oficial',
    },
    {
      name: 'FV Grifería',
      category: 'Griferías & Válvulas',
      detail: 'Sistemas de corte cerámico y tecnología hidrosanitaria',
      badge: 'Primera Línea',
    },
    {
      name: 'Aluar',
      category: 'Aberturas & Aluminio',
      detail: 'Líneas Módena y A30 con ruptura de puente térmico',
      badge: 'Aluminio Argentino',
    },
    {
      name: 'Tigre / Saladillo',
      category: 'Instalaciones Fluidos',
      detail: 'Termofusión H3 para agua sanitaria y desagües insonorizados',
      badge: 'Presión Certificada',
    },
  ];

  return (
    <section id="proveedores" className="py-14 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Compact & Direct */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-1.5">
                <span className="w-5 h-[2px] bg-[#FF8A00]" />
                <span>Calidad en Insumos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2D3A] tracking-tight">
                Proveedores con los que trabajamos
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              Trabajamos exclusivamente con marcas líderes que cumplen normas IRAM e ISO, asegurando la máxima resistencia estructural y garantía en obra.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Continuous Carousel (Left to Right, Infinite) */}
        <ScrollReveal direction="up" duration={800} delay={120}>
          <div className="relative mt-2">
            {/* Subtle edge fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Scrolling Track */}
            <div className="overflow-hidden py-3">
              <div className="animate-marquee-ltr flex items-stretch gap-4">
                {[...suppliers, ...suppliers].map((sup, idx) => (
                  <div
                    key={`${sup.name}-${idx}`}
                    className="w-[260px] sm:w-[280px] shrink-0 bg-[#F8F9FA] hover:bg-white border border-slate-200/90 hover:border-[#FF8A00] rounded-lg p-4 transition-all duration-200 group hover:shadow-md flex flex-col justify-between cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#FF8A00] transition-colors">
                          {sup.category}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 opacity-70 group-hover:opacity-100" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#1F2D3A] tracking-tight mb-1">
                        {sup.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                        {sup.detail}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-medium text-slate-600">{sup.badge}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
