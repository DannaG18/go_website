import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-95"
        style={{
          background: `linear-gradient(135deg, #EDDCC3 0%, #CBBEBA 50%, #CBB186 100%)`,
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #524334 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-ocre opacity-60" style={{ color: '#524334' }} />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-5 leading-tight">
              {/* <span style={{ color: '#291509' }}>Gabriela </span> */}
              {/* <br /> */} 
              {/* <span style={{ color: '#524334' }}>Ortiz</span> */}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-80" style={{ color: '#524334' }}>
              Diseñadora de Modas & Consultora de Imagen
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-70" style={{ color: '#291509' }}>
              Transformando visiones en realidad a través del diseño consciente, 
              la elegancia atemporal y la autenticidad personal. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" onClick={scrollToAbout}>
              Conoce mi trabajo
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Hablemos
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={scrollToAbout} className="p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity">
              <ChevronDown className="w-6 h-6" style={{ color: '#524334' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};