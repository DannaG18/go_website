import React from 'react';
import { Camera, Video, Instagram, Users, TrendingUp, Heart, Eye, Target, CheckCircle, Play, Image } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Colaboraciones: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const beneficios = [
    {
      icon: Heart,
      titulo: 'Conexión Humana',
      descripcion: 'Conecta más humanamente con tu cliente mediante la implementación genuina de tu producto en la cotidianidad.'
    },
    {
      icon: Users,
      titulo: 'Consumidores Fieles',
      descripcion: 'Atrae consumidores leales mediante una conexión genuina del branding humanizado.'
    },
    {
      icon: Target,
      titulo: 'Problemáticas Reales',
      descripcion: 'Resuelve problemáticas del día a día de tu cliente, generando satisfacción y fidelización.'
    }
  ];

  const serviciosIndividuales = [
    {
      icon: Image,
      titulo: 'POST FORMATO CARRUSEL',
      precio: '$200.000',
      descripcion: 'Creación de 1 post formato CARRUSEL orgánico en colaboración mostrando cómo usar los productos o servicios.',
      ventajas: [
        'Contenido de valor con enfoque en estilo de vida saludable',
        'Enfocado a resolver necesidades del consumidor',
        'Sin contenido de tendencias genéricas virales',
        'ADN de marca personal y marca fusionados en armonía',
        'Entrega por WeTransfer para aprobación',
        'Una modificación incluida'
      ]
    },
    {
      icon: Video,
      titulo: 'VIDEO FORMATO REEL',
      precio: '$200.000',
      descripcion: 'Creación de 1 Video formato REEL orgánico en colaboración mostrando cómo usar los productos o servicios.',
      ventajas: [
        'Contenido de valor con enfoque en estilo de vida saludable',
        'Enfocado a resolver necesidades del consumidor',
        'Sin contenido de tendencias genéricas virales',
        'ADN de marca personal y marca fusionados en armonía',
        'Entrega por WeTransfer para aprobación',
        'Una modificación incluida'
      ]
    },
    {
      icon: Instagram,
      titulo: 'VIDEO FORMATO HISTORIA',
      precio: '$50.000',
      descripcion: 'Creación de 1 historia orgánica en colaboración mostrando cómo usar los productos o servicios.',
      ventajas: [
        'Contenido de valor con enfoque en estilo de vida saludable',
        'Enfocado a resolver necesidades del consumidor',
        'ADN de marca personal y marca fusionados en armonía',
        'Publicación orgánica en momento solicitado',
        'Uso en marca personal y marca oficial'
      ]
    }
  ];

  const paquetes = [
    {
      titulo: 'PAQUETE SEMANAL',
      precio: '$250.000',
      duracion: '1 semana',
      incluye: [
        '1 Video orgánico en formato REEL',
        '2 Historias durante la semana',
        'Fechas acordadas por ambas partes',
        'Taggeo de marca incluido'
      ]
    },
    {
      titulo: 'PAQUETE DOS SEMANAS',
      precio: '$450.000',
      duracion: '2 semanas',
      incluye: [
        '2 Videos orgánicos en formato REEL',
        '4 Historias durante el periodo',
        '1 Post en formato carrusel',
        'Productos acordados por ambas partes'
      ]
    },
    {
      titulo: 'PAQUETE MENSUAL',
      precio: '$750.000',
      duracion: '1 mes',
      incluye: [
        '3 Videos orgánicos en formato REEL',
        '6-8 Historias durante el mes',
        '1 Post en formato carrusel',
        'Productos diferentes adaptados al sello personal'
      ]
    }
  ];

  return (
    <Section id="colaboraciones" className="py-24">
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#4D1A09' }}
      />
      
      {/* Textura vintage de papel */}
      <div className="absolute inset-0 vintage-texture-paper opacity-30" />

      <div className="container relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#EDDCC3' }}>
            COLABORACIONES
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#CBB186' }} />
        </div>

        {/* Filosofía Principal */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#291509' }}>
                Responsabilidad Digital en 2025
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                <p>
                  En pleno 2025 todas las personas tenemos la responsabilidad de crear 
                  una imagen digital asertiva.
                </p>
                
                <p>
                  Y en las marcas esta responsabilidad se incrementa de forma exponencial. 
                  Tu identidad visual digital es tu nueva vitrina ante el mercado; debería 
                  ser esencial construirla y alimentarla desde tu ADN.
                </p>
                
                <div className="p-6 vintage-border" style={{ backgroundColor: '#565021' }}>
                  <p className="text-xl font-medium text-center" style={{ color: '#EDDCC3' }}>
                    Transmítele al consumidor un interés genuino de cambiar su vida mediante 
                    tus productos/servicios, y lo habrás convertido en tu cliente.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Beneficios */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#EDDCC3' }}>
              Beneficios del Branding y Colaboraciones
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

        {/* Servicios Individuales */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
              SERVICIOS INDIVIDUALES
            </h3>
            <p className="text-lg opacity-80" style={{ color: '#CBB186' }}>
              Creación de contenido orgánico personalizado
            </p>
          </div>

          <div 
            ref={elementRef}
            className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {serviciosIndividuales.map((servicio, index) => (
              <Card 
                key={index}
                hover 
                className="p-8 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <div className="text-center mb-6">
                  <servicio.icon 
                    className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: '#4D1A09' }} 
                  />
                  
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#291509' }}>
                    {servicio.titulo}
                  </h4>
                  
                  <div className="mb-4 px-6 py-3 inline-block" style={{ backgroundColor: '#565021' }}>
                    <span className="text-2xl font-bold" style={{ color: '#EDDCC3' }}>
                      {servicio.precio}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed mb-6 opacity-80" style={{ color: '#524354' }}>
                  {servicio.descripcion}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold mb-3" style={{ color: '#565021' }}>
                    VENTAJAS:
                  </h5>
                  {servicio.ventajas.map((ventaja, ventajaIndex) => (
                    <div key={ventajaIndex} className="flex items-start text-xs">
                      <CheckCircle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#565021' }} />
                      <span style={{ color: '#524354' }}>{ventaja}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Paquetes */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
              PAQUETES DE CONTENIDO
            </h3>
            <p className="text-lg opacity-80" style={{ color: '#CBB186' }}>
              Soluciones integrales para mayor impacto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {paquetes.map((paquete, index) => (
              <Card 
                key={index}
                hover 
                className="p-8 text-center group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: index === 1 ? '#8B8D79' : '#565021' }}
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    {paquete.titulo}
                  </h4>
                  
                  <div className="mb-4 px-4 py-2 inline-block" style={{ backgroundColor: '#EDDCC3' }}>
                    <span className="text-sm font-medium" style={{ color: '#291509' }}>
                      {paquete.duracion}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold" style={{ color: '#CBB186' }}>
                      {paquete.precio}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold mb-4" style={{ color: '#EDDCC3' }}>
                    INCLUYE:
                  </h5>
                  {paquete.incluye.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#CBB186' }} />
                      <span style={{ color: '#C8BAAA' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
              ¿Lista para crear contenido que conecte?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
              Trabajemos juntas para crear contenido auténtico que genere conexiones reales 
              y transforme seguidores en clientes leales de tu marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar colaboración
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