import { Leaf, Heart, Sparkles, Users, Quote, ArrowRight, Phone } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const About: React.FC = () => {
  return (
    <Section id="sobre-mi" className="py-24 relative w-full overflow-x-hidden">
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
        </div>

        {/* Opening Statement */}
        <div className="mb-24">
          <Card className="p-12 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <Quote className="w-16 h-16 mx-auto mb-8" style={{ color: '#CBB186' }} />
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight" style={{ color: '#EDDCC3' }}>
              No elegí la moda.<br />
              La moda me eligió para salvarnos de ella misma.
            </h3>
            <p className="text-xl font-light italic opacity-90" style={{ color: '#C8BAAA' }}>
              Esta es mi historia.
            </p>
          </Card>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          {/* Left - Personal Photo */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img
                  src="/photo3.jpeg"
                  alt="Gabriela Ortiz - Diseñadora de Modas"
                  className="w-full h-[556px] object-cover"
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
            </Card>
          </div>

          {/* Right - Personal Journey */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Beginning */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#EDDCC3', border: '1px solid #C8BAAA' }}>
              <h4 className="text-2xl font-serif font-bold mb-6" style={{ color: '#291509' }}>
                El Comienzo
              </h4>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#524354' }}>
                <p>
                  Durante toda mi vida el mundo para mí era una pasarela de moda y su consumo.
                  Soñé con vivir de ello. Y por un tiempo lo logré.
                </p>
                <p>
                  Me gradué, creé colecciones y seguí tendencias. Por fuera estaba viviendo el sueño.
                  Pero por dentro, una inquietud crecía.
                </p>
                <p className="text-xl font-medium" style={{ color: '#291509' }}>
                  Pese a que construí todo lo que me habían enseñado a construir,
                  una pieza esencial no encajaba.
                </p>
              </div>
            </Card>

            {/* The Conflict */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
              <h4 className="text-2xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
                El Conflicto Interno
              </h4>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#f0decaff' }}>
                <p>
                  La industria me decía <em className="text-xl">"fabrica, consume, desecha"</em>.
                </p>
                <p>
                  Pero dentro de mí estaba el pensamiento: <strong className="text-xl" style={{ color: '#EDDCC3' }}>"¿a qué costo?"</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* The Awakening - Full Width */}
        <div className="mb-24">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#4D1A09' }}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-8" style={{ color: '#EDDCC3' }}>
                El Despertar - 2020
              </h3>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#e1ceb0ff' }}>
                  <p>
                    Mi momento llegó en el 2020, cuando me certifiqué en la investigación de fibras textiles
                    y me encontré con un increíble reportaje sobre nuestros basureros de desecho textil
                    que crecen día a día, con prendas que tardaron siglos en degradarse pero que solo se usaron una vez.
                  </p>
                  <p className="text-xl font-bold" style={{ color: '#EDDCC3' }}>
                    Ese fue el instante en el que mi pasión por la moda chocó de frente con mi humanidad.
                    Había llegado la hora de cambiar el enfoque.
                  </p>
                </div>

                <div className="space-y-4">
                  <img
                    src="/photo7.jpeg"
                    alt="Investigación de materiales sostenibles"
                    className="w-full h-80 object-cover vintage-shadow rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* The Transformation - 2022 */}
        <div className="mb-24">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
                La Transformación - 2022
              </h3>
              <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#CBB186' }} />
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-xl leading-relaxed text-center" style={{ color: '#e1ceb0ff' }}>
              <p>
                Mi vena creativa, esa que me acompañaba desde niña no quería crear más ropa.
                <strong className="text-2xl block mt-4" style={{ color: '#EDDCC3' }}>
                  Quería crear conciencia.
                </strong>
              </p>
              <p>
                En 2022, renuncié al manual convencional. Me volqué a la investigación y descubrí que
                el verdadero lujo no es la etiqueta nueva; <strong className="text-xl" style={{ color: '#EDDCC3' }}>es el conocimiento.</strong>
              </p>
            </div>
          </Card>
        </div>

        {/* The Knowledge - 4 Pillars */}
        <div className="mb-24">
          <h3 className="text-4xl font-serif font-bold text-center mb-16" style={{ color: '#291509' }}>
            El Verdadero Conocimiento
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "El conocimiento de abrir tu armario y amarlo por completo.",
              "El conocimiento de saber que tu estilo es auténtico, no prestado de una tendencia fugaz.",
              "El conocimiento de vestirte con piezas de calidad que cuentan una historia, no un arrepentimiento.",
              "El conocimiento de que tu imagen proyecte no solo tu buen gusto, sino tu inteligencia y tu respeto por el mundo."
            ].map((knowledge, index) => (
              <Card
                key={index}
                hover
                className="p-8 group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: '#C8BAAA' }}
              >
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 mt-1 flex-shrink-0"
                    style={{ backgroundColor: '#565021' }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#524354' }}>
                    {knowledge}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-24">
          <Card className="p-12 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: '#EDDCC3' }}>
                Mi Compromiso Contigo
              </h3>

              <p className="text-xl leading-relaxed" style={{ color: '#C8BAAA' }}>
                <strong style={{ color: '#EDDCC3' }}>Mi servicio no es sólo un servicio de consultoría.</strong>
                Te brindo toda la información que en unos años, practicarla no será opción, sino obligación.
              </p>

              <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(237, 220, 195, 0.1)' }}>
                <p className="text-xl italic mb-4" style={{ color: '#CBB186' }}>
                  "Porque este mundo hoy, es para quienes lo respetamos y creemos en él."
                </p>
                <p className="text-2xl font-bold" style={{ color: '#EDDCC3' }}>
                  Tu clóset tiene el poder de vestirte.<br />
                  Pero tu mente tiene el poder de elevar tu conciencia.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* How We Work Together */}
        <div className="mb-16">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold mb-6" style={{ color: '#291509' }}>
                ¡CÓMO TRABAJAR JUNTOS!
              </h3>
              <div className="w-20 h-0.5 mx-auto" style={{ backgroundColor: '#8B8D79' }} />
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#524354' }}>
                <p className="font-bold text-2xl" style={{ color: '#291509' }}>
                  ¿Identificas ese susurro incómodo cada vez que abres tu clóset saturado?
                </p>
                <p className="font-bold text-2xl" style={{ color: '#291509' }}>
                  ¿Sientes la urgencia de alinear tu imagen con tus valores?
                </p>
              </div>

              <div className="p-8 rounded-lg" style={{ backgroundColor: '#C8BAAA' }}>
                <p className="text-lg leading-relaxed" style={{ color: '#524354' }}>
                  Mi método: <strong style={{ color: '#291509' }}>El algoritmo de tu clóset</strong> es un camino donde
                  desciframos tu estilo y lo llenamos con las mejores piezas, aquellas que elegirás no por un impulso,
                  sino con el poder de quien conoce el impacto real de cada etiqueta.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  onClick={() => window.location.href = '/algoritmo-closet'}
                  className="text-xl px-12 py-6"
                >
                  El Algoritmo de tu Clóset
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={Phone}
                  onClick={() => window.open('https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20o%20empresa%20aquí)%20y%20quiero%20agendar%20una%20llamada.', '_blank')}
                  className="text-xl px-12 py-6"
                >
                  Agenda una Llamada Sin Costo
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#291509' }}>
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
              Descubre el Poder de tu Clóset Consciente
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#e2d0b2ff' }}>
              No se trata de tener más ropa. Se trata de tener la ropa correcta.
              Comencemos este viaje hacia un estilo auténtico y consciente.
            </p>

            <Button
              variant="tertiary"
              size="lg"
              onClick={() => window.open('https://wa.me/573204033404?text=Hola,%20soy%20(pon%20tu%20nombre%20o%20empresa%20aquí)%20y%20quiero%20iniciar%20mi%20transformación.', '_blank')}
              className="text-xl px-12 py-6"
            >
              Comenzar mi Transformación
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  );
};