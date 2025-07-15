import { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export function Card({ children, className = '', hover = false, style }: CardProps) {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`
        border transition-all duration-500 vintage-shadow
        ${hover ? 'hover:vintage-shadow-lg hover:scale-105' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{
        borderColor: '#8B8D79',
        borderWidth: '1px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
