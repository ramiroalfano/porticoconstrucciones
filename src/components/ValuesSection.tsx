import React from 'react';
import { ShieldCheck, Award, Users, Sparkles } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      id: 'seguridad',
      title: 'Seguridad',
      tagline: 'En cada etapa del proceso.',
      description:
        'Cero accidentes como principio rector. Capacitación continua de cuadrillas, elementos de protección homologados y rigurosa cobertura de ART en todos nuestros frentes.',
      icon: ShieldCheck,
    },
    {
      id: 'experiencia',
      title: 'Experiencia',
      tagline: 'Conocimiento que se refleja en resultados.',
      description:
        'Más de una década resolviendo desafíos estructurales complejos, optimizando costos por metro cuadrado y garantizando la viabilidad técnica de cada proyecto.',
      icon: Award,
    },
    {
      id: 'equipo',
      title: 'Trabajo en Equipo',
      tagline: 'Juntos construimos más.',
      description:
        'Sinergia transparente entre ingenieros, arquitectos, comitentes y contratistas. Canales de comunicación abiertos y reporte constante sin intermediarios innecesarios.',
      icon: Users,
    },
    {
      id: 'calidad',
      title: 'Calidad',
      tagline: 'En cada detalle, siempre.',
      description:
        'Materiales de primera marca, ensayos de resistencia certificados y terminaciones milimétricas que aseguran la máxima plusvalía de su inmueble en el tiempo.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="valores" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#FF8A00]" />
            <span>Cultura & Compromiso</span>
            <span className="w-5 h-[2px] bg-[#FF8A00]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight">
            Nuestros Valores Fundamentales
          </h2>

          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Los 4 pilares innegociables sobre los que levantamos cada una de nuestras obras y consolidamos vínculos de confianza a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="p-8 rounded-lg bg-[#F8F9FA] hover:bg-[#F0F3F6] border border-slate-200 transition-all hover:border-[#FF8A00]/40 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2D3A] mb-1">
                    {val.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#FF8A00] mb-4 uppercase tracking-wider">
                    {val.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F2D3A]" />
                  <span>Estándar Pórtico Garantizado</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
