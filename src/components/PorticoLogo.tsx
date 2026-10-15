import React from 'react';

interface PorticoLogoProps {
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

export const PorticoLogo: React.FC<PorticoLogoProps> = ({
  variant = 'light',
  showSubtitle = false,
  size = 'md',
  iconOnly = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base tracking-wider',
    md: 'text-xl tracking-widest',
    lg: 'text-2xl tracking-widest',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  const isDarkVariant = variant === 'dark';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* 3D Isometric Brand Mark */}
      <svg
        viewBox="0 0 100 100"
        className={`${iconSizes[size]} shrink-0 drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shadow */}
        <ellipse cx="50" cy="88" rx="38" ry="8" fill="rgba(0,0,0,0.18)" />

        {/* Small vertical block (left stem) */}
        {/* Top face */}
        <polygon points="12,38 25,30 38,38 25,46" fill="#F4F6F8" />
        {/* Left face */}
        <polygon points="12,38 25,46 25,62 12,54" fill="#243342" />
        {/* Right face */}
        <polygon points="25,46 38,38 38,54 25,62" fill="#15212C" />

        {/* Main upper 'P' block with cutout */}
        {/* Top surface */}
        <polygon points="45,28 66,15 88,28 66,41" fill="#EAECEF" />
        {/* Inner cutout square top */}
        <polygon points="56,28 66,22 76,28 66,34" fill="#E27400" />
        {/* Inner cutout sides */}
        <polygon points="56,28 66,34 66,40 56,34" fill="#FF8A00" />
        <polygon points="66,34 76,28 76,34 66,40" fill="#FF9E2C" />
        
        {/* Right outer face */}
        <polygon points="88,28 88,44 66,57 66,41" fill="#18232F" />
        {/* Left outer face */}
        <polygon points="45,28 45,44 66,57 66,41" fill="#2C3D4D" />

        {/* Lower horizontal block */}
        {/* Top face */}
        <polygon points="25,46 48,32 78,50 55,64" fill="#F0F2F5" />
        {/* Left side face */}
        <polygon points="25,46 55,64 55,80 25,62" fill="#273747" />
        {/* Front right end cap - Orange Accent */}
        <polygon points="55,64 78,50 78,66 55,80" fill="#FF8A00" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={`font-extrabold uppercase leading-none font-['Montserrat'] ${titleSizes[size]} ${
                isDarkVariant ? 'text-[#1F2D3A]' : 'text-white'
              }`}
            >
              PÓRTICO
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-3.5 h-[2px] bg-[#FF8A00] shrink-0" />
            <span
              className={`font-semibold uppercase font-['Montserrat'] ${subSizes[size]} ${
                isDarkVariant ? 'text-[#3D5266]' : 'text-slate-300'
              }`}
            >
              CONSTRUCCIONES
            </span>
            <span className="w-3.5 h-[2px] bg-[#FF8A00] shrink-0" />
          </div>

          {showSubtitle && (
            <span className="text-[10px] text-slate-400 font-light tracking-wide mt-1">
              Excelencia · Compromiso · Construyendo Juntos
            </span>
          )}
        </div>
      )}
    </div>
  );
};
