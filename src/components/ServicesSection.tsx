import React, { useState } from 'react';
import {
  HardHat,
  FileSpreadsheet,
  Compass,
  Wrench,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Layers,
  ChevronRight,
  X
} from 'lucide-react';

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
      shortTitle: 'Construcción',
      icon: HardHat,
      headline: 'Obras Civiles, Comerciales y Residenciales Llave en Mano',
      description:
        'Ejecución completa de edificaciones de media y gran escala con provisión de materiales, mano de obra calificada y supervisión permanente de ingeniería.',
      image: '/images/construction_site_in_progress_1792078675584.jpg',
      keyPoints: [
        'Hormigón armado, estructuras metálicas y mampostería tradicional',
        'Contratos a precio y plazo cerrado sin desvíos imprevistos',
        'Abastecimiento directo con corralones y fabricantes de primer nivel',
        'Cumplimiento estricto de normativas de higiene y seguridad ART',
      ],
      typicalDuration: '4 a 18 meses según escala',
      targetAudience: 'Inversores, desarrolladores, empresas y particulares',
    },
    {
      id: 'direccion',
      number: '02',
      title: 'Dirección de Obra',
      shortTitle: 'Dirección de Obra',
      icon: FileSpreadsheet,
      headline: 'Supervisión Técnica, Control de Presupuesto y Calidad',
      description:
        'Acompañamos al comitente asumiendo el control exhaustivo de cada rubro, coordinando gremios y verificando que el proyecto se ejecute con precisión milimétrica.',
      image: '/images/architectural_blueprints_planning_1792078675841.jpg',
      keyPoints: [
        'Certificación periódica de avances y liquidación de subcontratos',
        'Ensayos destructivos y no destructivos de materiales en laboratorio',
        'Libro de comunicaciones y seguimiento de cronograma Gantt',
        'Resolución de interferencias técnicas directamente en obra',
      ],
      typicalDuration: 'Acompañamiento durante toda la ejecución',
      targetAudience: 'Propietarios con proyecto propio o constructoras asociadas',
    },
    {
      id: 'proyectos',
      number: '03',
      title: 'Proyectos & Arquitectura',
      shortTitle: 'Proyectos',
      icon: Compass,
      headline: 'Diseño Arquitectónico, Modelado 3D BIM e Ingeniería',
      description:
        'Transformamos requerimientos en planos constructivos ejecutables. Diseñamos con criterio de constructibilidad para optimizar metros cuadrados y presupuestos.',
      image: '/images/architectural_blueprints_planning_1792078675841.jpg',
      keyPoints: [
        'Modelado 3D fotorrealista y recorridos virtuales de alta definición',
        'Cálculo de estructuras sismorresistentes e instalaciones complementarias',
        'Confección de pliegos licitatorios y cómputo métrico desagregado',
        'Gestión de aprobaciones municipales y permisos de inicio de obra',
      ],
      typicalDuration: '30 a 90 días',
      targetAudience: 'Empresas y clientes que inician un desarrollo desde cero',
    },
    {
      id: 'refacciones',
      number: '04',
      title: 'Refacciones & Remodelación',
      shortTitle: 'Refacciones',
      icon: Wrench,
      headline: 'Puesta en Valor Corporativa, Comercial y Residencial',
      description:
        'Modernizamos plantas fabriles, oficinas comerciales, locales a la calle y residencias premium minimizando la interrupción de las actividades operativas.',
      image: '/images/facade_renovation_finished_1792078679765.jpg',
      keyPoints: [
        'Renovación integral de fachadas, cubiertas y envolventes térmicas',
        'Adecuación de instalaciones eléctricas, sanitarias y climatización',
        'Trabajos en horarios nocturnos o fines de semana para evitar cortes',
        'Terminaciones de alta gama y diseño arquitectónico contemporáneo',
      ],
      typicalDuration: '15 a 90 días según complejidad',
      targetAudience: 'Retailers, corporaciones, cadenas comerciales y residencias',
    },
    {
      id: 'desarrollo',
      number: '05',
      title: 'Desarrollo Inmobiliario',
      shortTitle: 'Desarrollo',
      icon: TrendingUp,
      headline: 'Estructuración Integral de Inversiones y Negocios en Pozo',
      description:
        'Identificamos terrenos estratégicos, modelamos flujos financieros y gestionamos el proyecto de punta a punta para maximizar la rentabilidad del capital inversor.',
      image: '/images/hero_modern_architecture_1792078674541.jpg',
      keyPoints: [
        'Estudio de factibilidad urbana y código urbanístico aplicable',
        'Diseño de fideicomisos y vehículos jurídicos transparentes',
        'Estrategia de preventa y comercialización en pozo',
        'Monitoreo continuo de TIR (Tasa Interna de Retorno) y márgenes',
      ],
      typicalDuration: '18 a 36 meses',
      targetAudience: 'Inversores privados, fondos y propietarios de tierra',
    },
  ];

  const current = services[selectedServiceIdx];

  return (
    <section id="servicios" className="py-24 bg-[#1F2D3A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#FF8A00]" />
              <span>Unidades de Negocio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Nuestros Servicios Especializados
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
            Soluciones integrales de construcción e ingeniería con un solo responsable a cargo, asegurando cumplimiento de cronogramas y control presupuestario riguroso.
          </p>
        </div>

        {/* 5-Tab Selector (Directly matching Image 9: Construcción, Dirección de Obra, Proyectos, Refacciones, Desarrollo) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-[#16212B] rounded-lg border border-white/10 mb-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const isActive = selectedServiceIdx === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceIdx(idx)}
                className={`flex flex-col items-center sm:items-start text-left p-3.5 rounded-md transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF8A00] text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#FF8A00]'}`} />
                  <span className={`text-[10px] font-mono ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                    {srv.number}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {srv.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Service Detail Panel */}
        <div className="bg-[#192430] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192430] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#192430]" />

              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-[11px] font-mono text-[#FF8A00] border border-white/10">
                PÓRTICO // UNIDAD {current.number}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF8A00] uppercase tracking-wider mb-2">
                  <span>Especialidad Técnica</span>
                  <span>·</span>
                  <span>{current.number} / 05</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {current.title}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300 mb-4">
                  {current.headline}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Key Points */}
                <div className="space-y-3 mb-8">
                  {current.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Metadata strip without pills */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-4 border-t border-white/10 mb-8">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>Plazo típico: <strong className="text-slate-200">{current.typicalDuration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>Para: <strong className="text-slate-200">{current.targetAudience}</strong></span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onSelectServiceForQuote(current.title)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Presupuesto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setModalService(current)}
                  className="px-5 py-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver Ficha Técnica Completa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Sheet Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1F2D3A] text-white border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-[#FF8A00]">
                  ESPECIFICACIÓN TÉCNICA · SERVICIO {modalService.number}
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">{modalService.title}</h3>
              </div>
              <button
                onClick={() => setModalService(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 my-6">
              <p>{modalService.description}</p>
              <div className="p-4 bg-[#16212B] rounded border border-white/5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Entregables y Garantías Contractuales
                </h4>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                  <li>Plano de replanteo y memoria descriptiva firmada por profesionales matriculados.</li>
                  <li>Cronograma de curva de inversión semanal y certificados de avance de obra.</li>
                  <li>Ensayos de compresión de probetas de hormigón elaboradas en laboratorio certificado.</li>
                  <li>Seguro de caución y póliza de responsabilidad civil vigente durante toda la obra.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
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
                Solicitar Cotización de {modalService.shortTitle}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
