import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: '/', label: 'Inicio' },
    { id: '/servicios', label: 'Servicios' },
    { id: '/vlog', label: 'Vlog' },
    { id: '/algoritmo-closet', label: 'El Algoritmo de tu Closet' },
    { id: '/marca-personal', label: 'Marca Personal' },
    { id: '/sobre-mi', label: 'Sobre Mí' },
    { id: '/contactame', label: 'Contáctame' }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-arena-50/95 backdrop-blur-md shadow-lg shadow-eucalipto-200/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-normal font-serif  transition-opacity duration-300 hover:opacity-80" 
            style={{ color: '#291509' }}
          >
            GO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`text-sm uppercase tracking-wide transition-all duration-300 relative ${
                  location.pathname === item.id 
                    ? 'text-custom-brown font-bold' 
                    : 'text-custom-brown hover:text-marron-oscuro'
                }`}
              >
                {item.label}
                {location.pathname === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-ocre-apagado-800 hover:text-marron-oscuro"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-6 rounded-xl shadow-xl backdrop-blur-md relative z-10 bg-arena-50/95 border-t border-eucalipto-200/30">
            <div className="absolute inset-0 texture-linen opacity-20 pointer-events-none" />
            <nav className="relative z-10 space-y-4 px-6">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-sm font-medium uppercase tracking-wide transition-all duration-300 rounded-lg px-4 py-2 ${
                    location.pathname === item.id 
                      ? 'text-custom-brown font-semibold bg-ocre-apagado-200/30' 
                      : 'text-custom-brown hover:text-marron-oscuro'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
