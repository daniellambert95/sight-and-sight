import React from 'react';

interface DotPatternProps {
  color?: string;
  size?: number;
  spacing?: number;
  className?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({
  color = 'currentColor',
  size = 2,
  spacing = 20,
  className = '',
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(${color} ${size}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        backgroundPosition: '0 0',
      }}
    />
  );
};

export default DotPattern; 