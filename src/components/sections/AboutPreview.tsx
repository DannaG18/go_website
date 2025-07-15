import { Leaf, Heart, Sparkles, Users } from 'lucide-react';
import { Button } from '../common/Button';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight text-custom-brown">
                Sobre Mí
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed text-custom-brown">
                Creo en el poder de la moda como herramienta de cambio. Cada elección que hacemos 
                es una oportunidad para honrar a la naturaleza y construir un futuro más consciente.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-sage-600" />
                <span className="text-sm font-medium text-custom-brown">Sostenibilidad</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm">
                <Heart className="w-6 h-6 text-terracotta-600" />
                <span className="text-sm font-medium text-custom-brown">Autenticidad</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-gold-600" />
                <span className="text-sm font-medium text-custom-brown">Atemporalidad</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm">
                <Users className="w-6 h-6 text-sage-600" />
                <span className="text-sm font-medium text-custom-brown">Empoderamiento</span>
              </div>
            </div>

            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/sobre-mi'}
            >
              Conoce Mi Historia
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 to-cream-200 overflow-hidden shadow-xl">
              <img
                src="public/about-me-preview.png"
                alt="Gabriela Ortiz - Consultora de Imagen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-200 opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};