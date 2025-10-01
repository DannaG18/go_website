import { User, Briefcase, Users, Camera, ArrowRight } from 'lucide-react';
// import { AnimatedPage } from '../common/AnimationPage';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { SERVICES } from '../../utils/constants';

const iconMap = {
  User,
  Briefcase,
  Users,
  Camera,
};

export const Services: React.FC = () => {
  return (
    // <AnimatedPage>
    <Section id="servicios" className="py-24">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#8b8d79ff' }}
      />

      <div className="absolute inset-0 opacity-20">
        <img
          src="/WhiteTexture3.jpg"
          alt="Textura natural de algodón"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vintage linen texture */}

      {/* Vintage paper texture background */}
      <div className="absolute inset-0 vintage-texture-paper opacity-40" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8" style={{ color: '#EDDCC3' }}>
            Servicios Profesionales
          </h2>
          <div className="w-16 sm:w-24 h-0.5 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: '#CBB186' }} />
          <p className="text-base sm:text-lg max-w-2xl sm:max-w-4xl mx-auto leading-relaxed opacity-90 px-2" style={{ color: '#EDDCC3' }}>
            Ofrezco servicios especializados en consultoría de imagen y desarrollo de marca,
            diseñados para potenciar tu presencia personal y profesional con autenticidad y elegancia.
          </p>
        </div>

        {/* grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                hover
                className="p-6 sm:p-10 group transform transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <div className="flex items-start mb-6 sm:mb-8">
                  <Icon
                    className="w-12 h-12 sm:w-20 sm:h-20 mr-4 sm:mr-8 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ color: '#4D1A09' }}
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4" style={{ color: '#291509' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 opacity-80" style={{ color: '#524354' }}>
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-2 sm:mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#565021' }}
                      />
                      <span style={{ color: '#524354' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                  className="group-hover:vintage-shadow-lg transition-shadow duration-300"
                  onClick={() => {
                    if (service.id === 'consultoria-imagen-personal') {
                      window.location.href = '/consultoria-imagen';
                    } else if (service.id === 'consultoria-marca') {
                      window.location.href = '/consultoria-marcas';
                    } else if (service.id === 'charlas-capacitaciones') {
                      window.location.href = '/charlas-capacitaciones';
                    } else if (service.id === 'colaboraciones') {
                      window.location.href = '/colaboraciones';
                    } else {
                      document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Ver más información
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="p-6 sm:p-8 vintage-border" style={{ backgroundColor: '#565021' }}>
            <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4" style={{ color: '#EDDCC3' }}>
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90" style={{ color: '#C8BAAA' }}>
              Cada proyecto es único. Conversemos sobre tus necesidades específicas
              y creemos una propuesta a tu medida.
            </p>
            <a
              href="https://wa.me/573204033404?text=Hola%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                // size="md sm:lg"
                variant="tertiary"
                onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar ahora
              </Button>
            </a>
          </div>
        </div>
      </div>

    </Section>
    // </AnimatedPage>
  );
};