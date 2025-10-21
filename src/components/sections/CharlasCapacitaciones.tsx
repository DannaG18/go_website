import React from 'react';
import { Users, Clock, Building, Eye, Heart, Leaf, TrendingDown, Award, CheckCircle, ArrowDown } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { AnimatedPage } from '../common/AnimationPage';

export const CharlasCapacitaciones: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const scrollToFormatos = () => {
    const element = document.getElementById('next-content');
    if (element) {
      const offset = 140;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
      ],
      mensaje:'https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20solicitar%20una%20charla%20inspiracional.'
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
      ],
      mensaje:'https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20solicitar%20un%20workshop%20interactivo.'
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
      ],
      mensaje:'https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20solicitar%20un%20programa%20corporativo.'
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
    // <AnimatedPage>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#EDDCC3' }}>
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
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#EDDCC3' }}>
              Dos Pilares Fundamentales
            </h3>
            {pilares.map((pilar, index) => (
              <Card
                key={index}
                hover
                className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <div className="flex items-start">
                  <pilar.icon
                    className="w-12 h-12 mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ color: '#4D1A09' }}
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#291509' }}>
                      {pilar.titulo}
                    </h4>
                    <p className="text-m leading-relaxed opacity-80" style={{ color: '#524354' }}>
                      {pilar.descripcion}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            {/* Scroll indicator debajo de los pilares */}
            <div className="flex justify-en">
              <button
                onClick={scrollToFormatos}
                className="flex justify-center items-center p-6 w-full h-28 opacity-90 hover:opacity-100 transition-all duration-300 vintage-shadow"
                style={{ backgroundColor: '#291509' }}
              >
                <ArrowDown className="w-6 h-6" style={{ color: '#fcfbf4ff' }} />
              </button>
            </div>
          </div>
        </div>


        {/* Formatos Disponibles */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 id="next-content" className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
              FORMATOS DISPONIBLES
            </h3>
            <p className="text-lg opacity-80" style={{ color: '#e7e6e5ff' }}>
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
                  <span className="text-sm font-bold" style={{ color: '#EDDCC3' }}>
                    {formato.duracion}
                  </span>
                </div>

                <p className="text-m leading-relaxed mb-6 opacity-80" style={{ color: '#524354' }}>
                  {formato.descripcion}
                </p>

                <div className="space-y-2 mb-5">
                  {formato.caracteristicas.map((caracteristica, charIndex) => (
                    <div key={charIndex} className="flex items-center text-sm z">
                      <CheckCircle className="w-3 h-3 mr-2 " style={{ color: '#565021' }} />
                      <span style={{ color: '#524354' }}>{caracteristica}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={formato.mensaje}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full"
                    onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar colaboración
                  </Button>
                </a>
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
                  style={{ color: '#dfc294ff' }}
                />

                <h4 className="text-xl font-bold mb-4" style={{ color: '#EDDCC3' }}>
                  {beneficio.titulo}
                </h4>

                <p className="text-m leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
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
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = '/servicios'}
              >
                Ver otros servicios
              </Button>
              <a
                href="https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20solicitar%20una%20charla%20o%20capacitación."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant='tertiary'
                  onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar charla
                </Button>
              </a>

            </div>
          </Card>
        </div>
      </div>
    </Section>
    // {/* </AnimatedPage> */}
  );
};