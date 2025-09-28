import React from 'react';
import { Leaf, Heart, Star, Award, Quote, Camera, Palette, Users } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const About: React.FC = () => {
  return (
    <Section id="sobre-mi" className="py-24">
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#EDDCC3' }}
      />
      
      {/* Textura vintage de papel */}
      <div className="absolute inset-0 vintage-texture-paper opacity-30" />
      
      <div className="container relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-8" style={{ color: '#291509' }}>
            Sobre Mí
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#8B8D79' }} />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-80" style={{ color: '#524354' }}>
            La historia detrás de una pasión que se convirtió en propósito
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left - Personal Photo */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img 
                  src="public/photo3.jpeg" 
                  alt="Gabriela Ortiz - Diseñadora de Modas" 
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    Gabriela Ortiz
                  </h3>
                  <p className="text-base opacity-90" style={{ color: '#C8BAAA' }}>
                    Diseñadora de Modas & Consultora de Imagen
                  </p>
                  <p className="text-sm mt-2 opacity-80" style={{ color: '#C8BAAA' }}>
                    Cúcuta, Norte de Santander, CO
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Personal Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Opening Quote */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#565021' }}>
              <Quote className="w-12 h-12 mb-6" style={{ color: '#CBB186' }} />
              <blockquote className="text-xl font-light italic mb-6 leading-relaxed" style={{ color: '#EDDCC3' }}>
                "Descubrí que la verdadera elegancia no está en seguir tendencias, 
                sino en crear un lenguaje visual que hable por ti antes de que digas una palabra."
              </blockquote>
              <cite className="text-sm font-medium" style={{ color: '#CBB186' }}>
                — Gabriela Ortiz
              </cite>
            </Card>

            {/* Personal Journey */}
            <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#EDDCC3', border: '1px solid #C8BAAA' }}>
              <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: '#291509' }}>
                Mi Camino hacia la Moda Consciente
              </h3>
              
              <div className="space-y-6 text-base leading-relaxed" style={{ color: '#524354' }}>
                <p>
                  Todo comenzó cuando me di cuenta de que mi armario estaba lleno, 
                  pero no tenía nada que ponerme. Esa frustración me llevó a cuestionar 
                  no solo mi relación con la moda, sino la de toda una generación.
                </p>
                
                <p>
                  Como diseñadora de modas, había sido parte del problema: creando deseos 
                  temporales en lugar de soluciones duraderas. Fue entonces cuando decidí 
                  cambiar mi enfoque completamente.
                </p>
                
                <p className="font-medium" style={{ color: '#291509' }}>
                  Hoy, mi misión es simple pero poderosa: ayudar a mujeres como tú a 
                  descubrir su estilo auténtico mientras construimos un futuro más sostenible.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* What Drives Me Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: '#291509' }}>
            Lo que me Impulsa Cada Día
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#8B8D79' }}>
              <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#EDDCC3' }} />
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#EDDCC3' }}>
                Conexión Auténtica
              </h4>
              <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                Creo que cada mujer tiene una esencia única que merece ser celebrada, 
                no escondida bajo tendencias pasajeras.
              </p>
            </Card>

            <Card className="p-8 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#565021' }}>
              <Leaf className="w-16 h-16 mx-auto mb-6" style={{ color: '#CBB186' }} />
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#EDDCC3' }}>
                Impacto Positivo
              </h4>
              <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                Cada decisión consciente que tomamos hoy es un voto por el mundo 
                que queremos dejar a las próximas generaciones.
              </p>
            </Card>

            <Card className="p-8 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#4D1A09' }}>
              <Star className="w-16 h-16 mx-auto mb-6" style={{ color: '#CBB186' }} />
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#EDDCC3' }}>
                Transformación Real
              </h4>
              <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                No se trata solo de verse bien, sino de sentirse poderosa, 
                auténtica y alineada con tus valores más profundos.
              </p>
            </Card>
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold mb-8" style={{ color: '#291509' }}>
              Detrás de Cámaras
            </h3>
            
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="flex items-start mb-6">
                <Camera className="w-8 h-8 mr-4 mt-1" style={{ color: '#291509' }} />
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#291509' }}>
                    Mi Proceso Creativo
                  </h4>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524354' }}>
                    Cada consultoría comienza con una conversación profunda. No me interesa 
                    solo tu talla o tu presupuesto, sino tu historia, tus sueños y tus valores.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#565021' }}>
              <div className="flex items-start mb-6">
                <Palette className="w-8 h-8 mr-4 mt-1" style={{ color: '#CBB186' }} />
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                    Mi Filosofía de Trabajo
                  </h4>
                  <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                    Menos es más, pero solo cuando cada pieza cuenta una historia. 
                    Prefiero un armario de 20 piezas que ames, que 200 que ignores.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
              <div className="flex items-start mb-6">
                <Users className="w-8 h-8 mr-4 mt-1" style={{ color: '#EDDCC3' }} />
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                    Mi Compromiso Contigo
                  </h4>
                  <p className="text-sm leading-relaxed opacity-90" style={{ color: '#C8BAAA' }}>
                    No termino mi trabajo cuando entregas tu nuevo armario. Te acompaño 
                    en el proceso de hacer tuyo cada look, cada combinación, cada decisión.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Process Images */}
          <div className="space-y-6">
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <img 
                src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gabriela trabajando en consultoría" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-sm font-serif font-semibold mb-2" style={{ color: '#291509' }}>
                  Sesión de Consultoría Personal
                </h5>
                <p className="text-xs opacity-80" style={{ color: '#524354' }}>
                  Cada cliente es única, cada proceso es diferente
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
              <img 
                src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Materiales sostenibles" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-sm font-serif font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                  Selección de Materiales
                </h5>
                <p className="text-xs opacity-90" style={{ color: '#C8BAAA' }}>
                  Cada fibra cuenta, cada elección importa
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#565021' }}>
              <img 
                src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Resultado final" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-sm font-serif font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                  El Resultado
                </h5>
                <p className="text-xs opacity-90" style={{ color: '#C8BAAA' }}>
                  Confianza que se refleja en cada paso
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#EDDCC3', border: '1px solid #C8BAAA' }}>
            <div className="text-3xl font-serif font-bold mb-2" style={{ color: '#291509' }}>300+</div>
            <div className="text-sm font-medium" style={{ color: '#524354' }}>Mujeres Transformadas</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
            <div className="text-3xl font-serif font-bold mb-2" style={{ color: '#291509' }}>10+</div>
            <div className="text-sm font-medium" style={{ color: '#524354' }}>Años de Experiencia</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
            <div className="text-3xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>50+</div>
            <div className="text-sm font-medium" style={{ color: '#C8BAAA' }}>Marcas Colaboradoras</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <div className="text-3xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>∞</div>
            <div className="text-sm font-medium" style={{ color: '#C8BAAA' }}>Compromiso Sostenible</div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#291509' }}>
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
              ¿Lista para Descubrir tu Estilo Auténtico?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
              No se trata de cambiar quién eres, sino de revelar la versión más auténtica 
              y poderosa de ti misma. Comencemos este viaje juntas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contactame')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Trabajemos Juntas
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.location.href = '/servicios'}
              >
                Conoce mis Servicios
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};