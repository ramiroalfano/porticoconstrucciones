import React from 'react';

interface PorticoLogoProps {
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
}

const logos = {
  nav: { src: '/images/logo-nav.png', width: 1428, height: 286 },
  footer: { src: '/images/logo-footer.png', width: 1453, height: 296 },
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
    <img
      src={logo.src}
      alt="Pórtico Construcciones"
      className={`${heights[size]} w-auto select-none`}
      width={logo.width}
      height={logo.height}
    />
  );
};
