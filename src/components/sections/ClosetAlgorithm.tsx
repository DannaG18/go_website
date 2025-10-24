import { Search, Eye, Palette, Layers, ShoppingBag, ArrowRight, BookOpen, Download, Star } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { CLOSET_ALGORITHM_STEPS } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedPage } from '../common/AnimationPage';

const iconMap = {
  Search,
  Eye,
  Palette,
  Layers,
  ShoppingBag,
};

export const ClosetAlgorithm: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const benefits = [
    {
      title: 'Autoconocimiento Profundo',
      description: 'Descubre tu esencia personal a través de un análisis introspectivo de tus raíces y valores.'
    },
    {
      title: 'Armario Cápsula Personalizado',
      description: 'Prendas básicas y atemporales seleccionadas específicamente para tu estilo de vida.'
    },
    {
      title: 'Seguridad en tu Estilo',
      description: 'Desarrolla la confianza para expresar tu sello personal único sin dudas.'
    },
    {
      title: 'Inversión Inteligente',
      description: 'Aprende a invertir en piezas que realmente funcionan para ti y tu presupuesto.'
    }
  ];

  return (
    <AnimatedPage>
      <Section id="algoritmo-closet" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#250700ff' }}
        />

        {/* Natural fabric texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="textures/WhiteTexture2.jpg"
            alt="Natural fabric texture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: '#EDDCC3' }}>
              EL ALGORITMO
              <br />
              <span className="text-4xl md:text-5xl font-light">de tu</span>
              <br />
              CLOSET
            </h2>
            <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#CBB186' }} />
          </div>

          {/* Main Description */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <div className="space-y-6">
              <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                <h3 className="text-center text-[34px] font-bold mb-6" style={{ color: '#291509' }}>
                  Una Poderosa Herramienta Digital
                </h3>
                <div className="grid md:grid-cols-2 gap-12 items-center " style={{ color: '#3a303bff' }}>
                  <div className='space-y-6 text-lg leading-relaxed'>
                  <p>
                    Una poderosa herramienta digital de iniciación a tu nuevo armario
                    cápsula con prendas básicas y atemporales definidas para ti.
                  </p>
                  <p>
                    Un recorrido introspectivo en tus raíces que te permitirá amar tu
                    sello personal y darte la seguridad de tu propio estilo.
                  </p>
                  </div>
                <div className="space-y-4 mx-full">
                  <img
                    src="/gaby/photo11.jpeg"
                    alt="Investigación de materiales sostenibles"
                    className="w-full h-full object-cover object-[25%_98%] shadow-2xl"
                  />
                </div>
                </div>
              </Card>

              <Card className="p-8 vintage-shadow border-white" style={{ backgroundColor: '#512418ff' }}>
                <h4 className="text-2xl font-medium mb-3" style={{ color: '#EDDCC3' }}>
                  Más que un Ebook
                </h4>
                <p className="text-base leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                  Es una experiencia transformadora que combina autoconocimiento,
                  estrategia de estilo y construcción de confianza personal.
                </p>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-[33px] font-bold mb-8" style={{ color: '#EDDCC3' }}>
                Lo que Lograrás
              </h3>
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  hover
                  className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                  style={{ backgroundColor: '#C8BAAA' }}
                >
                  <div className="flex items-start">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0"
                      style={{ backgroundColor: '#8B8D79' }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#291509' }}>
                        {benefit.title}
                      </h4>
                      <p className="text-m leading-relaxed opacity-80" style={{ color: '#413642ff' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Algorithm Steps */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#EDDCC3' }}>
              El Proceso de Transformación
            </h3>

            <div
              ref={elementRef}
              className={`grid md:grid-cols-2 lg:grid-cols-5 gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {CLOSET_ALGORITHM_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];

                return (
                  <div key={step.step} className="relative">
                    <Card
                      hover
                      className="p-6 text-center group h-full transform transition-all duration-500 hover:scale-105 vintage-shadow"
                      style={{ backgroundColor: '#EDDCC3' }}
                    >
                      <div
                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: '#8B8D79' }}
                      >
                        {step.step}
                      </div>

                      <Icon
                        className="w-12 h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: '#565021' }}
                      />

                      <h4 className="text-lg font-semibold mb-4" style={{ color: '#291509' }}>
                        {step.title}
                      </h4>

                      <p className="text-sm leading-relaxed opacity-80" style={{ color: '#362c23ff' }}>
                        {step.description}
                      </p>
                    </Card>

                    {/* Arrow connector for desktop */}
                    {index < CLOSET_ALGORITHM_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 opacity-60" style={{ color: '#CBB186' }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ebook Purchase Section */}
          <div className="text-center">
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
              <div className="max-w-4xl mx-auto">
                <BookOpen className="w-20 h-20 mx-auto mb-8" style={{ color: '#361603ff' }} />

                <h3 className="text-4xl font-bold mb-14" style={{ color: '#361603ff' }}>
                  Obtén tu Ebook Digital
                </h3>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 mx-full h-full">
                    <img
                      src="/gaby/ebook.png"
                      alt="Investigación de materiales sostenibles"
                      className="w-full h-full object-cover object-[25%_95%] vintage-shadow rounded-lg"
                    />
                  </div>
                  <div className='flex justify-start flex-col h-full'>
                    <p className="text-2xl  mb-12 opacity-90 leading-relaxed" style={{ color: '#361603ff' }}>
                      <strong>"El Algoritmo de tu Closet"</strong>  - Tu guía completa
                      para construir un armario cápsula auténtico y atemporal.
                    </p>
                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      <div className="text-center">
                        <Download className="w-8 h-8 mx-auto mb-3" style={{ color: '#361603ff' }} />
                        <h4 className="font-semibold text-lg mb-2" style={{ color: '#361603ff' }}>Descarga Inmediata</h4>
                        <p className="text-sm opacity-80" style={{ color: '#361603ff' }}>Acceso instantáneo tras la compra</p>
                      </div>
                      <div className="text-center">
                        <Star className="w-8 h-8 mx-auto mb-3" style={{ color: '#361603ff' }} />
                        <h4 className="font-semibold text-lg mb-2" style={{ color: '#361603ff' }}>Contenido Exclusivo</h4>
                        <p className="text-sm opacity-80" style={{ color: '#361603ff' }}>Metodología única y personalizada</p>
                      </div>
                      <div className="text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-3" style={{ color: '#361603ff' }} />
                        <h4 className="font-semibold text-lg mb-2" style={{ color: '#361603ff' }}>Formato Digital</h4>
                        <p className="text-sm opacity-80" style={{ color: '#361603ff' }}>Compatible con todos los dispositivos</p>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="bg-white bg-opacity-10 p-8 vintage-shadow">
                      <div className="text-center mb-6">
                        <span className="text-3xl font-bold" style={{ color: '#361603ff' }}>$80.0000 COP</span>
                        <p className="text-sm opacity-80 mt-2" style={{ color: '#291509' }}>Inversión única • Acceso de por vida</p>
                      </div>
                      <a
                        href="https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20adquirir%20el%20Ebook."
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="w-full md:w-auto mx-auto text-xl px-12 py-6"
                        >
                          Comprar Ebook Ahora
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm opacity-70 mt-9" style={{ color: '#361603ff' }}>
                  Garantía de satisfacción de 30 días • Pago seguro • Soporte incluido
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </AnimatedPage>
  );
};