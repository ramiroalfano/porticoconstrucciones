import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Search,
  Clock,
  Truck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  PhoneCall,
  Sparkles,
  FileCheck,
  Building2,
  X,
} from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'plazos' | 'materiales' | 'pagos' | 'garantias';
  question: string;
  answer: string;
  highlight?: string;
}

interface FAQSectionProps {
  onOpenContact: () => void;
}

const FAQ_ITEMS: FAQItem[] = [
  // 1. Plazos de obra & Cronogramas
  {
    id: 'faq-plazos-garantia',
    category: 'plazos',
    question: '¿Cómo estiman y garantizan los plazos de entrega de una obra?',
    answer:
      'Antes de firmar el contrato, elaboramos un cronograma integral detallado mediante diagrama de Gantt y curva de avance físico-financiero. Definimos hitos claros para cada fase (demolición, fundaciones, estructura de hormigón, instalaciones y terminaciones). El plazo se fija contractualmente con cláusulas de penalización por demoras atribuibles a la empresa, garantizando certidumbre y compromiso legal.',
    highlight: 'Compromiso contractual por escrito con curva de avance auditable.',
  },
  {
    id: 'faq-plazos-clima-tramites',
    category: 'plazos',
    question: '¿Qué sucede ante imprevistos climáticos o demoras de permisos municipales?',
    answer:
      'En el pliego contractual estipulamos un coeficiente de días no laborables por inclemencias climáticas basado en registros meteorológicos históricos de la zona. Para los permisos municipales y factibilidades de servicios públicos (electricidad, agua, cloacas, gas), gestionamos los expedientes con antelación crítica en paralelo con el desarrollo del proyecto ejecutivo, emitiendo reportes semanales al comitente sobre cada avance administrativo.',
    highlight: 'Gestión administrativa en paralelo y registro transparente de días de lluvia.',
  },
  {
    id: 'faq-plazos-duracion-promedio',
    category: 'plazos',
    question: '¿Cuánto tiempo demanda habitualmente una construcción residencial o comercial?',
    answer:
      'Una vivienda unifamiliar de 200 a 350 m² llave en mano se ejecuta normalmente en un período de 8 a 12 meses, dependiendo de la complejidad topográfica y las terminaciones elegidas. Para obras comerciales, locales o reformas de oficinas de 80 a 250 m², los plazos se reducen a 45 a 90 días corridos gracias a cuadrillas especializadas con esquemas de turnos rotativos y extendidos.',
    highlight: '8 a 12 meses para viviendas estándar / 45 a 90 días para locales comerciales.',
  },

  // 2. Materiales & Sourcing
  {
    id: 'faq-materiales-origen-calidad',
    category: 'materiales',
    question: '¿De dónde provienen los materiales y cómo garantizan su calidad?',
    answer:
      'Adquirimos materiales exclusivamente de fábricas directas y distribuidores mayoristas de primera línea homologados (Loma Negra, Acindar, Klaukol, Ferrum, FV, Aluar, entre otros). Todos los insumos estructurales cuentan con certificación IRAM/ISO y remito de trazabilidad de lote. Además, en cada colada de hormigón elaborado extraemos probetas in situ que son testeadas por laboratorios independientes a los 7 y 28 días.',
    highlight: 'Proveedores certificados IRAM/ISO y ensayos de laboratorio independientes.',
  },
  {
    id: 'faq-materiales-eleccion-cliente',
    category: 'materiales',
    question: '¿El cliente puede seleccionar o suministrar terminaciones específicas?',
    answer:
      'Sí, con total flexibilidad. Ofrecemos dos esquemas: 1) Partida presupuestaria asignada dentro del contrato para que elijas porcelanatos, griferías, artefactos y luminarias con el asesoramiento de nuestro equipo de diseño; o 2) Suministro directo por parte del cliente, donde nosotros nos ocupamos de la logística de recepción en obra, acopio seguro, verificación de calidad y colocación profesional certificada.',
    highlight: 'Libertad absoluta de elección: catálogo propio o provisión directa por el cliente.',
  },
  {
    id: 'faq-materiales-acopio-inflacion',
    category: 'materiales',
    question: '¿Cómo protegen la obra ante el aumento de precios o escasez de materiales?',
    answer:
      'Implementamos una estrategia de acopio temprano de materiales críticos e insumos gruesos (hierro, cemento, áridos, cañerías termofusión y carpinterías de aluminio DVH) al momento del anticipo financiero. Esto congela los valores en depósitos y corralones aliados, blindando la obra ante variaciones de mercado y evitando paradas por quiebres de stock en la cadena logística.',
    highlight: 'Acopio preventivo que congela precios y asegura disponibilidad de stock.',
  },

  // 3. Pagos & Transparencia Financiera
  {
    id: 'faq-pagos-modalidades',
    category: 'pagos',
    question: '¿Cuáles son las formas y condiciones de pago disponibles?',
    answer:
      'Ofrecemos dos modelos de contratación claros: 1) "Llave en Mano a Precio Cerrado" (un único valor integral acordado con cronograma de pagos previsible) y 2) "Por Administración / Costo y Costas" (pago según costo real de materiales y mano de obra con honorario fijo por dirección). Operamos mediante transferencias bancarias, cheques y acuerdos en moneda local o divisas con tipo de cambio de referencia explícito.',
    highlight: 'Contratos llave en mano a precio cerrado o por administración transparente.',
  },
  {
    id: 'faq-pagos-estructura-cuotas',
    category: 'pagos',
    question: '¿Cómo se estructuran los pagos durante el transcurso de la obra?',
    answer:
      'El esquema tradicional se compone de un anticipo inicial (20% a 30%) destinado al replanteo, obrador y acopio de materiales básicos, seguido de desembolsos mensuales asociados a "Certificados de Avance de Obra Real". Cada certificación es auditada y firmada conjuntamente por nuestro Director de Obra y el comitente. Finalmente, un saldo de retención (5% a 10%) se cancela solo con la recepción definitiva y conformidad total.',
    highlight: 'Solo pagás por metros cuadrados efectivamente construidos y certificados.',
  },
  {
    id: 'faq-pagos-costos-ocultos',
    category: 'pagos',
    question: '¿El presupuesto inicial es definitivo o pueden existir costos ocultos?',
    answer:
      'Nuestra política es de transparencia absoluta y cero sorpresas. Cada propuesta incluye un cómputo métrico minucioso ítem por ítem: materiales, mano de obra, cargas sociales, seguros de ART y dirección técnica matriculada. Si durante la obra deseás incorporar cambios o ampliaciones sobre el proyecto original, se confecciona un "Adicional de Obra" con costo y plazo especificado que solo se ejecuta con tu aprobación previa por escrito.',
    highlight: 'Cero costos ocultos: presupuestos analíticos desglosados ítem por ítem.',
  },

  // 4. Garantías & Supervisión
  {
    id: 'faq-garantias-supervision',
    category: 'garantias',
    question: '¿Quién supervisa la obra día a día y cómo me entero de los avances?',
    answer:
      'Cada proyecto cuenta con un Ingeniero Civil o Arquitecto matriculado asignado como Director de Obra permanente y un capataz de campo continuo. Emitimos reportes semanales con fotografías en alta definición, videos de avance, checklist de tareas concluidas y registro de libro de órdenes. Además, contás con un canal de comunicación directo y visitas programadas de obra.',
    highlight: 'Dirección técnica matriculada diaria y reportes fotográficos semanales.',
  },
  {
    id: 'faq-garantias-post-entrega',
    category: 'garantias',
    question: '¿Qué garantías legales y técnicas respaldan la obra finalizada?',
    answer:
      'Entregamos garantía contractual formal por escrito: 12 meses de cobertura integral para vicios de terminación e instalaciones (sanitarias, pluviales, gas y eléctricas), y garantía decenal (10 años) sobre la solidez y estabilidad estructural conforme al Código Civil y Comercial. Con la entrega de llaves proporcionamos el plano conforme a obra digitalizado y el manual de mantenimiento preventivo.',
    highlight: 'Garantía decenal de 10 años en estructura + 12 meses en instalaciones y acabados.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Todas las Preguntas', icon: HelpCircle },
  { id: 'plazos', label: 'Plazos & Cronogramas', icon: Clock },
  { id: 'materiales', label: 'Materiales & Calidad', icon: Truck },
  { id: 'pagos', label: 'Pagos & Presupuestos', icon: CreditCard },
  { id: 'garantias', label: 'Garantías & Supervisión', icon: ShieldCheck },
] as const;

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(['faq-plazos-garantia', 'faq-materiales-origen-calidad', 'faq-pagos-modalidades'])
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(FAQ_ITEMS.map((item) => item.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.highlight && item.highlight.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-24 bg-[#F8F9FA] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#FF8A00]" />
            <span>Transparencia & Confianza</span>
            <span className="w-5 h-[2px] bg-[#FF8A00]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight">
            Preguntas Frecuentes
          </h2>

          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Respuestas claras y directas sobre plazos de ejecución, procedencia de materiales,
            esquemas de pago y garantías legales. Sin letra chica ni costos ocultos.
          </p>
        </div>

        {/* 4 Trust Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-[#FF8A00]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F2D3A]">Cronograma Contractual</h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Plazos de entrega fijados por contrato con cláusulas de penalización por demoras.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#1F2D3A]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F2D3A]">Materiales Certificados</h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Proveedores IRAM/ISO y ensayos de hormigón en laboratorios independientes.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F2D3A]">Cero Costos Ocultos</h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Cómputo métrico analítico ítem por ítem con pagos por certificación real.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F2D3A]">Garantía Decenal Escrita</h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                10 años de respaldo estructural y 12 meses en instalaciones y terminaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por palabra clave (ej. acopio, plazos, anticipo, hormigón)..."
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-[#1F2D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-end lg:self-auto text-xs text-slate-500">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 font-medium hover:text-[#1F2D3A] hover:bg-slate-100 rounded transition-colors cursor-pointer"
              >
                Desplegar todas
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 font-medium hover:text-[#1F2D3A] hover:bg-slate-100 rounded transition-colors cursor-pointer"
              >
                Colapsar todas
              </button>
            </div>
          </div>

          {/* Interactive Category Segmented Controls */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? FAQ_ITEMS.length
                  : FAQ_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1F2D3A] text-white shadow-xs'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[11px] ${
                      isActive ? 'text-orange-300' : 'text-slate-400'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#1F2D3A]">
                No encontramos preguntas para "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Probá con otros términos como "plazo", "pago", "materiales", "garantía", o hacé tu consulta técnica directamente a nuestro equipo.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-[#FF8A00] hover:text-[#e07900] bg-orange-50 rounded-md transition-colors cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIds.has(item.id);
              const categoryObj = CATEGORIES.find((c) => c.id === item.category);
              const CategoryIcon = categoryObj?.icon || HelpCircle;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#FF8A00]/60 shadow-sm ring-1 ring-[#FF8A00]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-slate-50"
                  >
                    <div className="flex-1 pr-2">
                      {/* Quiet Category Metadata */}
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-1.5">
                        <CategoryIcon className="w-3.5 h-3.5 text-[#FF8A00]" />
                        <span>{categoryObj?.label}</span>
                      </div>

                      {/* Question Text */}
                      <h3
                        className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#1F2D3A]' : 'text-slate-800'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#FF8A00] text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-150">
                      <p className="mb-4">{item.answer}</p>

                      {item.highlight && (
                        <div className="flex items-start gap-2.5 p-3 rounded-lg bg-orange-50/70 border border-orange-100 text-xs text-[#1F2D3A]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                          <div className="font-medium">
                            <span className="font-bold text-[#FF8A00]">Compromiso clave:</span>{' '}
                            {item.highlight}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Card: Direct Technical Contact */}
        <div className="mt-12 bg-gradient-to-r from-[#1F2D3A] to-[#141E27] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF8A00]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF8A00] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>¿Tenés dudas particulares sobre tu terreno o proyecto?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Analizamos la viabilidad de tu obra sin costo
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Nuestros ingenieros y arquitectos responderán cada consulta sobre planos,
                tiempos de entrega estimados y opciones de financiamiento adaptadas a tu presupuesto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consultar a un Ingeniero</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/5491112345678?text=Hola,%20tengo%20consultas%20sobre%20plazos%20y%20presupuesto%20para%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all border border-white/15 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#FF8A00]" />
                <span>WhatsApp Técnico</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
