import React, { useState } from 'react';
import {
  HardHat,
  FileSpreadsheet,
  Compass,
  Wrench,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  X,
  FileCheck2
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal.tsx';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);
  const [modalService, setModalService] = useState<any | null>(null);

  const services = [
    {
      id: 'construccion',
      number: '01',
      title: 'Construcción Integral',
      shortTitle: 'Construcción Integral',
      icon: HardHat,
      headline: 'Obras Civiles, Comerciales y Residenciales',
      description:
        'Ejecución técnica con provisión de materiales certificados, cuadrillas especializadas y dirección en obra.',
      keyPoints: [
        'Estructuras de hormigón armado y mampostería tradicional',
        'Contratos a precio cerrado sin sobrecostos imprevistos',
        'Personal con seguro ART y estricto cumplimiento de seguridad',
      ],
      typicalDuration: '4 a 18 meses según escala',
      targetAudience: 'Particulares, inversores y empresas',
      contractType: 'Ajuste alzado / Contrato por rubros',
    },
    {
      id: 'direccion',
      number: '02',
      title: 'Dirección de Obra',
      shortTitle: 'Dirección de Obra',
      icon: FileSpreadsheet,
      headline: 'Control Técnico, Plazos y Calidad',
      description:
        'Supervisión técnica permanente, coordinación integral de gremios y verificación de materiales en cada etapa constructiva.',
      keyPoints: [
        'Certificación periódica de avances y control presupuestario',
        'Control riguroso de calidad de hormigón y materiales en obra',
        'Informes periódicos con estado de avance e incidencias',
      ],
      typicalDuration: 'Durante toda la ejecución de la obra',
      targetAudience: 'Propietarios con proyecto o desarrolladores',
      contractType: 'Honorarios profesionales mensuales',
    },
    {
      id: 'proyectos',
      number: '03',
      title: 'Proyectos & Arquitectura',
      shortTitle: 'Proyectos & Arquitectura',
      icon: Compass,
      headline: 'Diseño Arquitectónico y Planos Ejecutivos',
      description:
        'Desarrollo de proyectos ejecutables, optimizando metros cuadrados y presupuesto para construir con máxima eficiencia.',
      keyPoints: [
        'Planos municipales y ejecutivos listos para construir',
        'Cálculo de estructuras portantes e instalaciones completas',
        'Gestión de aprobaciones, permisos y trámites municipales',
      ],
      typicalDuration: '30 a 60 días',
      targetAudience: 'Clientes que inician obra desde cero',
      contractType: 'Por proyecto completo o por etapas',
    },
    {
      id: 'refacciones',
      number: '04',
      title: 'Refacciones & Remodelación',
      shortTitle: 'Refacciones & Remodelación',
      icon: Wrench,
      headline: 'Puesta en Valor Comercial y Residencial',
      description:
        'Renovación rápida de locales comerciales, oficinas corporativas, fachadas y viviendas con mínima interrupción operativa.',
      keyPoints: [
        'Renovación integral de fachadas, cubiertas e interiores',
        'Actualización de instalaciones sanitarias, gas y eléctricas',
        'Terminaciones de alta durabilidad y entrega limpia',
      ],
      typicalDuration: '15 a 60 días',
      targetAudience: 'Comercios, empresas y propietarios particulares',
      contractType: 'Presupuesto cerrado por rubro',
    },
  ];

  const current = services[selectedServiceIdx];

  return (
    <section id="servicios" className="py-20 bg-[#1F2D3A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-2">
                <span className="w-6 h-[2px] bg-[#FF8A00]" />
                <span>Nuestras Especialidades</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Servicios de Construcción
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
              4 unidades de trabajo enfocadas en solidez técnica, plazos garantizados y control presupuestario riguroso.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Overview / Selector (Positioned on top) */}
        <ScrollReveal direction="up" duration={750} delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              const isCurrent = selectedServiceIdx === idx;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedServiceIdx(idx)}
                  className={`p-5 rounded-lg border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#192430] border-[#FF8A00] ring-1 ring-[#FF8A00] shadow-lg'
                      : 'bg-[#16212B]/70 border-white/10 hover:border-white/30 hover:bg-[#16212B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#FF8A00] font-bold">0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-slate-300'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{srv.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {srv.description}
                  </p>
                  <span className="text-[11px] font-semibold text-[#FF8A00] flex items-center gap-1">
                    <span>Ver detalles</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main Service Detailed Spec Panel (100% Text & Iconography - No Images) */}
        <ScrollReveal direction="up" duration={800} delay={250}>
          <div className="bg-[#192430] border border-white/10 rounded-lg p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#FF8A00] uppercase tracking-wider mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#FF8A00]/20 border border-[#FF8A00]/30 font-mono">
                    UNIDAD {current.number} / 04
                  </span>
                  <span>{current.headline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {current.description}
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => onSelectServiceForQuote(current.title)}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pedir Cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setModalService(current)}
                  className="px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>Ver Ficha Técnica</span>
                </button>
              </div>
            </div>

            {/* Key Deliverables & Specifications */}
            <div className="pt-8">
              {/* Scope Bullet Points */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                  Alcance y Garantías de Ejecución
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {current.keyPoints.map((point, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded bg-[#16212B] border border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Technical Sheet Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1F2D3A] text-white border border-white/10 rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-[#FF8A00]">
                  FICHA TÉCNICA · SERVICIO {modalService.number} / 04
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">{modalService.title}</h3>
              </div>
              <button
                onClick={() => setModalService(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 my-4">
              <p>{modalService.description}</p>
              <div className="p-4 bg-[#16212B] rounded border border-white/5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Garantías y Entregables
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>Cronograma detallado con fechas de inicio y entrega contractual.</li>
                  <li>Certificados periódicos de avance y control de calidad.</li>
                  <li>Ensayos de resistencia y calidad de materiales utilizados.</li>
                  <li>Seguro y cobertura ART vigente para todo el personal.</li>
                </ul>
              </div>
              <div className="p-3 bg-[#16212B] rounded border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                <span>Modalidad de contratación:</span>
                <span className="text-white font-semibold">{modalService.contractType}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setModalService(null)}
                className="px-4 py-2 text-xs text-slate-300 hover:text-white cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const srv = modalService.title;
                  setModalService(null);
                  onSelectServiceForQuote(srv);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] rounded cursor-pointer"
              >
                Cotizar {modalService.shortTitle}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
