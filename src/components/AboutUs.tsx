import React from 'react';
import { Shield, Clock, Award, Users, Check, ArrowRight } from 'lucide-react';

interface AboutUsProps {
  onOpenContact: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenContact }) => {
  const highlights = [
    {
      icon: Clock,
      title: 'Plazos Exactos',
      desc: 'Cronogramas estrictos con entrega en fecha.',
    },
    {
      icon: Shield,
      title: 'Seguridad en Obra',
      desc: 'Normas de higiene y cobertura integral ART.',
    },
    {
      icon: Award,
      title: 'Calidad Certificada',
      desc: 'Materiales de primera línea y ensayos de resistencia.',
    },
    {
      icon: Users,
      title: 'Trato Directo',
      desc: 'Reportes continuos y un único responsable a cargo.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Real Photographic Assets from /public/imgreal/ */}
          <div className="lg:col-span-6 relative">
            {/* Main Facade Image */}
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-slate-900 border border-slate-200">
              <picture>
                <source srcSet="/imgreal/07_fachada_edificio.webp" type="image/webp" />
                <img
                  src="/imgreal/07_fachada_edificio.png"
                  alt="Fachada corporativa de Pórtico Construcciones"
                  className="w-full h-[380px] sm:h-[430px] object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A]/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Quote Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1F2D3A]/90 backdrop-blur-md rounded border border-white/10 text-white">
                <p className="text-xs sm:text-sm font-medium italic text-slate-100">
                  “Cuidamos el patrimonio y la tranquilidad de cada cliente en cada metro cuadrado.”
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-[#FF8A00]">Pórtico Construcciones</span>
                  <span>Sede Central & Obras</span>
                </div>
              </div>
            </div>

            {/* Overlapping Real Photo Badge (Real Helmet with Logo) */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 w-36 sm:w-44 bg-white p-2 rounded-lg shadow-2xl border border-slate-200 hidden sm:block">
              <div className="relative rounded overflow-hidden aspect-square bg-slate-100">
                <picture>
                  <source srcSet="/imgreal/04_casco_con_logo.webp" type="image/webp" />
                  <img
                    src="/imgreal/04_casco_con_logo.png"
                    alt="Casco oficial con logo Pórtico"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={180}
                    height={180}
                  />
                </picture>
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] font-bold text-[#1F2D3A] uppercase tracking-wider block">
                  Seguridad & Calidad
                </span>
                <span className="text-[9px] text-slate-500">Supervisión en obra</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Simplified Clear Arguments */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#FF8A00]" />
              <span>Quiénes Somos</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight leading-tight mb-4">
              Construcción sólida, previsible y sin sorpresas.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              En <strong className="text-[#1F2D3A]">Pórtico Construcciones</strong> gestionamos obras civiles, comerciales y residenciales de principio a fin. Aseguramos ingeniería de precisión, control estricto de costos y cumplimiento contractual de los tiempos de entrega.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Contás con un solo responsable a cargo y asesoramiento técnico continuo en cada fase constructiva.
            </p>

            {/* Highlights Grid - Short & crisp */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-3.5 rounded bg-[#F8F9FA] border border-slate-200">
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1F2D3A]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2D3A] hover:bg-[#FF8A00] transition-colors rounded cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span>Consultar por mi Obra</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Check className="w-4 h-4 text-[#FF8A00]" />
                <span>Presupuesto sin cargo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
