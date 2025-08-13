import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-green-400 font-semibold ${className}`}>
      {children}
    </h3>
  );
};

export default CardTitle;