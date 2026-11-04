import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Maximize2, Calendar, Check, X } from 'lucide-react';

interface ProjectsPortfolioProps {
  onQuoteSimilar: (projectName: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onQuoteSimilar }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'comercial', label: 'Comercial & Edificios' },
    { id: 'civil', label: 'Obra Civil & Hormigón' },
    { id: 'logistica', label: 'Logística & Campo' },
    { id: 'reformas', label: 'Remodelaciones' },
  ];

  // Authentic projects using the real photos from /public/imgreal/
  const projects = [
    {
      id: 'sede-portico',
      title: 'Edificio & Sede Comercial',
      category: 'comercial',
      categoryLabel: 'Comercial & Edificios',
      location: 'Buenos Aires',
      area: '1.200 m²',
      timeline: '10 Meses',
      image: '/imgreal/07_fachada_edificio.png',
      headline: 'Construcción y terminación integral de fachada y oficinas.',
      summary:
        'Ejecución completa de fachada comercial, carpinterías de aluminio, pisos y adecuación de espacios corporativos.',
      highlights: [
        'Estructura de hormigón y mampostería reforzada',
        'Fachada con aislamiento térmico y cartelería institucional',
        'Instalaciones eléctricas y sanitarias completas',
        'Entrega llave en mano en plazo acordado',
      ],
    },
    {
      id: 'obra-hormigon-estructura',
      title: 'Estructura & Hormigón Armado',
      category: 'civil',
      categoryLabel: 'Obra Civil & Hormigón',
      location: 'Gran Buenos Aires',
      area: '3.400 m²',
      timeline: '8 Meses',
      image: '/imgreal/WhatsApp Image 2026-10-28 at 16.18.24.jpeg',
      headline: 'Montaje de encofrados, hierros y colada de hormigón.',
      summary:
        'Trabajo estructural pesado con control estricto de probetas de hormigón y cumplimiento de normas de seguridad.',
      highlights: [
        'Hormigón elaborado ensayado en laboratorio',
        'Supervisión continua de dirección de obra',
        'Personal con equipo de seguridad completo (EPP)',
        'Cronograma de avance físico certificado',
      ],
    },
    {
      id: 'logistica-flota-obra',
      title: 'Logística y Operación en Obra',
      category: 'logistica',
      categoryLabel: 'Logística & Campo',
      location: 'Provincia de Buenos Aires',
      area: 'Operación Integral',
      timeline: 'Permanente',
      image: '/imgreal/08_camioneta_completa.png',
      headline: 'Flota propia y equipamiento en cada frente de trabajo.',
      summary:
        'Movilización rápida de personal técnico, herramientas y fiscalización constante en sitio.',
      highlights: [
        'Vehículos propios equipados para traslados y supervisión',
        'Abastecimiento ágil de materiales en obra',
        'Respuesta inmediata ante requerimientos técnicos',
        'Presencia constante de ingenieros y capataces',
      ],
    },
    {
      id: 'supervision-seguridad',
      title: 'Dirección Técnica y Seguridad',
      category: 'civil',
      categoryLabel: 'Obra Civil & Hormigón',
      location: 'Zona Norte',
      area: '1.850 m²',
      timeline: '6 Meses',
      image: '/imgreal/09_casco_y_banner(2).png',
      headline: 'Fiscalización en terreno y protocolos de seguridad ART.',
      summary:
        'Supervisión de cada etapa constructiva con delimitación de áreas, normas de seguridad y control de calidad.',
      highlights: [
        'Protocolos de seguridad e higiene laboral al 100%',
        'Coordinación de contratistas y especialistas',
        'Libro de órdenes y actas de obra semanales',
        'Cero accidentes en obra garantizado',
      ],
    },
    {
      id: 'remodelacion-interiores',
      title: 'Puesta en Valor e Interiores',
      category: 'reformas',
      categoryLabel: 'Remodelaciones',
      location: 'CABA',
      area: '650 m²',
      timeline: '3 Meses',
      image: '/imgreal/WhatsApp Image 2026-10-28 at 16.18.23 (1).jpeg',
      headline: 'Renovación de instalaciones y terminaciones de calidad.',
      summary:
        'Refacción integral de espacios, optimización de circulaciones e instalaciones nuevas.',
      highlights: [
        'Cambio integral de cañerías y tendidos eléctricos',
        'Colocación de revestimientos y pintura de alta durabilidad',
        'Plazo de ejecución express sin cortes operativos',
        'Garantía escrita de post-obra por 12 meses',
      ],
    },
    {
      id: 'obra-vivienda-pesada',
      title: 'Obra Civil y Cimientos',
      category: 'civil',
      categoryLabel: 'Obra Civil & Hormigón',
      location: 'Buenos Aires',
      area: '2.100 m²',
      timeline: '7 Meses',
      image: '/imgreal/WhatsApp Image 2026-10-28 at 16.18.24 (1).jpeg',
      headline: 'Bases, vigas y losas con estándares de ingeniería.',
      summary:
        'Ejecución de fundaciones profundas, encadenados y losas macizas con seguimiento topográfico.',
      highlights: [
        'Cálculo y replanteo de precisión milimétrica',
        'Hierros normalizados Acindar con ensayos IRAM',
        'Inspección semanal de avance y liquidación transparente',
        'Entrega de planos conforme a obra final',
      ],
    },
  ];

  const filteredProjects =
    activeCategory === 'todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="obras" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Short and direct */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#FF8A00]" />
              <span>Obras Reales</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight">
              Trabajos Realizados y en Marcha
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Fotografías directas de nuestras obras civiles, comerciales y equipos de trabajo en terreno.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#1F2D3A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1F2D3A] hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <picture>
                    <source srcSet={proj.image.replace(/\.(png|jpeg|jpg)$/, '.webp')} type="image/webp" />
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={224}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#1F2D3A]/90 backdrop-blur-md rounded text-[10px] font-medium text-white border border-white/10">
                    {proj.categoryLabel}
                  </div>

                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Location strip */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="font-mono text-xs font-semibold">{proj.area}</span>
                  </div>
                </div>

                {/* Content - Short & punchy */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1F2D3A] group-hover:text-[#FF8A00] transition-colors mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {proj.headline}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-500 pt-2.5 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>Plazo: <strong>{proj.timeline}</strong></span>
                    </span>
                    <span>·</span>
                    <span>Llave en mano</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded bg-slate-100 hover:bg-[#FF8A00] hover:text-white text-[#1F2D3A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Ver Detalles</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#1F2D3A] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="relative h-64 sm:h-72 bg-slate-900">
              <picture>
                <source srcSet={selectedProject.image.replace(/\.(png|jpeg|jpg)$/, '.webp')} type="image/webp" />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>{selectedProject.location}</span>
                  </span>
                  <span>·</span>
                  <span>Superficie: <strong className="text-white">{selectedProject.area}</strong></span>
                  <span>·</span>
                  <span>Plazo: <strong className="text-white">{selectedProject.timeline}</strong></span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <h4 className="text-sm font-bold text-[#1F2D3A] mb-1.5">
                Resumen Constructivo
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {selectedProject.summary}
              </p>

              <div className="p-4 bg-[#F8F9FA] rounded border border-slate-200 mb-5">
                <h5 className="text-xs font-bold text-[#1F2D3A] uppercase tracking-wider mb-2">
                  Puntos Destacados:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  ¿Tenés un proyecto similar?
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded cursor-pointer"
                  >
                    Volver
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedProject.title;
                      setSelectedProject(null);
                      onQuoteSimilar(name);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] rounded shadow transition-all cursor-pointer"
                  >
                    Cotizar Proyecto Similar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
