import React from 'react';

interface PorticoLogoProps {
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

const logos = {
  nav: {
    png: '/images/logo-nav.png',
    webp: '/images/logo-nav.webp',
    width: 1428,
    height: 286,
  },
  footer: {
    png: '/images/logo-footer.png',
    webp: '/images/logo-footer.webp',
    width: 1453,
    height: 296,
  },
};

export const PorticoLogo: React.FC<PorticoLogoProps> = ({
  showSubtitle = false,
  size = 'md',
}) => {
  const heights = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-16',
  };

  const logo = showSubtitle ? logos.footer : logos.nav;

  return (
    <picture>
      <source srcSet={logo.webp} type="image/webp" />
      <img
        src={logo.png}
        alt="Pórtico Construcciones"
        className={`${heights[size]} w-auto select-none`}
        width={logo.width}
        height={logo.height}
        decoding="async"
        loading={showSubtitle ? 'lazy' : 'eager'}
      />
    </picture>
  );
};
