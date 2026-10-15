import React, { useState } from 'react';
import { Layers, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export const BeforeAfterProcess: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'antes' | 'proceso' | 'despues'>('despues');

  const stages = [
    {
      id: 'antes',
      label: 'Antes',
      title: 'El Terreno o Estado Original',
      subtitle: 'Estudio de suelos, demolición controlada y nivelación',
      image: '/src/assets/images/architectural_blueprints_planning_1792078675841.jpg',
      badge: 'Fase Inicial',
      description:
        'Todo comienza con un relevamiento exhaustivo del terreno, verificación de límites catastrales, análisis de cotas y preparación del suelo para el cálculo de fundaciones.',
      metrics: ['Estudio de Suelos', 'Nivelación Láser', 'Planos Municipales'],
    },
    {
      id: 'proceso',
      label: 'Proceso',
      title: 'Hormigonado, Estructura & Gremios',
      subtitle: 'Dirección técnica continua y coordinación milimétrica',
      image: '/src/assets/images/construction_site_in_progress_1792078675584.jpg',
      badge: 'En Ejecución',
      description:
        'El corazón de la obra: encofrados, hierros tratados, hormigonado con ensayos de laboratorio y tendido de instalaciones antes del cierre de tabiques.',
      metrics: ['Ensayos de Rotura', 'Auditoría ART', 'Certificados Semanales'],
    },
    {
      id: 'despues',
      label: 'Después',
      title: 'Entrega Llave en Mano',
      subtitle: 'Espacios funcionales de alta gama listos para habitar o producir',
      image: '/src/assets/images/facade_renovation_finished_1792078679765.jpg',
      badge: 'Obra Finalizada',
      description:
        'Terminaciones nobles, carpinterías de alta prestación con DVH, envolventes térmicas y entrega formal con manual de mantenimiento y garantía extendida.',
      metrics: ['Garantía Estructural', 'Manual de Uso', 'Satisfacción 100%'],
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStage)!;

  return (
    <section className="py-24 bg-[#1F2D3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Brand Card Image 8 & 11 */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#FF8A00]" />
            <span>Detrás de Escena</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Del terreno a tu próximo proyecto.
          </h2>

          <p className="text-base text-slate-300 font-normal leading-relaxed">
            <strong className="text-white">Lo que no siempre se ve también construye.</strong> Detrás de cada obra hay planificación milimétrica, coordinación de decenas de operarios, decisiones estratégicas y miles de horas de trabajo en terreno.
          </p>
        </div>

        {/* 3-Stage Interactive Segmented Control */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-[#16212B] rounded-lg border border-white/10 mb-8 max-w-2xl">
          {stages.map((st, index) => {
            const isCurrent = activeStage === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id as any)}
                className={`w-full sm:w-auto flex-1 py-3 px-5 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#FF8A00] text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{index + 1}. {st.label}</span>
                {isCurrent && <Eye className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Visual Transformation Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#18232F] border border-white/10 rounded-lg p-6 sm:p-10 shadow-2xl">
          {/* Main Visual Image */}
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden min-h-[340px] sm:min-h-[440px] bg-black">
            <img
              src={currentStage.image}
              alt={currentStage.title}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#FF8A00] text-white text-xs font-bold uppercase tracking-wider rounded shadow">
              {currentStage.badge}
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider">
                Etapa {currentStage.label}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentStage.title}
              </h3>
            </div>
          </div>

          {/* Details & Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                <span>Transformación Constructiva</span>
                <span>·</span>
                <span className="text-[#FF8A00]">Control de Calidad</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-3">
                {currentStage.subtitle}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {currentStage.description}
              </p>

              <div className="space-y-3 mb-8">
                <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Estándares Garantizados en esta Fase:
                </h5>
                {currentStage.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded bg-[#16212B] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                    <span className="text-xs font-medium text-slate-200">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF8A00]" />
                <span>Supervisión ininterrumpida</span>
              </span>
              <button
                onClick={() => {
                  const nextIdx = (stages.findIndex((s) => s.id === activeStage) + 1) % stages.length;
                  setActiveStage(stages[nextIdx].id as any);
                }}
                className="text-[#FF8A00] hover:text-[#FFA033] font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ver Siguiente Fase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
