import React, { useRef, useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection, onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = React.useState<string>('/videobanner.mp4');

  useEffect(() => {
    let currentObjectUrl: string | null = null;

    const loadVideo = async () => {
      try {
        const { getBannerVideoBlob } = await import('../utils/videoStorage.ts');
        const customBlob = await getBannerVideoBlob();
        if (customBlob) {
          if (currentObjectUrl) {
            URL.revokeObjectURL(currentObjectUrl);
          }
          currentObjectUrl = URL.createObjectURL(customBlob);
          setVideoSrc(currentObjectUrl);
        }
      } catch (err) {
        console.error('Error loading custom video blob:', err);
      }
    };

    loadVideo();

    const handleUpdate = () => {
      loadVideo();
    };

    window.addEventListener('banner-video-updated', handleUpdate);

    return () => {
      window.removeEventListener('banner-video-updated', handleUpdate);
      if (currentObjectUrl) {
        URL.revokeObjectURL(currentObjectUrl);
      }
    };
  }, []);

  // Ensure video autoplays smoothly on mount or src change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [videoSrc]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1F2D3A]">
      {/* Background Video Layer - 100% background, no public upload controls, continuous looping */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          key={videoSrc}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Architectural Contrast Scrims - calibrated for video clarity while preserving text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141E27]/85 via-[#1F2D3A]/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3A] via-transparent to-black/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Brand Kicker */}
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#FF8A00] uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#FF8A00]" />
            <span>Excelencia · Compromiso · Construyendo Juntos</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            Grandes proyectos, <br />
            <span className="text-[#FF8A00]">mejores historias.</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
            En <strong className="font-semibold text-white">Pórtico Construcciones</strong> desarrollamos espacios pensados para durar. Combinamos ingeniería de precisión, cumplimiento riguroso de plazos y dirección experta en cada etapa de obra.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF8A00] hover:bg-[#e07900] active:scale-[0.98] transition-all rounded shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollToSection('obras')}
              className="px-7 py-4 text-sm font-semibold tracking-wider text-white hover:text-[#FF8A00] bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 transition-all rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ver Obras Realizadas</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
              <span>Contratos con Plazo Garantizado</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF8A00]" />
              <span>Personal 100% Matriculado & Normas ART</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">·</span>
              <span>Cómputo métrico cerrado sin sorpresas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Proof Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#16212B]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                +12 <span className="text-[#FF8A00]">Años</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                Trayectoria en obras civiles y comerciales
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                +85.000 <span className="text-[#FF8A00]">m²</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                Construidos y fiscalizados en tiempo récord
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                100<span className="text-[#FF8A00]">%</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                Cumplimiento de plazos contractuales
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                +140
              </div>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">
                Proyectos entregados llave en mano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
