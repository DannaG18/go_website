import { ReactNode, ElementType } from 'react';
import { DivideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ComponentType<{ className?: string }>; // ✅ aquí
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  as?: 'button' | 'div';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  disabled = false,
  type = 'button',
  className = '',
  as = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 vintage-shadow border';

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#291509',
          color: '#EDDCC3',
          borderColor: '#291509',
        };
      case 'secondary':
        return {
          backgroundColor: '#565021',
          color: '#EDDCC3',
          borderColor: '#565021',
        };
      case 'tertiary':
        return {
          backgroundColor: '#291509',
          color: '#EDDCC3',
          borderColor: '#EDDCC3',
          border: '2px solid',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#291509',
          borderColor: '#291509',
        };
      default:
        return {};
    }
  };

  const Component: ElementType = as;

  return (
    <Component
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      disabled={as === 'button' ? disabled : undefined}
      className={`${baseClasses} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:vintage-shadow-lg transform'
        }`}
      style={getVariantStyles()}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </Component>
  );
}
