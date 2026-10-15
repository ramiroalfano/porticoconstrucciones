import React, { useState } from 'react';
import { ClipboardList, HardHat, Search, Users2, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onOpenContact: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Planificación',
      subtitle: 'La base del éxito antes de poner el primer ladrillo',
      icon: ClipboardList,
      deliverables: [
        'Estudio de suelos y análisis topográfico del terreno',
        'Cómputo métrico cerrado ítem por ítem',
        'Cronograma Gantt con hitos y curva de avance de obra',
        'Presupuesto definitivo con lista de precios transparentes',
      ],
      detailText:
        'Una obra bien planificada evita sobrecostos y retrasos. Definimos cada variable constructiva para que no existan imprevistos durante la ejecución.',
    },
    {
      number: '02',
      title: 'Ejecución',
      subtitle: 'Dirección técnica y cuadrillas especializadas',
      icon: HardHat,
      deliverables: [
        'Jefatura técnica permanente y capataces matriculados en obra',
        'Abastecimiento justo a tiempo de materiales de primera calidad',
        'Seguridad e higiene laboral estricta con seguros ART vigentes',
        'Coordinación milimétrica de gremios húmedos, secos e instalaciones',
      ],
      detailText:
        'Transformamos el proyecto en realidad tangible cumpliendo los más altos estándares constructivos de solidez estructural y terminaciones.',
    },
    {
      number: '03',
      title: 'Control',
      subtitle: 'Auditorías de calidad y ensayos de laboratorio',
      icon: Search,
      deliverables: [
        'Ensayos de rotura y compresión de probetas de hormigón',
        'Pruebas hidráulicas y eléctricas antes del cierre de paredes',
        'Reportes fotográficos quincenales para el comitente',
        'Verificación estricta de escuadras, niveles y aplomos',
      ],
      detailText:
        'Fiscalizamos cada etapa con instrumental de precisión. Nada queda librado al azar ni a la improvisación.',
    },
    {
      number: '04',
      title: 'Acompañamiento',
      subtitle: 'Tranquilidad total incluso después de la entrega',
      icon: Users2,
      deliverables: [
        'Entrega de planos conforme a obra digitales y físicos',
        'Manual de usuario y mantenimiento preventivo del inmueble',
        'Garantía estructural certificada por escrito',
        'Canal directo de posventa para consultas y servicio técnico',
      ],
      detailText:
        'Nuestra relación con el cliente no termina con la llave en mano: respaldamos lo que construimos con una garantía real y soporte post-entrega.',
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header directly inspired by Brand Card Image 7 */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
            <span className="w-6 h-[2px] bg-[#FF8A00]" />
            <span>El Método Pórtico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight leading-tight mb-4">
            Cada proyecto comienza con una idea. <br className="hidden sm:inline" />
            <span className="text-[#FF8A00]">Nuestro trabajo es convertirla en realidad.</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Un proceso ordenado de 4 etapas donde la previsibilidad, el rigor técnico y la comunicación transparente garantizan resultados excepcionales.
          </p>
        </div>

        {/* 4 Interactive Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={st.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-lg transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F2D3A] text-white shadow-xl ring-2 ring-[#FF8A00] -translate-y-1'
                    : 'bg-white text-[#1F2D3A] hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-mono font-bold ${
                        isSelected ? 'text-[#FF8A00]' : 'text-slate-400'
                      }`}
                    >
                      {st.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center ${
                        isSelected ? 'bg-white/10 text-[#FF8A00]' : 'bg-[#1F2D3A]/5 text-[#1F2D3A]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isSelected ? 'text-white' : 'text-[#1F2D3A]'
                    }`}
                  >
                    {st.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {st.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-[#FF8A00] font-semibold' : 'text-slate-400'}>
                    {isSelected ? 'Etapa activa' : 'Ver entregables'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#FF8A00]' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A00] uppercase tracking-wider mb-2">
                <span>Fase {steps[activeStep].number} en detalle</span>
                <span>·</span>
                <span className="font-sans font-semibold text-slate-800">{steps[activeStep].title}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {steps[activeStep].detailText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Asesoramiento Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
