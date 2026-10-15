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
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const wordmarkSizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const wordmarkSrc =
    variant === 'dark' ? '/images/logo-wordmark-dark.png' : '/images/logo-wordmark-light.png';

  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src="/images/logo-icon.png"
        alt={iconOnly ? 'Pórtico Construcciones' : ''}
        aria-hidden={iconOnly ? undefined : true}
        className={`${iconSizes[size]} shrink-0 rounded-full`}
        width={512}
        height={512}
      />

      {!iconOnly && (
        <div className="flex flex-col">
          <img
            src={wordmarkSrc}
            alt="Pórtico Construcciones"
            className={`${wordmarkSizes[size]} w-auto`}
            width={1056}
            height={226}
          />

          {showSubtitle && (
            <span className="text-[10px] text-slate-400 font-light tracking-wide mt-1.5">
              Excelencia · Compromiso · Construyendo Juntos
            </span>
          )}
        </div>
      )}
    </div>
  );
};
