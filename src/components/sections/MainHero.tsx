import { ArrowDown } from 'lucide-react';
import { Button } from '../common/Button';

export const MainHero: React.FC = () => {
  const scrollToPromise = () => {
    const element = document.getElementById('promesa-compra');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background con Arena */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#845a5a72' }}
      />

      {/* Textura de madera natural */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="/textura2.jpg"
          alt="Textura natural de algodón"
          className="w-full h-full object-cover"
        />
        {/* <div
    className="absolute inset-0"
    style={{ backgroundColor: 'rgba(210, 170, 124, 0.5)' }} 
  // ></div> */}
      </div>

      {/* Textura vintage de papel */}
      <div className="absolute inset-0 vintage-texture-paper opacity-50" />

      {/* Elementos vintage de fondo */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute top-20 left-10 w-32 h-32 overflow-hidden animate-vintage-float vintage-border">
          <img 
            src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Plantas verdes naturales" 
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* <div className="absolute top-40 right-20 w-48 h-48 overflow-hidden vintage-border">
          <img 
            src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Textura de lino natural" 
            className="w-full h-full object-cover opacity-60"
          />
        </div> */}

        {/* <div className="absolute bottom-32 left-20 w-24 h-24 overflow-hidden vintage-border">
          <img 
            src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=300" 
            alt="Hojas de eucalipto" 
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* <div className="absolute bottom-20 right-32 w-40 h-40 overflow-hidden animate-vintage-float vintage-border" style={{ animationDelay: '2s' }}>
          <img
            src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Plantas verdes sage"
            className="w-full h-full object-cover opacity-70"
          />
        </div> */}
      </div>

      {/* Contenido */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Lado izquierdo - Contenido de texto */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6 mt-6 leading-tight">
                <span style={{ color: '#291509' }}>Gabriela Ortiz</span> {/* #291509 */}
                {/* <br /> */}
                {/* <span style={{ color: '#565021' }}>Ortiz</span> */}
              </h1>
              <div className="w-34 h-0.5 mb-8" style={{ backgroundColor: '#f6fbe3ff' }} />
              <p className="text-xl md:text-2xl font-light- mb-12 opacity-90" style={{ color: '#291509' }}>
                Consultora de Imagen & Marca Personal
              </p>


            </div>

            {/* Frase con estilo vintage */}
            {/* <div className="p-8 vintage-border vintage-shadow" style={{ backgroundColor: '#1C2218' }}> */}
              <p className="text-lg md:text-xl font-bold italic mb-6 leading-relaxed" style={{ color: '#291509' }}>
                "El lujo no es tener más, sino encontrar lo que realmente te pertenece."
              </p>

              <div className="space-y-4">
                <p className="text-lg font-medium" style={{ color: '#FEFAE0' }}>
                  Si estás listo para:
                </p>
                <ul className="space-y-3 text-base" style={{ color: '#FEFAE0' }}>
                  <li className="flex items-start">
                    <span className="w-2 h-2 text-lg mr-4 mt-2 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Un armario que eleve tu esencia.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 text-m mr-4 mt-2 flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Una marca que venda por valor, no por descuentos.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mr-4 mt-2 text-lg flex-shrink-0" style={{ backgroundColor: '#CBB186' }} />
                    Un estilo de vida donde cada elección sume.
                  </li>
                </ul>
              </div>
            {/* </div> */}

            {/* Botones con estilo vintage */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" onClick={scrollToServices}>
                Descubre mi trabajo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToContact}
              >
                Trabajemos juntos
              </Button>
            </div>
          </div>

          {/* Lado derecho - Foto con marco vintage */}
          <div className="relative">
            <div className="relative overflow-hidden vintage-shadow-lg ">
              <img
                // src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                src="/photo6.jpeg"
                alt="Gabriela Ortiz - Consultora de Imagen"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Elementos decorativos vintage */}
            <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20 animate-vintage-float vintage-border" style={{ backgroundColor: '#8B8D79', animationDelay: '1s' }} />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 opacity-15 animate-vintage-float vintage-border" style={{ backgroundColor: '#CBB186', animationDelay: '3s' }} />
            <div className="absolute top-1/2 -left-4 w-8 h-8 opacity-30 vintage-border" style={{ backgroundColor: '#565021' }} />
            <div className="absolute bottom-1/4 -right-6 w-12 h-12 opacity-25 vintage-border" style={{ backgroundColor: '#524354' }} />
          </div>
        </div>

        {/* Indicador de scroll vintage */}
        <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToPromise}
            className="p-4 opacity-50 hover:opacity-80 transition-all duration-300 vintage-shadow vintage-border"
            style={{ backgroundColor: 'rgba(251, 255, 211, 0.64)' }}
          >
            <ArrowDown className="w-6 h-6" style={{ color: '#403902ff' }} />
          </button>
        </div>
      </div>
    </section>
  );
};