import React from 'react';
import { Leaf, Eye, CheckCircle, Users, ArrowRight, Heart, Star, Target, Recycle, TrendingUp, Award, RotateCw } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedPage } from '../common/AnimationPage';
import { useState } from 'react';

export const ConsultoriaMarcas: React.FC = () => {
  // const { isVisible, elementRef } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const metodologia = [
    {
      numero: 1,
      titulo: 'DIAGNÓSTICO PROFUNDO',
      items: [
        {
          subtitulo: 'Auditoría de producto estancado',
          descripcion: 'Análisis de materiales, producción y narrativa actual (¿por qué no resuenan?).'
        },
        {
          subtitulo: 'Identificación de oportunidades de revalorización',
          descripcion: 'Upcycling, re-ediciones limitadas o re-lanzamientos con storytelling.'
        },
        {
          subtitulo: 'Perfil del consumidor',
          descripcion: 'Entrevistas con clientes reales (¿qué buscan y qué no encuentran en la marca?).'
        },
        {
          subtitulo: 'Mapeo de puntos ciegos',
          descripcion: 'Entre la oferta de la marca y las demandas de mercado (revisar las competencias).'
        }
      ]
    },
    {
      numero: 2,
      titulo: 'REINVENCIÓN ESTRATÉGICA (Sin greenwashing)',
      items: [
        {
          subtitulo: 'Re-diseño de narrativa',
          descripcion: 'Comunicar el valor atemporal y ético de las piezas (ej: "Este vestido es invierno-verano gracias a su tejido biodegradable").'
        },
        {
          subtitulo: 'Storytelling de procesos',
          descripcion: 'Artesanía, materiales regenerativos para justificar el precio desde el respeto.'
        },
        {
          subtitulo: 'Re-packaging experiencial',
          descripcion: 'Kits exclusivos con piezas estancadas + nuevos básicos (ej: "Cápsula Zero Waste: lleva este abrigo con un cinturón de edición pasada").'
        },
        {
          subtitulo: 'Guías de cuidado',
          descripcion: 'Incluir talleres post-venta para fidelizar.'
        }
      ]
    },
    {
      numero: 3,
      titulo: 'ACCIONES CONCRETAS PARA VENDER',
      items: [
        {
          subtitulo: 'Colecciones cápsula con propósito',
          descripcion: 'Bundles temáticos (ej: "Silent Luxury: 3 prendas estancadas + 1 nueva, en paleta neutra").'
        },
        {
          subtitulo: 'Eventos de intercambio o reparación',
          descripcion: 'Para reactivar piezas antiguas.'
        },
        {
          subtitulo: 'Colaboraciones estratégicas',
          descripcion: 'Con influencers de vida slow (no macro, sino micro-creadores alineados).'
        }
      ]
    }
  ];

  const beneficios = [
    {
      icon: TrendingUp,
      titulo: 'Para las Marcas',
      descripcion: 'Transforman pasivos en activos, manteniendo su ADN auténtico.'
    },
    {
      icon: Heart,
      titulo: 'Para los Consumidores',
      descripcion: 'Soluciona su frustración mediante el valor percibido en las piezas con storytelling.'
    },
    {
      icon: Leaf,
      titulo: 'Para el Planeta',
      descripcion: 'Alarga el ciclo de vida de lo ya producido, reduciendo el impacto ambiental.'
    }
  ];

  const pilares = [
    { texto: 'Educar (no solo vender)' },
    { texto: 'Valorizar (no liquidar)' },
    { texto: 'Legar (no producir)' }
  ];

  return (
    <AnimatedPage>
      <Section id="consultoria-marcas" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#565021' }}
        />

        {/* Textura vintage de papel */}
        <div className="absolute inset-0 vintage-texture-paper opacity-30" />

        <div className="container relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#EDDCC3' }}>
              CONSULTORÍA PARA
              <br />
              <span style={{ color: '#CBB186' }}>MARCAS DE MODA</span>
            </h1>
            <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#8B8D79' }} />
          </div>

          {/* Filosofía Principal */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#291509' }}>
                  El verdadero lujo no se agota en las temporadas
                </h2>

                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                  <p className="font-medium">
                    Se cultiva con transparencia frente al único futuro posible.
                  </p>

                  <div className="p-6 vintage-border" style={{ backgroundColor: '#8B8D79' }}>
                    <p className="text-xl font-medium text-center mb-6" style={{ color: '#EDDCC3' }}>
                      Si tu marca está lista para:
                    </p>
                    <div className="space-y-4">
                      {pilares.map((pilar, index) => (
                        <div key={index} className="flex items-center text-lg">
                          <CheckCircle className="w-6 h-6 mr-4" style={{ color: '#CBB186' }} />
                          <span style={{ color: '#EDDCC3' }}>{pilar.texto}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xl font-bold text-center" style={{ color: '#4D1A09' }}>
                    Trabajemos en una reinvención que tus clientes recordarán.
                  </p>
                </div>
              </Card>
            </div>

            {/* Beneficios */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#EDDCC3' }}>
                ¿Por qué funciona este enfoque?
              </h3>
              {beneficios.map((beneficio, index) => (
                <Card
                  key={index}
                  hover
                  className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                  style={{ backgroundColor: '#C8BAAA' }}
                >
                  <div className="flex items-start">
                    <beneficio.icon
                      className="w-12 h-12 mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                      style={{ color: '#4D1A09' }}
                    />
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#291509' }}>
                        {beneficio.titulo}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524354' }}>
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
              <h3 className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                METODOLOGÍA DE TRABAJO 
              </h3>
              <p className="text-lg opacity-80" style={{ color: '#CBB186' }}>
                Enfoque centrado en el cliente
              </p>
            </div>

            <div className="space-y-6">
              {metodologia.map((etapa, index) => {
                const isExpanded = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="vintage-shadow overflow-hidden transition-all duration-300"
                    style={{ backgroundColor: '#EDDCC3' }} 
                  >
                    {/* Header - Always visible */}
                    <div
                      className="p-6 cursor-pointer hover:bg-opacity-90 transition-all duration-200"
                      style={{ backgroundColor: '#EDDCC3' }}
                      onClick={() => setActiveIndex(isExpanded ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-6 rounded-full"
                            style={{ backgroundColor: '#4D1A09' }}
                          >
                            {etapa.numero}
                          </div>
                          <h4 className="text-xl font-bold" style={{ color: '#291509' }}>
                            {etapa.titulo}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm opacity-60" style={{ color: '#524354' }}>
                            {isExpanded ? 'Ocultar' : 'Ver detalles'}
                          </span>
                          <div
                            className={`transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : 'rotate-0'
                            }`}
                          >
                            <ArrowRight className="w-5 h-5" style={{ color: '#4D1A09' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - Expandable */}
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className="h-px mb-6 mx-12"
                          style={{ backgroundColor: '#8B8D79' }}
                        />
                        <div className="space-y-6 ml-18">
                          {etapa.items.map((item, i) => (
                            <div
                              key={i}
                              className="group hover:bg-opacity-50 hover:bg-white p-4 rounded-lg transition-all duration-200"
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4 mt-1">
                                  <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: '#565021' }}
                                  />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-lg font-semibold mb-2 group-hover:text-opacity-90 transition-all duration-200" 
                                      style={{ color: '#4D1A09' }}>
                                    {item.subtitulo}
                                  </h5>
                                  <p className="text-base leading-relaxed opacity-80" 
                                     style={{ color: '#524354' }}>
                                    {item.descripcion}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                Invierto en lo que perdura
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
                Transformemos tu marca en una experiencia que tus clientes valoren,
                respeten y recuerden. Creemos juntos un legado sostenible.
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
                  ¿Hablamos?
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