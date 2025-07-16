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
          style={{ backgroundColor: '#565021' }}
        />

        {/* Natural fabric texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#291509' }}>
                  Una Poderosa Herramienta Digital
                </h3>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                  <p>
                    Una poderosa herramienta digital de iniciación a tu nuevo armario
                    cápsula con prendas básicas y atemporales definidas para ti.
                  </p>
                  <p>
                    Un recorrido introspectivo en tus raíces que te permitirá amar tu
                    sello personal y darte la seguridad de tu propio estilo.
                  </p>
                </div>
              </Card>

              <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
                <h4 className="text-xl font-medium mb-4" style={{ color: '#EDDCC3' }}>
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
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#EDDCC3' }}>
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
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#291509' }}>
                        {benefit.title}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524354' }}>
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
              className={`grid md:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

                      <h4 className="text-lg font-medium mb-4" style={{ color: '#291509' }}>
                        {step.title}
                      </h4>

                      <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524334' }}>
                        {step.description}
                      </p>
                    </Card>

                    {/* Arrow connector for desktop */}
                    {index < CLOSET_ALGORITHM_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
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
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
              <div className="max-w-4xl mx-auto">
                <BookOpen className="w-20 h-20 mx-auto mb-8" style={{ color: '#EDDCC3' }} />

                <h3 className="text-4xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                  Obtén tu Ebook Digital
                </h3>

                <p className="text-xl mb-8 opacity-90 leading-relaxed" style={{ color: '#EDDCC3' }}>
                  Descarga inmediata de "El Algoritmo de tu Closet" - Tu guía completa
                  para construir un armario cápsula auténtico y atemporal.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="text-center">
                    <Download className="w-8 h-8 mx-auto mb-3" style={{ color: '#CBB186' }} />
                    <h4 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Descarga Inmediata</h4>
                    <p className="text-sm opacity-80" style={{ color: '#C8BAAA' }}>Acceso instantáneo tras la compra</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-3" style={{ color: '#CBB186' }} />
                    <h4 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Contenido Exclusivo</h4>
                    <p className="text-sm opacity-80" style={{ color: '#C8BAAA' }}>Metodología única y personalizada</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-3" style={{ color: '#CBB186' }} />
                    <h4 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Formato Digital</h4>
                    <p className="text-sm opacity-80" style={{ color: '#C8BAAA' }}>Compatible con todos los dispositivos</p>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="bg-white bg-opacity-10 p-8 mb-8 vintage-shadow">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold" style={{ color: '#EDDCC3' }}>$150.0000 COP</span>
                    <p className="text-sm opacity-80 mt-2" style={{ color: '#C8BAAA' }}>Inversión única • Acceso de por vida</p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full md:w-auto mx-auto text-xl px-12 py-6"
                    onClick={() => {
                      // Aquí iría la lógica de compra/redirección
                      console.log('Redirigir a compra del ebook');
                    }}
                  >
                    Comprar Ebook Ahora
                  </Button>
                </div>

                <p className="text-sm opacity-70" style={{ color: '#C8BAAA' }}>
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