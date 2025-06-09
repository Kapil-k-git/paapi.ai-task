import React from 'react';
import { classNames } from '@/utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={classNames(
        'bg-white rounded-xl shadow-soft transition-all duration-300',
        hover && 'hover:shadow-strong',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};