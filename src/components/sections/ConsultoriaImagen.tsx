import React from 'react';
import { Leaf, Eye, CheckCircle, Users, ArrowRight, Heart, Star, Target } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ConsultoriaImagen: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const metodologia = [
    {
      numero: 1,
      titulo: 'DIAGNÓSTICO INICIAL',
      items: [
        {
          subtitulo: 'Cuestionario de estilo',
          descripcion: 'Analizo tus rutinas, preferencias y nivel de compromiso con la moda consciente ¿Prefieres marcas locales?'
        },
        {
          subtitulo: 'Auditoría de armario',
          descripcion: 'Revisamos juntos las piezas que ya posees (presencial o virtual).'
        }
      ],
      identifico: [
        'Piezas clave (las que amas y usas)',
        'Agujeros en tu armario (lo que realmente necesitas)',
        'Oportunidades de upcycling (para darles segunda vida)'
      ]
    },
    {
      numero: 2,
      titulo: 'DEFINICIÓN DE OBJETIVOS',
      items: [
        {
          subtitulo: 'Paleta de color y siluetas',
          descripcion: 'Basada en tu morfología, estilo de vida y valores (ej: tonos neutros para versatilidad, tejidos orgánicos).'
        },
        {
          subtitulo: 'Lista de piezas cápsula priorizando',
          descripcion: 'Materiales duraderos (algodón orgánico, lana ética, lino). Marcas transparentes (con certificaciones sostenibles, marcas locales, etc).'
        }
      ]
    },
    {
      numero: 3,
      titulo: 'PLAN DE ACCIÓN',
      items: [
        {
          subtitulo: 'Guía de compras consciente',
          descripcion: 'Te enviaré un dossier con alternativas sostenibles a las piezas que necesites y combinaciones reales para tu día a día (trabajo, ocio, eventos) usando lo que ya tienes + nuevas adquisiciones estratégicas.'
        }
      ]
    },
    {
      numero: 4,
      titulo: 'SEGUIMIENTO (Adicional)',
      items: [
        {
          subtitulo: 'Check-in a los 3 meses',
          descripcion: 'Evaluamos el funcionamiento del armario y ajustamos según cambios de temporada o necesidades.'
        }
      ]
    }
  ];

  const beneficios = [
    {
      icon: Leaf,
      titulo: 'Sostenibilidad Real',
      descripcion: 'Armario consciente con materiales éticos y marcas transparentes'
    },
    {
      icon: Heart,
      titulo: 'Coherencia Personal',
      descripcion: 'Prendas que reflejan tu identidad y valores más profundos'
    },
    {
      icon: Star,
      titulo: 'Elegancia Atemporal',
      descripcion: 'Cada pieza suma para crear un estilo único y duradero'
    },
    {
      icon: Target,
      titulo: 'Funcionalidad Inteligente',
      descripcion: 'Armarios que funcionan para tu estilo de vida real'
    }
  ];

  return (
    <Section id="consultoria-imagen" className="py-24">
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#C8BAAA' }}
      />
      
      {/* Textura vintage de papel */}
      <div className="absolute inset-0 vintage-texture-paper opacity-30" />

      <div className="container relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#291509' }}>
            CONSULTORÍA DE
            <br />
            <span style={{ color: '#4D1A09' }}>IMAGEN PERSONAL</span>
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#8B8D79' }} />
        </div>

        {/* Filosofía Principal */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#291509' }}>
                Armarios cápsula con esencia sostenible
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                <p>
                  Creo que la verdadera elegancia nace de la coherencia entre lo que 
                  vestimos y lo que valoramos.
                </p>
                
                <p>
                  Mi enfoque no se limita a crear armarios funcionales, sino a curar 
                  prendas que reflejen tu identidad mientras minimizan el impacto ambiental.
                </p>
                
                <div className="p-6 vintage-border" style={{ backgroundColor: '#565021' }}>
                  <p className="text-xl font-medium text-center" style={{ color: '#EDDCC3' }}>
                    Menos es más, pero solo cuando cada pieza suma.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Beneficios */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#291509' }}>
              Lo que Lograrás
            </h3>
            {beneficios.map((beneficio, index) => (
              <Card 
                key={index}
                hover 
                className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: '#8B8D79' }}
              >
                <div className="flex items-start">
                  <beneficio.icon 
                    className="w-12 h-12 mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" 
                    style={{ color: '#EDDCC3' }} 
                  />
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                      {beneficio.titulo}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Metodología */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{ color: '#291509' }}>
              METODOLOGÍA DE TRABAJO
            </h3>
            <p className="text-lg opacity-80" style={{ color: '#524354' }}>
              Personalizada y por etapas
            </p>
          </div>

          <div 
            ref={elementRef}
            className={`space-y-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {metodologia.map((etapa, index) => (
              <Card 
                key={etapa.numero}
                className="p-10 vintage-shadow"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <div className="flex items-start mb-8">
                  <div 
                    className="w-16 h-16 flex items-center justify-center text-white font-bold text-2xl mr-8 flex-shrink-0"
                    style={{ backgroundColor: '#4D1A09' }}
                  >
                    {etapa.numero}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-6" style={{ color: '#291509' }}>
                      {etapa.titulo}
                    </h4>
                    
                    <div className="space-y-6">
                      {etapa.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-3">
                          <h5 className="text-lg font-semibold" style={{ color: '#565021' }}>
                            {item.subtitulo}:
                          </h5>
                          <p className="text-base leading-relaxed opacity-80" style={{ color: '#524354' }}>
                            {item.descripcion}
                          </p>
                        </div>
                      ))}
                      
                      {etapa.identifico && (
                        <div className="mt-6 p-6 vintage-border" style={{ backgroundColor: '#C8BAAA' }}>
                          <h5 className="text-lg font-semibold mb-4" style={{ color: '#291509' }}>
                            Identifico:
                          </h5>
                          <ul className="space-y-2">
                            {etapa.identifico.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-sm">
                                <CheckCircle 
                                  className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" 
                                  style={{ color: '#565021' }} 
                                />
                                <span style={{ color: '#524354' }}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
              ¿Lista para crear tu armario cápsula consciente?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
              Trabajemos juntas para construir un guardarropa que refleje tu esencia, 
              respete el planeta y te haga sentir auténticamente tú.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar consulta
              </Button>
              <Button 
                variant="outline" 
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
  );
};