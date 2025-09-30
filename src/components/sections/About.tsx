import { Leaf, Heart, Sparkles, Users, Quote, ArrowRight, Phone } from 'lucide-react';
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
        </div>

        {/* Opening Statement */}
        <div className="mb-20">
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
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left - Personal Photo */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img 
                  src="/photo3.jpeg" 
                  alt="Gabriela Ortiz - Diseñadora de Modas" 
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    Gabriela Ortiz
                  </h3>
                  <p className="text-base opacity-90" style={{ color: '#C8BAAA' }}>
                    Consultora de Imagen Consciente
                  </p>
                  <p className="text-sm mt-2 opacity-80" style={{ color: '#C8BAAA' }}>
                    Cúcuta, Colombia
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Personal Journey */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Beginning */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#EDDCC3', border: '1px solid #C8BAAA' }}>
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#291509' }}>
                El Comienzo
              </h4>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#524354' }}>
                <p>
                  Durante toda mi vida el mundo para mí era una pasarela de moda y su consumo. 
                  Soñé con vivir de ello. Y por un tiempo lo logré.
                </p>
                <p>
                  Me gradué, creé colecciones y seguí tendencias. Por fuera estaba viviendo el sueño. 
                  Pero por dentro, una inquietud crecía.
                </p>
                <p className="font-medium" style={{ color: '#291509' }}>
                  Pese a que construí todo lo que me habían enseñado a construir, 
                  una pieza esencial no encajaba.
                </p>
              </div>
            </Card>

            {/* The Conflict */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#EDDCC3' }}>
                El Conflicto Interno
              </h4>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#C8BAAA' }}>
                <p>
                  La industria me decía <em>"fabrica, consume, desecha"</em>.
                </p>
                <p>
                  Pero dentro de mí estaba el pensamiento: <strong>"¿a qué costo?"</strong>
                </p>
              </div>
            </Card>

            {/* The Awakening */}
            <Card className="p-8 vintage-shadow" style={{ backgroundColor: '#4D1A09' }}>
              <h4 className="text-xl font-serif font-bold mb-4" style={{ color: '#EDDCC3' }}>
                El Despertar - 2020
              </h4>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#CBB186' }}>
                <p>
                  Mi momento llegó en el 2020, cuando me certifiqué en la investigación de fibras textiles 
                  y me encontré con un increíble reportaje sobre nuestros basureros de desecho textil 
                  que crecen día a día, con prendas que tardaron siglos en degradarse pero que solo se usaron una vez.
                </p>
                <p className="font-medium text-lg" style={{ color: '#EDDCC3' }}>
                  Ese fue el instante en el que mi pasión por la moda chocó de frente con mi humanidad. 
                  Había llegado la hora de cambiar el enfoque.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* The Transformation */}
        <div className="mb-20">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
                La Transformación - 2022
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#CBB186' }}>
                <p>
                  Mi vena creativa, esa que me acompañaba desde niña no quería crear más ropa. 
                  <strong className="text-xl" style={{ color: '#EDDCC3' }}> Quería crear conciencia.</strong>
                </p>
                <p>
                  En 2022, renuncié al manual convencional. Me volqué a la investigación y descubrí que 
                  el verdadero lujo no es la etiqueta nueva; <strong>es el conocimiento.</strong>
                </p>
              </div>
              
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Investigación de materiales sostenibles" 
                  className="w-full h-48 object-cover vintage-shadow"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* The Knowledge */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: '#291509' }}>
            El Verdadero Conocimiento
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "El conocimiento de abrir tu armario y amarlo por completo.",
              "El conocimiento de saber que tu estilo es auténtico, no prestado de una tendencia fugaz.",
              "El conocimiento de vestirte con piezas de calidad que cuentan una historia, no un arrepentimiento.",
              "El conocimiento de que tu imagen proyecte no solo tu buen gusto, sino tu inteligencia y tu respeto por el mundo."
            ].map((knowledge, index) => (
              <Card 
                key={index}
                hover 
                className="p-6 text-center group transform transition-all duration-500 hover:scale-105 vintage-shadow"
                style={{ backgroundColor: '#C8BAAA' }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: '#565021' }}
                >
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#524354' }}>
                  {knowledge}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="p-12 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
              Mi Compromiso Contigo
            </h3>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#C8BAAA' }}>
              <p>
                <strong style={{ color: '#EDDCC3' }}>Mi servicio no es sólo un servicio de consultoría.</strong> 
                Te brindo toda la información que en unos años, practicarla no será opción, sino obligación.
              </p>
              <p className="text-xl font-medium italic" style={{ color: '#CBB186' }}>
                "Porque este mundo hoy, es para quienes lo respetamos y creemos en él."
              </p>
              <p className="text-2xl font-bold" style={{ color: '#EDDCC3' }}>
                Tu clóset tiene el poder de vestirte.<br />
                Pero tu mente tiene el poder de elevar tu conciencia.
              </p>
            </div>
          </Card>
        </div>

        {/* How We Work Together */}
        <div className="mb-16">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
            <h3 className="text-4xl font-serif font-bold text-center mb-8" style={{ color: '#291509' }}>
              ¡CÓMO TRABAJAR JUNTOS!
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed mb-10" style={{ color: '#524354' }}>
              <p>
                <strong>¿Identificas ese susurro incómodo cada vez que abres tu clóset saturado?</strong>
              </p>
              <p>
                <strong>¿Sientes la urgencia de alinear tu imagen con tus valores?</strong>
              </p>
              <p>
                Mi método: <strong style={{ color: '#291509' }}>El algoritmo de tu clóset</strong> es un camino donde 
                desciframos tu estilo y lo llenamos con las mejores piezas, aquellas que elegirás no por un impulso, 
                sino con el poder de quien conoce el impacto real de cada etiqueta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/algoritmo-closet'}
                className="text-lg px-10 py-6"
              >
                El Algoritmo de tu Clóset
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={Phone}
                onClick={() => window.open('https://wa.me/573204033404', '_blank')}
                className="text-lg px-10 py-6"
              >
                Agenda una Llamada Sin Costo
              </Button>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#291509' }}>
            <h3 className="text-3xl font-serif font-bold mb-6" style={{ color: '#EDDCC3' }}>
              Descubre el Poder de tu Clóset Consciente
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#CBB186' }}>
              No se trata de tener más ropa. Se trata de tener la ropa correcta. 
              Comencemos este viaje hacia un estilo auténtico y consciente.
            </p>
            
            <Button 
              size="lg"
              onClick={() => window.location.href = '/algoritmo-closet'}
              className="text-xl px-12 py-6"
            >
              Comenzar Mi Transformación
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  );
};