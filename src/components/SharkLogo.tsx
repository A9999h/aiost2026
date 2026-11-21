import React from 'react';

interface SharkLogoProps {
  className?: string;
  showBackground?: boolean;
  size?: number | string;
  isFloating?: boolean;
}

export const SharkLogo: React.FC<SharkLogoProps> = ({
  className = '',
  size = '100%',
}) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}shark-logo.svg`}
      alt="Layered shark logo"
      style={
        typeof size === 'number'
          ? { width: size, height: size }
          : size !== '100%'
          ? { width: size, height: size }
          : undefined
      }
      className={`w-full h-full object-contain select-none ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

