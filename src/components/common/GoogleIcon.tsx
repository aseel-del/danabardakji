import React from 'react';

interface GoogleIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({
  name,
  className = '',
  filled = false,
}) => {
  return (
    <span
      className={`material-symbols-outlined select-none inline-flex items-center justify-center leading-none ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
