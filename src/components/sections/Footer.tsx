import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const menuItems = [
    { path: '/marca-personal', label: 'MARCA PERSONAL' },
    { path: '/servicios', label: 'SERVICIOS' },
    { path: '/vlog', label: 'VLOG' },
    { path: '/algoritmo-closet', label: 'EL ALGORITMO DE TU CLOSET' },
    { path: '/sobre-mi', label: 'SOBRE MÍ' },
    { path: '/contactame', label: 'CONTÁCTAME' }
  ];

  return (
      <footer className="py-16" style={{ backgroundColor: '#565521ff' }}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#EDDCC3' }}>
                Gabriela Ortiz
              </h3>
              <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: '#EDDCC3' }}>
                Diseñadora de modas consciente, especializada en crear experiencias visuales auténticas
                que trascienden tendencias y conectan con la esencia personal más profunda.
              </p>
              {/* <div className="w-32 h-0.5" style={{ backgroundColor: '#8B8D79' }} /> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-6" style={{ color: '#EDDCC3' }}>
                Navegación
              </h4>
              <ul className="space-y-2 text-sm">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:opacity-100 transition-opacity duration-200 opacity-70"
                      style={{ color: '#EDDCC3' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-lg font-medium mb-6" style={{ color: '#EDDCC3' }}>
                Conecta conmigo
              </h4>
              <div className="flex space-x-3 mb-6">
                <a
                  href="https://www.instagram.com/sgabrielaortiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: '#1C2218' }}
                >
                  <Instagram className="w-5 h-5" style={{ color: '#EDDCC3' }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: '#1C2218' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: '#EDDCC3' }} />
                </a>
                <a
                  href="mailto:sgabrielaortiz@gmail.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: '#1C2218' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#EDDCC3' }} />
                </a>
              </div>
              <p className="text-sm mb-3 opacity-80" style={{ color: '#EDDCC3' }}>
                sgabrielaortiz@gmail.com
              </p>
              <p className="text-sm opacity-80" style={{ color: '#EDDCC3' }}>
                +57 (320) 403-3404
              </p>
            </div>
          </div>

          <div
            className="border-t pt-8 flex flex-col md:flex-row justify-between items-center"
            style={{ borderColor: '#8B8D79' }}
          >
            <p className="text-sm mb-4 md:mb-0 opacity-70" style={{ color: '#EDDCC3' }}>
              © 2024 Gabriela Ortiz. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-sm opacity-70" style={{ color: '#EDDCC3' }}>
              <span>Hecho con</span>
              <Heart className="w-4 h-4 mx-2" style={{ color: '#CBB186' }} />
              <span>en Colombia</span>
            </div>
          </div>
        </div>
      </footer>
  );
};