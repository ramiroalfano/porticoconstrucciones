import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface AnimatedWhatsAppButtonProps {
  phoneNumber?: string;
}

export const AnimatedWhatsAppButton: React.FC<AnimatedWhatsAppButtonProps> = ({
  phoneNumber = '5491112345678',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [showNotificationBadge, setShowNotificationBadge] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Show callout after 2 seconds at initial view
    const timer = setTimeout(() => {
      setShowNotificationBadge(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Listen to scroll to collapse the "¿Cotizamos tu proyecto?" text pill
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickMessages = [
    { text: 'Quiero cotizar una obra nueva', label: 'Cotizar obra nueva' },
    { text: 'Tengo planos y busco dirección técnica', label: 'Dirección de obra' },
    { text: 'Necesito presupuesto para refacción', label: 'Refacción / Puesta en valor' },
    { text: 'Consulta por desarrollo inmobiliario', label: 'Desarrollo / Inversión' },
  ];

  const handleSendMessage = (textToSend: string) => {
    const encoded = encodeURIComponent(`Hola Pórtico Construcciones, ${textToSend}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  // The text banner is visible only if not opened, timed in, AND NOT scrolled down
  const showTextBanner = !isOpen && showNotificationBadge && !isScrolled;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Quick Chat Popover Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-[#1F2D3A]">
          {/* Header */}
          <div className="bg-[#1F2D3A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#1F2D3A] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Pórtico Construcciones</h4>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>En línea · Respuesta rápida</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#F8F9FA] max-h-80 overflow-y-auto">
            <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed mb-4">
              <p className="font-semibold text-[#1F2D3A] mb-1">¡Hola! Te damos la bienvenida a Pórtico.</p>
              <p>¿En qué tipo de obra o servicio podemos ayudarte hoy?</p>
            </div>

            {/* Quick choices */}
            <div className="space-y-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Respuestas rápidas:
              </span>
              {quickMessages.map((qm, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(qm.text)}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 hover:border-[#25D366] border border-slate-200 rounded text-xs font-medium text-slate-800 transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                >
                  <span>{qm.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribí tu consulta..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSendMessage(customMsg);
                }
              }}
              className="flex-1 text-xs px-3 py-2 bg-slate-100 rounded border border-transparent focus:border-[#25D366] focus:bg-white focus:outline-none transition-all"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) handleSendMessage(customMsg);
              }}
              disabled={!customMsg.trim()}
              className="p-2 rounded bg-[#25D366] hover:bg-[#20ba59] text-white disabled:opacity-40 transition-colors cursor-pointer"
              aria-label="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Persistent Animated Floating Area */}
      <div className="relative flex items-center gap-3">
        {/* Animated Pop-in Notification Speech Bubble (Disappears completely on scroll) */}
        <div
          className={`transition-all duration-300 transform origin-right ${
            showTextBanner
              ? 'opacity-100 scale-100 translate-x-0'
              : 'opacity-0 scale-90 translate-x-4 pointer-events-none'
          }`}
        >
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-white text-[#1F2D3A] rounded-full shadow-xl border border-slate-200 text-xs font-semibold cursor-pointer hover:border-[#25D366] transition-colors whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>¿Cotizamos tu proyecto?</span>
            <span className="text-[10px] text-[#FF8A00] uppercase font-bold">En línea</span>
          </div>
        </div>

        {/* Floating Animated WhatsApp Button - Titilando/Pulsing on scroll */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] transition-all cursor-pointer group focus:outline-none focus:ring-4 focus:ring-emerald-400/30 shrink-0"
          aria-label="Abrir chat de WhatsApp"
        >
          {/* Continuous pulsing / titilando rings */}
          <span className="absolute -inset-2 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse" />
          <span className="absolute -inset-0.5 rounded-full border border-white/50" />

          {isOpen ? (
            <X className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-90" />
          ) : (
            <MessageCircle className="w-7 h-7 relative z-10 animate-[bounce_3s_ease-in-out_infinite]" />
          )}

          {/* Live notification badge dot */}
          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#FF8A00] border-2 border-white rounded-full z-20 animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
};
