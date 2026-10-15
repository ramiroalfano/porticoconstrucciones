import React from 'react';
import { Shield, Clock, Award, Users, Check } from 'lucide-react';

interface AboutUsProps {
  onOpenContact: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenContact }) => {
  const highlights = [
    {
      icon: Clock,
      title: 'Planificación de Precisión',
      desc: 'Cronogramas Gantt detallados con hitos semanales y abastecimiento preventivo de materiales.',
    },
    {
      icon: Shield,
      title: 'Seguridad Certificada',
      desc: 'Supervisión constante de normas de higiene y seguridad laboral bajo cobertura integral de ART.',
    },
    {
      icon: Award,
      title: 'Garantía Estructural',
      desc: 'Ensayos de probetas de hormigón y trazabilidad completa de insumos de primera línea.',
    },
    {
      icon: Users,
      title: 'Comunicación Fluida',
      desc: 'Reporte quincenal con registro fotográfico del avance real vs. proyectado para el comitente.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Documentary Asset with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <img
                src="/images/construction_site_in_progress_1792078675584.jpg"
                alt="Ingenieros de Pórtico Construcciones fiscalizando estructura de hormigón en obra"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quote Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1F2D3A]/95 backdrop-blur-md rounded border border-white/10 text-white">
                <p className="text-sm font-medium italic text-slate-200">
                  “No solo levantamos muros: coordinamos ingenierías, optimizamos costos y cuidamos el patrimonio de quienes confían en nosotros.”
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-[#FF8A00]">Dirección Técnica Pórtico</span>
                  <span>Obras Civiles & Comerciales</span>
                </div>
              </div>
            </div>

            {/* Subtle brand geometry behind */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#FF8A00]/20 -z-10 rounded-sm hidden sm:block" />
          </div>

          {/* Right Column: Editorial & Conversion Argument */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#FF8A00]" />
              <span>Quiénes Somos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight leading-tight mb-6">
              Construimos mucho más que espacios.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              En <strong>Pórtico Construcciones</strong> entendemos cada proyecto como un desafío técnico y una oportunidad para crear valor duradero. Respaldados por más de una década de experiencia en obras de mediana y gran envergadura, gestionamos la totalidad del ciclo constructivo: desde el estudio preliminar de viabilidad hasta la entrega definitiva llave en mano.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Nuestra metodología minimiza desviaciones presupuestarias y asegura una ejecución limpia y previsible, brindando tranquilidad absoluta a desarrolladores, empresas y familias.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-md bg-[#F4F6F8] border border-slate-200/80">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1F2D3A]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2D3A] hover:bg-[#FF8A00] transition-colors rounded cursor-pointer"
              >
                Conocer Nuestro Equipo Técnico
              </button>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Check className="w-4 h-4 text-[#FF8A00]" />
                <span>Asesoramiento sin cargo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
