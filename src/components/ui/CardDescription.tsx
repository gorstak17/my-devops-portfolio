import React from 'react';

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-green-200 text-sm ${className}`}>
      {children}
    </p>
  );
};

export default CardDescription;