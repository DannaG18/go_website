import { Sparkles, ArrowDown, Users, Eye, Target, Heart, Sprout, Fingerprint, HeartHandshake } from 'lucide-react';
import { Section } from '../common/Section';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AnimatedPage } from '../common/AnimationPage';

export const PersonalBrand: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const principles = [
    {
      icon: Eye,
      title: 'Identidad Visual Auténtica',
      description: 'Tu ADN convertido en elementos visuales que conectan emocionalmente con tu audiencia.'
    },
    {
      icon: Target,
      title: 'Estrategia Digital Asertiva',
      description: 'Construcción consciente de tu presencia digital como tu nueva vitrina al mercado.'
    },
    {
      icon: Users,
      title: 'Consumidores Reales',
      description: 'Más allá de followers, creamos conexiones genuinas que se convierten en clientes leales.'
    },
    {
      icon: Heart,
      title: 'Propósito Genuino',
      description: 'Transmitir un interés real de transformar vidas a través de tus productos y servicios.'
    }
  ];

  return (
    <AnimatedPage>
      <Section id="marca-personal" className="min-h-screen py-24">
        {/* Background con Arena */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#C8BAAA' }}
        />
        <div className="absolute inset-0 opacity-20">
          <img
            src="/WhiteTexture3.jpg"
            alt="Textura natural de algodón"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Textura vintage de papel */}
        <div className="absolute inset-0 vintage-texture-paper opacity-30" />

        {/* Elementos decorativos vintage */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 overflow-hidden animate-vintage-float">
            <img
              src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Plantas naturales"
              className="w-full h-full object-cover"
            />
          </div> */}

        {/* <div className="absolute top-40 right-20 w-48 h-48 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Textura de lino"
              className="w-full h-full object-cover opacity-60"
            />
          </div> */}

        {/* <div className="absolute bottom-32 left-20 w-24 h-24 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Eucalipto"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        <div className="container relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-12">
              <HeartHandshake className="w-16 h-16 mx-auto mb-8 opacity-60" style={{ color: '#565021' }} />
              {/* <Fingerprint className="w-16 h-16 mx-auto mb-8 opacity-60" style={{ color: '#565021' }} /> */}
              {/* <Sprout /> */}
              {/* <Sparkles className="w-16 h-16 mx-auto mb-8 opacity-60" style={{ color: '#565021' }} /> */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
                <span style={{ color: '#291509' }}>MARCA</span>
                <br />
                <span style={{ color: '#4D1A09' }}>PERSONAL</span>
              </h1>
              <div className="w-24 h-0.5 mx-auto mb-12" style={{ backgroundColor: '#8B8D79' }} />
            </div>
          </div>

          {/* Main Content */}
          <div
            ref={elementRef}
            className={`grid lg:grid-cols-2 gap-20 items-start mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Contenido Principal */}
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/photo5.jpeg"
                  alt="Gabriela Ortiz - Diseñadora de Modas"
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    Gabriela Ortiz
                  </h3>
                  <p className="text-base opacity-90" style={{ color: '#C8BAAA' }}>
                    Imagen e Identidad Digital
                  </p>
                  <a
                    href="https://www.google.com/maps/place/C%C3%BAcuta,+Norte+de+Santander"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-sm mt-2 opacity-80" style={{ color: '#C8BAAA' }}>
                      Cúcuta, Norte de Santander - CO
                    </p>
                  </a>
                </div>
              </div>
              <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#291509' }}>
                  <p className="font-medium">
                    En pleno 2025 todas las personas tenemos la responsabilidad
                    de crear una imagen digital asertiva.
                  </p>

                  <p>
                    Y en las marcas esta responsabilidad se incrementa de forma
                    exponencial. Tu identidad visual digital es tu nueva vitrina ante
                    el mercado, debería ser esencial construirla y alimentarla desde tu ADN.
                  </p>

                  <p>
                    Transmítele al consumidor un interés genuino de cambiar su vida mediante
                    tus productos/servicios, y lo habrás convertido en tu cliente.
                  </p>
                </div>
              </Card>

              {/* Citas destacadas */}
              <div className="space-y-6">
                <Card className="p-6 vintage-shadow" style={{ backgroundColor: '#565021' }}>
                  <blockquote className="text-xl font-light italic text-center" style={{ color: '#EDDCC3' }}>
                    "La identidad digital es tu nueva imagen. No una viralidad."
                  </blockquote>
                </Card>

                <Card className="p-6 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
                  <p className="text-xl font-medium text-center" style={{ color: '#CBB186' }}>
                    Construye consumidores reales, no sólo followers.
                  </p>
                </Card>
                <div className="p-10 ">

                </div>
              </div>
            </div>

            {/* Principios y Metodología */}
            <div className="space-y-8">
              <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#faf2e7ff' }}>
                  Mi Metodología
                </h3>
                <p className="text-base leading-relaxed mb-6 opacity-90" style={{ color: '#faf2e7ff' }}>
                  Desarrollo una estrategia integral que va más allá de la estética,
                  creando una identidad visual que refleje tu esencia y conecte
                  genuinamente con tu audiencia objetivo.
                </p>
              </Card>

              {/* Principios */}
              <div className="grid gap-6">
                {principles.map((principle, index) => (
                  <Card
                    key={index}
                    hover
                    className="p-6 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                    style={{ backgroundColor: '#EDDCC3' }}
                  >
                    <div className="flex items-start">
                      <principle.icon
                        className="w-12 h-12 mr-4 mt-1 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                        style={{ color: '#4D1A09' }}
                      />
                      <div>
                        <h4 className="text-xl font-semibold mb-2" style={{ color: '#291509' }}>
                          {principle.title}
                        </h4>
                        <p className="text-m leading-relaxed opacity-80" style={{ color: '#524354' }}>
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div id="cta-final" className="text-center scroll-mt-24">
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#4D1A09' }}>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                ¿Lista para construir tu marca personal auténtica?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
                Trabajemos juntas para crear una identidad visual que no solo se vea bien,
                sino que genere conexiones reales y transforme visitantes en clientes leales.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to='/servicios' >
                  <Button size="lg" variant='secondary'>
                    Ver mis servicios
                  </Button>
                </Link>
                <a
                  href="https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20aquí)%20y%20quiero%20construir%20mi%20marca%20personal%20auténtica."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="tertiary"
                    size="lg"
                    onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Conversemos
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </AnimatedPage>

  );
};