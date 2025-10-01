import React from 'react';
import { Camera, Video, Instagram, Users, TrendingUp, Heart, Eye, Target, CheckCircle, Play, Image } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { AnimatedPage } from '../common/AnimationPage';

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
    // <AnimatedPage>
<Section id="colaboraciones" className="py-16 sm:py-20 md:py-24 relative w-full overflow-x-hidden">
  <div className="absolute inset-0" style={{ backgroundColor: '#4D1A09' }} />
  <div className="absolute inset-0 vintage-texture-paper opacity-30" />

  <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
    {/* Hero Section */}
    <div className="text-center mt-10 mb-12 sm:mb-16 md:mb-20">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-tight"
        style={{ color: '#EDDCC3' }}
      >
        COLABORACIONES
      </h1>
      <div
        className="w-16 sm:w-20 md:w-24 h-0.5 mx-auto mb-8 sm:mb-10 md:mb-12"
        style={{ backgroundColor: '#CBB186' }}
      />
    </div>

    {/* Filosofía + Beneficios */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
      <div className="space-y-6 sm:space-y-8">
        <Card className="p-6 sm:p-10 md:p-16 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#291509' }}>
            Responsabilidad Digital en 2025
          </h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed" style={{ color: '#524354' }}>
            <p>
              En pleno 2025 todas las personas tenemos la responsabilidad de crear
              una imagen digital asertiva.
            </p>
            <p>
              Y en las marcas esta responsabilidad se incrementa de forma exponencial.
              Tu identidad visual digital es tu nueva vitrina ante el mercado.
            </p>

            <div className="p-4 sm:p-6 vintage-border" style={{ backgroundColor: '#565021' }}>
              <p className="text-lg sm:text-xl font-medium text-center" style={{ color: '#EDDCC3' }}>
                Transmítele al consumidor un interés genuino de cambiar su vida mediante
                tus productos/servicios, y lo habrás convertido en tu cliente.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10" style={{ color: '#EDDCC3' }}>
          Beneficios del Branding y Colaboraciones
        </h3>
        {beneficios.map((beneficio, index) => (
          <Card
            key={index}
            hover
            className="p-4 sm:p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
            style={{ backgroundColor: '#d9cbbaff' }}
          >
            <div className="flex items-start">
              <beneficio.icon
                className="w-8 h-8 sm:w-12 sm:h-12 mr-3 sm:mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ color: '#4D1A09' }}
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: '#291509' }}>
                  {beneficio.titulo}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-80" style={{ color: '#524354' }}>
                  {beneficio.descripcion}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>

    {/* Servicios Individuales */}
    <div className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-16">
        <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#EDDCC3' }}>
          SERVICIOS INDIVIDUALES
        </h3>
        <p className="text-base sm:text-lg opacity-80" style={{ color: '#CBB186' }}>
          Creación de contenido orgánico personalizado
        </p>
      </div>

      <div
        ref={elementRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {serviciosIndividuales.map((servicio, index) => (
          <Card
            key={index}
            hover
            className="p-6 sm:p-8 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
            style={{ backgroundColor: '#EDDCC3' }}
          >
            <div className="text-center mb-4 sm:mb-6">
              <servicio.icon
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: '#4D1A09' }}
              />
              <h4 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#291509' }}>
                {servicio.titulo}
              </h4>
              <a
                href="https://wa.me/573204033404?text=Hola%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  // size="md sm:lg"
                  onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar colaboración
                </Button>
              </a>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 opacity-80" style={{ color: '#020102ff' }}>
              {servicio.descripcion}
            </p>

            <div className="space-y-2">
              <h5 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3" style={{ color: '#565021' }}>
                VENTAJAS:
              </h5>
              {servicio.ventajas.map((ventaja, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" style={{ color: '#565021' }} />
                  <span style={{ color: '#524354' }}>{ventaja}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>

    {/* Paquetes */}
    <div className="mb-16 sm:mb-20">
      <div className="text-center mb-10 sm:mb-16">
        <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#EDDCC3' }}>
          PAQUETES DE CONTENIDO
        </h3>
        <p className="text-base sm:text-lg opacity-80" style={{ color: '#CBB186' }}>
          Soluciones integrales para mayor impacto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {paquetes.map((paquete, index) => (
          <Card
            key={index}
            hover
            className="p-6 sm:p-8 text-center group transform transition-all duration-500 hover:scale-105 vintage-shadow"
            style={{ backgroundColor: '#565021' }}
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#EDDCC3' }}>
              {paquete.titulo}
            </h4>
            <div className="mb-4 px-3 sm:px-4 py-1 sm:py-2 inline-block" style={{ backgroundColor: '#EDDCC3' }}>
              <span className="text-xs sm:text-sm font-medium" style={{ color: '#291509' }}>
                {paquete.duracion}
              </span>
            </div>


            <div className="space-y-2 sm:space-y-3">
            <a
              href="https://wa.me/573204033404?text=Hola%20quiero%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                // size="md sm:lg"
                className="mb-4 sm:mb-6"
                onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar colaboración
              </Button>
            </a>
              <h5 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4" style={{ color: '#EDDCC3' }}>
                INCLUYE:
              </h5>
              {paquete.incluye.map((item, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" style={{ color: '#CBB186' }} />
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
      <Card className="p-8 sm:p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#EDDCC3' }}>
          ¿Lista para crear contenido que conecte?
        </h3>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#e5cca4ff' }}>
          Trabajemos juntas para crear contenido auténtico que genere conexiones reales
          y transforme seguidores en clientes leales de tu marca.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button variant="secondary" onClick={() => window.location.href = '/servicios'}>
            Ver otros servicios
          </Button>
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
              Solicitar colaboración
            </Button>
          </a>
        </div>
      </Card>
    </div>
  </div>
</Section>

    // </AnimatedPage>
  );
};