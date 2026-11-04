import React from 'react';
import { Building2, Store, Factory, Home } from 'lucide-react';

export const ClientsTrustSection: React.FC = () => {
  const clientSegments = [
    {
      icon: Store,
      title: 'Comercial & Retail',
      clients: 'Franquicias gastronómicas, locales a la calle y frentes de locales',
      scope: 'Obras rápidas llave en mano y habilitaciones comerciales',
    },
    {
      icon: Factory,
      title: 'Industria & Logística',
      clients: 'Empresas de distribución, depósitos y talleres industriales',
      scope: 'Pisos de hormigón de alto tránsito, estructuras metálicas y tinglados',
    },
    {
      icon: Building2,
      title: 'Desarrollos Inmobiliarios',
      clients: 'Fideicomisos al costo, inversores y edificios de mediana densidad',
      scope: 'Estructuras de hormigón armado y albañilería integral',
    },
    {
      icon: Home,
      title: 'Residencial & Familias',
      clients: 'Propietarios en barrios cerrados, countries y zonas urbanas',
      scope: 'Construcción desde cero, ampliaciones y refacciones de alta gama',
    },
  ];

  return (
    <section id="clientes" className="py-14 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-1.5">
              <span className="w-5 h-[2px] bg-[#FF8A00]" />
              <span>Experiencia & Confianza</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2D3A] tracking-tight">
              Quiénes confiaron en nosotros
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Empresas, inversores y familias que eligieron a Pórtico por su seriedad técnica, cumplimiento de contratos y calidad constructiva.
          </p>
        </div>

        {/* 4 Client Typology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {clientSegments.map((segment, idx) => {
            const Icon = segment.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-lg p-5 shadow-xs hover:border-[#FF8A00]/50 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded bg-[#FF8A00]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#FF8A00]" />
                </div>
                <h3 className="text-sm font-bold text-[#1F2D3A] uppercase tracking-wide mb-1">
                  {segment.title}
                </h3>
                <p className="text-xs font-medium text-slate-700 mb-1.5">
                  {segment.clients}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {segment.scope}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
