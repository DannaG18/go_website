import React from 'react';
import { Users, Clock, Building, Eye, Heart, Leaf, TrendingDown, Award, CheckCircle } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedPage } from '../common/AnimationPage';

export const CharlasCapacitaciones: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const formatos = [
    {
      icon: Users,
      titulo: 'Charlas Inspiradoras',
      duracion: '45-60 min',
      descripcion: 'Para ferias o centros comerciales (con demostración en vivo).',
      caracteristicas: [
        'Formato dinámico y visual',
        'Demostración práctica en vivo',
        'Interacción con la audiencia',
        'Enfoque en autoconocimiento'
      ]
    },
    {
      icon: Clock,
      titulo: 'Workshop Interactivo',
      duracion: '2-3 horas',
      descripcion: 'Incluye auditoría de armario express y styling colectivo.',
      caracteristicas: [
        'Auditoría de armario express',
        'Styling colectivo práctico',
        'Ejercicios de autoconocimiento',
        'Guía de básicos personalizados'
      ]
    },
    {
      icon: Building,
      titulo: 'Programa Corporativo',
      duracion: 'Personalizado',
      descripcion: 'Para equipos de retail o diseñadores (cómo asesorar clientes desde la sostenibilidad).',
      caracteristicas: [
        'Capacitación especializada',
        'Herramientas de asesoría',
        'Metodología sostenible',
        'Certificación incluida'
      ]
    }
  ];

  const beneficios = [
    {
      icon: Building,
      titulo: 'Para Empresas',
      descripcion: 'Mejora la reputación y educa a su audiencia en consumo responsable (menos devoluciones/insatisfacción).'
    },
    {
      icon: Users,
      titulo: 'Para Participantes',
      descripcion: 'Ahorran dinero, ganan seguridad personal y reducen su huella textil.'
    },
    {
      icon: Leaf,
      titulo: 'Para el Sector',
      descripcion: 'Fomenta una economía circular desde el demandante, no solo la oferta.'
    }
  ];

  const pilares = [
    {
      icon: Eye,
      titulo: 'Autoconocimiento Corporal',
      descripcion: 'Entender tu morfología, colores y estilo personal único.'
    },
    {
      icon: Heart,
      titulo: 'Básicos de Armario Inteligentes',
      descripcion: 'Selección estratégica de piezas versátiles y atemporales.'
    }
  ];

  return (
    <AnimatedPage>
      <Section id="charlas-capacitaciones" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#8B8D79' }}
        />

        {/* Textura vintage de lino */}
        <div className="absolute inset-0 vintage-texture-linen opacity-30" />

        <div className="container relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#EDDCC3' }}>
              CHARLAS Y
              <br />
              <span style={{ color: '#CBB186' }}>CAPACITACIONES</span>
            </h1>
            <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#C8BAAA' }} />
          </div>

          {/* Filosofía Principal */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#291509' }}>
                  Experiencias Interactivas
                </h2>

                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                  <p>
                    Ofrezco experiencias interactivas que desmitifican la moda sostenible,
                    enfocadas en dos pilares: autoconocimiento corporal y básicos de armario inteligentes.
                  </p>

                  <p className="font-medium">
                    El objetivo es reducir residuos textiles desde la raíz: la decisión de compra.
                  </p>

                  <div className="p-6 vintage-border" style={{ backgroundColor: '#565021' }}>
                    <p className="text-xl font-medium text-center italic" style={{ color: '#EDDCC3' }}>
                      "No se trata de dejar de amar la moda, sino de amarla con los ojos abiertos"
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Pilares */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#EDDCC3' }}>
                Dos Pilares Fundamentales
              </h3>
              {pilares.map((pilar, index) => (
                <Card
                  key={index}
                  hover
                  className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                  style={{ backgroundColor: '#C8BAAA' }}
                >
                  <div className="flex items-start">
                    <pilar.icon
                      className="w-12 h-12 mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                      style={{ color: '#4D1A09' }}
                    />
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#291509' }}>
                        {pilar.titulo}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524354' }}>
                        {pilar.descripcion}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Formatos Disponibles */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                FORMATOS DISPONIBLES
              </h3>
              <p className="text-lg opacity-80" style={{ color: '#CBB186' }}>
                Adaptados a diferentes necesidades y audiencias
              </p>
            </div>

            <div
              ref={elementRef}
              className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {formatos.map((formato, index) => (
                <Card
                  key={index}
                  hover
                  className="p-8 text-center group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                  style={{ backgroundColor: '#EDDCC3' }}
                >
                  <formato.icon
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#4D1A09' }}
                  />

                  <h4 className="text-xl font-bold mb-2" style={{ color: '#291509' }}>
                    {formato.titulo}
                  </h4>

                  <div className="mb-4 px-4 py-2 inline-block" style={{ backgroundColor: '#8B8D79' }}>
                    <span className="text-sm font-medium" style={{ color: '#EDDCC3' }}>
                      {formato.duracion}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: '#524354' }}>
                    {formato.descripcion}
                  </p>

                  <div className="space-y-2">
                    {formato.caracteristicas.map((caracteristica, charIndex) => (
                      <div key={charIndex} className="flex items-center text-xs">
                        <CheckCircle className="w-3 h-3 mr-2" style={{ color: '#565021' }} />
                        <span style={{ color: '#524354' }}>{caracteristica}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#EDDCC3' }}>
              ¿Por qué este enfoque genera cambio?
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => (
                <Card
                  key={index}
                  hover
                  className="p-8 text-center group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                  style={{ backgroundColor: '#565021' }}
                >
                  <beneficio.icon
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#CBB186' }}
                  />

                  <h4 className="text-xl font-bold mb-4" style={{ color: '#EDDCC3' }}>
                    {beneficio.titulo}
                  </h4>

                  <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                    {beneficio.descripcion}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                Transformemos la relación con la moda
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
                Creemos experiencias educativas que generen un impacto real en el consumo consciente
                y la construcción de un futuro más sostenible.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/573204033404?text=Hola%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar charla
                  </Button>
                </a>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = '/servicios'}
                >
                  Ver otros servicios
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </AnimatedPage>
  );
};