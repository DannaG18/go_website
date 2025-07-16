import { Leaf, Heart, Star, Award } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';

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
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#291509' }}>
            Sobre Mí
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#8B8D79' }} />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Filosofía Principal */}
            <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="text-center mb-8">
                <Leaf className="w-12 h-12 mx-auto mb-4" style={{ color: '#565021' }} />
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#291509' }}>
                  Mi Filosofía
                </h3>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#524354' }}>
                <p className="text-xl mb-6 font-medium">
                  Creo en el poder de la moda como herramienta de cambio. Cada elección que hacemos —desde las prendas que vestimos hasta las marcas que apoyamos— es una oportunidad para honrar a la naturaleza y construir un futuro más consciente.
                </p>
                
                <p className="text-lg mb-6">
                  Somos la generación que aún puede revertir el daño causado por la compra de moda masiva, y asumo ese compromiso con responsabilidad y esperanza.
                </p>
                
                <div className="p-6 vintage-border" style={{ backgroundColor: '#565021' }}>
                  <p className="text-lg font-medium text-center" style={{ color: '#EDDCC3' }}>
                    Por eso, mi trabajo como consultora une dos pasiones: el lujo silencioso, aquel que habla a través de la calidad, la atemporalidad y el respeto y la sostenibilidad real en acciones reales, colaboraciones éticas y educación consciente.
                  </p>
                </div>
              </div>
            </Card>

            {/* Dos Pasiones */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
                <div className="text-center mb-6">
                  <Star className="w-10 h-10 mx-auto mb-4" style={{ color: '#EDDCC3' }} />
                  <h4 className="text-xl font-bold" style={{ color: '#EDDCC3' }}>
                    Lujo Silencioso
                  </h4>
                </div>
                <ul className="space-y-3 text-sm" style={{ color: '#C8BAAA' }}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Calidad excepcional
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Atemporalidad elegante
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Respeto por el proceso
                  </li>
                </ul>
              </Card>

              <Card className="p-6 vintage-shadow" style={{ backgroundColor: '#565021' }}>
                <div className="text-center mb-6">
                  <Leaf className="w-10 h-10 mx-auto mb-4" style={{ color: '#CBB186' }} />
                  <h4 className="text-xl font-bold" style={{ color: '#EDDCC3' }}>
                    Sostenibilidad Real
                  </h4>
                </div>
                <ul className="space-y-3 text-sm" style={{ color: '#C8BAAA' }}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Acciones reales
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Colaboraciones éticas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Educación consciente
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="space-y-8">
            {/* Main Portrait */}
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img 
                  src="./public/promesa.png" 
                  alt="Gabriela Ortiz - Consultora de Imagen" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    Gabriela Ortiz
                  </h4>
                  <p className="text-sm opacity-90" style={{ color: '#C8BAAA' }}>
                    Diseñadora de Modas & Consultora de Imagen
                  </p>
                </div>
              </div>
            </Card>

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
                <img 
                  src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Proceso creativo de Gabriela" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-xs text-center" style={{ color: '#EDDCC3' }}>
                    Proceso Creativo
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#565021' }}>
                <img 
                  src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Materiales sostenibles" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-xs text-center" style={{ color: '#EDDCC3' }}>
                    Materiales Conscientes
                  </p>
                </div>
              </Card>
            </div>

            {/* Behind the Scenes */}
            <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#4D1A09' }}>
              <img 
                src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Gabriela trabajando en consultoría" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-sm font-semibold mb-2" style={{ color: '#EDDCC3' }}>
                  En Acción
                </h5>
                <p className="text-xs opacity-90" style={{ color: '#CBB186' }}>
                  Trabajando en consultoría personalizada con enfoque sostenible
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Credenciales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#8B8D79' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#EDDCC3' }}>300+</div>
            <div className="text-sm" style={{ color: '#C8BAAA' }}>Clientes Transformados</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#EDDCC3' }}>10+</div>
            <div className="text-sm" style={{ color: '#C8BAAA' }}>Años de Experiencia</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#4D1A09' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#EDDCC3' }}>100%</div>
            <div className="text-sm" style={{ color: '#C8BAAA' }}>Satisfacción</div>
          </Card>
          <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#EDDCC3' }}>♻️</div>
            <div className="text-sm" style={{ color: '#C8BAAA' }}>Compromiso Sostenible</div>
          </Card>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#C8BAAA' }}>
            <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: '#4D1A09' }} />
            <h5 className="font-semibold mb-2" style={{ color: '#291509' }}>Autenticidad</h5>
            <p className="text-sm opacity-80" style={{ color: '#524354' }}>Cada diseño refleja tu verdadera esencia</p>
          </Card>
          
          <Card className="p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#8B8D79' }}>
            <Leaf className="w-8 h-8 mx-auto mb-3" style={{ color: '#EDDCC3' }} />
            <h5 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Sostenibilidad</h5>
            <p className="text-sm opacity-90" style={{ color: '#C8BAAA' }}>Compromiso con materiales conscientes</p>
          </Card>
          
          <Card className="p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#565021' }}>
            <Star className="w-8 h-8 mx-auto mb-3" style={{ color: '#CBB186' }} />
            <h5 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Atemporalidad</h5>
            <p className="text-sm opacity-90" style={{ color: '#C8BAAA' }}>Creaciones que trascienden modas</p>
          </Card>
          
          <Card className="p-6 text-center vintage-shadow hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#4D1A09' }}>
            <Award className="w-8 h-8 mx-auto mb-3" style={{ color: '#CBB186' }} />
            <h5 className="font-semibold mb-2" style={{ color: '#EDDCC3' }}>Empoderamiento</h5>
            <p className="text-sm opacity-90" style={{ color: '#C8BAAA' }}>El estilo como herramienta de autoconfianza</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};