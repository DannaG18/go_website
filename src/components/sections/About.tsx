import { Leaf, Heart, Star, Award } from 'lucide-react';
import { Section } from '../common/Section';
import { AnimatedPage } from '../common/AnimationPage';

export const About: React.FC = () => {
  return (
    <AnimatedPage>
      <Section id="sobre-mi" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#ECDBC1' }}
        />
        <div className='absolute inset-0 vintage-texture-paper opacity-30' />
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#291509' }}>
              Sobre mí
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r mx-auto mb-8" style={{ backgroundColor: '#8B8D79' }}></div>
          </div>

          {/* Filosofía Principal */}
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl mb-12 border border-amber-100">
            <div className="text-center mb-8">
              <Leaf className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="font-['Old_Standard_TT'] text-3xl font-bold text-amber-900 mb-6">
                Mi Filosofía
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-amber-800 leading-relaxed">
              <p className="text-xl mb-6 font-medium">
                Creo en el poder de la moda como herramienta de cambio. Cada elección que hacemos —desde las prendas que vestimos hasta las marcas que apoyamos— es una oportunidad para honrar a la naturaleza y construir un futuro más consciente.
              </p>

              <p className="text-lg mb-6">
                Somos la generación que aún puede revertir el daño causado por la compra de moda masiva, y asumo ese compromiso con responsabilidad y esperanza.
              </p>

              <div className="p-6 my-8" style={{ backgroundColor: '#4D1A09' }}>
                <p className="text-lg font-medium text-white">
                  Por eso, mi trabajo como consultora une dos pasiones: el lujo silencioso, aquel que habla a través de la calidad, la atemporalidad y el respeto y la sostenibilidad real en acciones reales, colaboraciones éticas y educación consciente.
                </p>
              </div>
            </div>
          </div>

          {/* Dos Pasiones */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Star className="w-10 h-10 text-amber-700 mx-auto mb-4" />
                <h4 className="font-['Old_Standard_TT'] text-2xl font-bold text-amber-900">
                  Lujo Silencioso
                </h4>
              </div>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 mr-3"></div>
                  Calidad excepcional
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 mr-3"></div>
                  Atemporalidad elegante
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 mr-3"></div>
                  Respeto por el proceso
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Leaf className="w-10 h-10 text-green-700 mx-auto mb-4" />
                <h4 className="font-['Old_Standard_TT'] text-2xl font-bold text-amber-900">
                  Sostenibilidad Real
                </h4>
              </div>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 mr-3"></div>
                  Acciones reales
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 mr-3"></div>
                  Colaboraciones éticas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 mr-3"></div>
                  Educación consciente
                </li>
              </ul>
            </div>
          </div>

          {/* Credenciales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-900 mb-2">300+</div>
              <div className="text-sm text-amber-700">Clientes Transformados</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-900 mb-2">10+</div>
              <div className="text-sm text-amber-700">Años de Experiencia</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-900 mb-2">100%</div>
              <div className="text-sm text-amber-700">Satisfacción</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-900 mb-2">♻️</div>
              <div className="text-sm text-amber-700">Compromiso Sostenible</div>
            </div>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h5 className="font-semibold text-amber-900 mb-2">Autenticidad</h5>
              <p className="text-sm text-amber-700">Cada diseño refleja tu verdadera esencia</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h5 className="font-semibold text-amber-900 mb-2">Sostenibilidad</h5>
              <p className="text-sm text-amber-700">Compromiso con materiales conscientes</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Star className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h5 className="font-semibold text-amber-900 mb-2">Atemporalidad</h5>
              <p className="text-sm text-amber-700">Creaciones que trascienden modas</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h5 className="font-semibold text-amber-900 mb-2">Empoderamiento</h5>
              <p className="text-sm text-amber-700">El estilo como herramienta de autoconfianza</p>
            </div>
          </div>
        </div>
      </Section>
    </AnimatedPage>

  );
};
