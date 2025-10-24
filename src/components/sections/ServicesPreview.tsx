import { User, Briefcase, Users, Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { SERVICES } from '../../utils/constants';

const iconMap = {
  User,
  Briefcase,
  Users,
  Camera,
};

export const ServicesPreview: React.FC = () => {

  return (
    
    <section id="servicios-preview" className="py-32 relative overflow-hidden">
      {/* Background con Verde Eucalipto */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#414b33e8' }}
      />
            <div className="absolute inset-0 opacity-15">
        <img
          src="/textures/LeavesBackground.jpg"
          alt="Textura natural de algodón"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Textura vintage de lino */}
      <div className="absolute inset-0 vintage-texture-linen opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#EDDCC3' }}>
            Servicios
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#CBB186' }} />
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90" style={{ color: '#EDDCC3' }}>
            Cada servicio está diseñado para potenciar tu esencia única y crear una imagen 
            auténtica que refleje tu personalidad y valores más profundos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={service.id} 
                hover 
                className="p-8 text-center group transform transition-all duration-500 hover:scale-105 flex flex-col justify-between"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <div className="mb-8">
                  <Icon 
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: '#4D1A09' }} 
                  />
                  <h3 className="text-2xl font-medium mb-4" style={{ color: '#291509' }}>
                    {service.title}
                  </h3>
                  <p className="text-m leading-relaxed mb-4 opacity-80" style={{ color: '#524354' }}>
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div 
                        className="w-2 h-2 mr-3 flex-shrink-0" 
                        style={{ backgroundColor: '#565021' }} 
                      />
                      <span style={{ color: '#524354' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={
                  service.id === 'consultoria-imagen-personal' ? '/consultoria-imagen' :
                  service.id === 'consultoria-marca' ? '/consultoria-marcas' :
                  service.id === 'charlas-capacitaciones' ? '/charlas-capacitaciones' :
                  service.id === 'colaboraciones' ? '/colaboraciones' :
                  '/servicios'
                }>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    icon={ArrowRight}
                    className="group-hover:vintage-shadow-lg transition-shadow duration-300"
                  >
                    Más información
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/servicios">
            <Button size="lg">
              Ver todos los servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};