import React, { useState } from 'react';
import { Eye, ArrowUpRight, MapPin, Maximize2, Calendar, Check, X } from 'lucide-react';

interface ProjectsPortfolioProps {
  onQuoteSimilar: (projectName: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onQuoteSimilar }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'comercial', label: 'Comercial & Retail' },
    { id: 'corporativo', label: 'Corporativo & Oficinas' },
    { id: 'industrial', label: 'Industrial & Logística' },
  ];

  const projects = [
    {
      id: 'nexus-park',
      title: 'Edificio Nexus Park',
      category: 'corporativo',
      categoryLabel: 'Corporativo & Oficinas',
      location: 'Belgrano, CABA',
      area: '4.850 m²',
      timeline: '18 Meses',
      image: '/images/hero_modern_architecture_1792078674541.jpg',
      headline: 'Edificio corporativo triple A con certificación de eficiencia energética',
      summary:
        'Construcción integral llave en mano de estructura de hormigón visto, piel de vidrio reflectivo de alta prestación con DVH y subsuelos técnicos para cocheras.',
      highlights: [
        'Hormigón arquitectónico visto clase H-30',
        'Fachada continua de aluminio anodizado y doble vidriado hermético',
        'Sistema inteligente de climatización VRV centralizada',
        'Grupo electrógeno automatizado de respaldo total',
      ],
    },
    {
      id: 'residencia-robles',
      title: 'Residencia Los Robles',
      category: 'residencial',
      categoryLabel: 'Residencial Premium',
      location: 'Nordelta, Buenos Aires',
      area: '720 m²',
      timeline: '12 Meses',
      image: '/images/facade_renovation_finished_1792078679765.jpg',
      headline: 'Vivienda unifamiliar de arquitectura contemporánea con piscina sin fin',
      summary:
        'Desarrollo residencial de lujo sobre lote al lago. Volumetría pura en hormigón, revestimientos de piedra natural, carpinterías de piso a techo y domótica integrada.',
      highlights: [
        'Grandes luces estructurales con vigas postensadas',
        'Pisos continuos de microcemento pulido y entablonado de lapacho',
        'Aislación térmica con lana de roca y muros dobles',
        'Piscina climatizada con desborde finlandés',
      ],
    },
    {
      id: 'polo-industrial-sur',
      title: 'Centro Logístico Polo Sur',
      category: 'industrial',
      categoryLabel: 'Industrial & Logística',
      location: 'Ezeiza, Buenos Aires',
      area: '14.500 m²',
      timeline: '10 Meses',
      image: '/images/construction_site_in_progress_1792078675584.jpg',
      headline: 'Nave logística de alta velocidad con 12 dársenas de carga y piso láser',
      summary:
        'Obra de envergadura ejecutada en tiempo récord. Estructura metálica de alma llena, cerramientos térmicos de panel sándwich y soleras de hormigón de alta planimetría.',
      highlights: [
        'Pisos industriales nivelados con regla láser Superflat FF50/FL40',
        'Dársenas con rampas niveladoras electrohidráulicas',
        'Red de extinción de incendios por rociadores bajo normas NFPA',
        'Oficinas administrativas y vestuarios para 150 operarios',
      ],
    },
    {
      id: 'torre-mirador',
      title: 'Torre Mirador del Río',
      category: 'residencial',
      categoryLabel: 'Residencial en Altura',
      location: 'Vicente López, Buenos Aires',
      area: '9.200 m²',
      timeline: '22 Meses',
      image: '/images/hero_modern_architecture_1792078674541.jpg',
      headline: 'Torre de 16 pisos con semipisos exclusivos y vistas panorámicas',
      summary:
        'Ejecución y dirección técnica de obra para fideicomiso al costo. Fundaciones profundas sobre pilotes, encofrados trepantes y amenities premium en azotea.',
      highlights: [
        'Fundaciones sobre 48 pilotes de 1.00m de diámetro a 24m de profundidad',
        'Encofrados modulados con hormigonado continuo por bomba pluma',
        'Rooftop con solárium, gimnasio y SUM vidriado',
        'Ascensores de alta velocidad con maniobra selectiva inteligente',
      ],
    },
    {
      id: 'alvear-corporate',
      title: 'Sede Corporativa Alvear',
      category: 'corporativo',
      categoryLabel: 'Corporativo & Oficinas',
      location: 'Recoleta, CABA',
      area: '2.600 m²',
      timeline: '9 Meses',
      image: '/images/architectural_blueprints_planning_1792078675841.jpg',
      headline: 'Remodelación y puesta en valor de edificio corporativo histórico',
      summary:
        'Refuncionalización completa preservando el valor patrimonial de fachada, con renovación total de núcleos sanitarios, redes de datos y eficiencia luminaria.',
      highlights: [
        'Restauración artesanal de mampostería histórica y ornatos',
        'Piso técnico elevado para cableado modular de datos',
        'Iluminación LED bioclimática con sensores DALI',
        'Habilitación sin interrupción de actividades comerciales',
      ],
    },
    {
      id: 'paseo-soho',
      title: 'Paseo Comercial Soho',
      category: 'comercial',
      categoryLabel: 'Comercial & Retail',
      location: 'Palermo, CABA',
      area: '1.800 m²',
      timeline: '8 Meses',
      image: '/images/facade_renovation_finished_1792078679765.jpg',
      headline: 'Galería comercial gastronómica y de diseño a cielo abierto',
      summary:
        'Construcción y arquitectura de interiores para locales gastronómicos y locales insignia, con pérgolas metálicas, solados antideslizantes y paisajismo integrado.',
      highlights: [
        'Estructura mixta de perfiles metálicos y hormigón visto',
        'Instalaciones de gas y extracción de humos bajo normativas vigentes',
        'Paisajismo sustentable con riego automático por goteo',
        'Plaza central con equipamiento urbano antivandálico',
      ],
    },
  ];

  const filteredProjects =
    activeCategory === 'todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="obras" className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#FF8A00]" />
              <span>Portafolio Seleccionado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight">
              Obras Realizadas & en Ejecución
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Una muestra de nuestro estándar constructivo en proyectos residenciales, industriales y corporativos de máxima exigencia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#1F2D3A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1F2D3A] hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1F2D3A]/90 backdrop-blur-md rounded text-[11px] font-medium text-white border border-white/10">
                    {proj.categoryLabel}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Location strip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>{proj.location}</span>
                    </span>
                    <span className="font-mono font-semibold">{proj.area}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2D3A] group-hover:text-[#FF8A00] transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {proj.headline}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>Plazo: <strong>{proj.timeline}</strong></span>
                    </span>
                    <span>·</span>
                    <span>Llave en mano</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 px-3 rounded bg-slate-100 hover:bg-[#FF8A00] hover:text-white text-[#1F2D3A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Ver Ficha Técnica</span>
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
          <div className="bg-white text-[#1F2D3A] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="relative h-72 sm:h-80 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>{selectedProject.location}</span>
                  </span>
                  <span>·</span>
                  <span>Superficie: <strong className="text-white">{selectedProject.area}</strong></span>
                  <span>·</span>
                  <span>Plazo de Obra: <strong className="text-white">{selectedProject.timeline}</strong></span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="text-base font-bold text-[#1F2D3A] mb-2">
                Memoria Descriptiva & Solución Constructiva
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              <div className="p-5 bg-[#F8F9FA] rounded-md border border-slate-200 mb-6">
                <h5 className="text-xs font-bold text-[#1F2D3A] uppercase tracking-wider mb-3">
                  Puntos Clave de Ingeniería & Calidad:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  ¿Tenés un proyecto con requerimientos similares?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded cursor-pointer"
                  >
                    Volver a Obras
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedProject.title;
                      setSelectedProject(null);
                      onQuoteSimilar(name);
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] rounded shadow transition-all cursor-pointer"
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
