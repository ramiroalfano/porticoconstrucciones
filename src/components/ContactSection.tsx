import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  prefilledData?: {
    workType?: string;
    area?: number;
    quality?: string;
    services?: string[];
    estimateText?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledData }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipoProyecto: prefilledData?.workType || 'Construcción Obra Nueva',
    superficie: prefilledData?.area ? `${prefilledData.area} m²` : '',
    mensaje: prefilledData?.estimateText
      ? `Hola, realicé una estimación en su cotizador web para ${prefilledData.workType} de ${prefilledData.area} m² (${prefilledData.estimateText}). Deseo solicitar reunión técnica.`
      : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre.trim()) {
      setErrorMessage('Por favor ingresá tu nombre completo.');
      return;
    }
    if (!formData.telefono.trim()) {
      setErrorMessage('Por favor ingresá un número de teléfono o WhatsApp de contacto.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor ingresá un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Coordinates from Brand Card Image 5 & 10 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-3">
                <span className="w-6 h-[2px] bg-[#FF8A00]" />
                <span>Contacto Directo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2D3A] tracking-tight mb-4">
                ¿Tenés un proyecto en mente? <br />
                <span className="text-[#FF8A00]">Hablemos.</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Estamos listos para evaluar tus planos, visitar el terreno o diseñar una propuesta técnico-económica a la medida de tus expectativas.
              </p>

              {/* Coordinates List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Atención Comercial & Obras
                    </h4>
                    <a
                      href="tel:+5491112345678"
                      className="text-base font-bold text-[#1F2D3A] hover:text-[#FF8A00] transition-colors"
                    >
                      +54 9 11 1234 5678
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Línea directa y WhatsApp corporativo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Correo Electrónico
                    </h4>
                    <a
                      href="mailto:info@portico.com.ar"
                      className="text-base font-bold text-[#1F2D3A] hover:text-[#FF8A00] transition-colors"
                    >
                      info@portico.com.ar
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Recepción de pliegos y proyectos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Oficinas Centrales
                    </h4>
                    <p className="text-base font-bold text-[#1F2D3A]">
                      Av. Siempre Viva 1234
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#1F2D3A] text-[#FF8A00] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Horario de Atención
                    </h4>
                    <p className="text-sm font-semibold text-[#1F2D3A]">
                      Lunes a Viernes de 08:00 a 18:00 hs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-4 rounded bg-[#F4F6F8] border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1F2D3A] uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                <span>Compromiso de Respuesta Rápida</span>
              </div>
              <p className="text-xs text-slate-600">
                Nos comunicamos dentro de las 2 horas hábiles para coordinar el análisis técnico de tu proyecto sin compromiso.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2D3A] mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Muchas gracias por contactarte con <strong>Pórtico Construcciones</strong>. Un ingeniero o asesor comercial del equipo se comunicará al teléfono indicado.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      nombre: '',
                      telefono: '',
                      email: '',
                      tipoProyecto: 'Construcción Obra Nueva',
                      superficie: '',
                      mensaje: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F2D3A] hover:bg-[#FF8A00] rounded transition-colors cursor-pointer"
                >
                  Enviar Otra Consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#1F2D3A] mb-1">
                  Solicitud de Presupuesto y Asesoramiento
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Completá los campos y te enviaremos una propuesta formal adaptada a tus requerimientos.
                </p>

                {errorMessage && (
                  <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Lic. Marcelo Rossi"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 9 11 ..."
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tipo de Proyecto
                    </label>
                    <select
                      value={formData.tipoProyecto}
                      onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                    >
                      <option value="Construcción Obra Nueva">Construcción Obra Nueva</option>
                      <option value="Dirección de Obra">Dirección de Obra</option>
                      <option value="Proyecto Arquitectónico / Planos">Proyecto Arquitectónico / Planos</option>
                      <option value="Refacción / Remodelación">Refacción / Remodelación</option>
                      <option value="Desarrollo Inmobiliario">Desarrollo Inmobiliario / Inversión</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Superficie Estimada o Ubicación del Terreno (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: 300 m² en San Isidro o lote en Nordelta"
                    value={formData.superficie}
                    onChange={(e) => setFormData({ ...formData, superficie: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Detalles del Proyecto o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Contanos brevemente sobre los plazos que manejás, si ya contás con planos o si requerís desarrollo desde cero..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] transition-all rounded shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Cotización'}</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Garantizamos confidencialidad absoluta en la información y planos compartidos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
