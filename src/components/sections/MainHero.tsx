import { ArrowDown } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

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
        id='inicio'
        className="absolute inset-0"
        style={{ backgroundColor: '#84685a72' }}
      />

      {/* Textura de madera natural */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="/textures/textura2.jpg"
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
              <div className="w-34 h-1 mb-8 rounded-sm" style={{ backgroundColor: '#d5d3bfff' }} />
              <p className="text-xl md:text-2xl font-light- mb-12 opacity-90" style={{ color: '#291509' }}>
                Imagen e Identidad Digital
              </p>


            </div>

            {/* Frase con estilo vintage */}
            {/* <div className="p-8 vintage-border vintage-shadow" style={{ backgroundColor: '#1C2218' }}> */}
            <p className="text-lg md:text-xl font-semibold italic mb-6 leading-relaxed" style={{ color: '#291509' }}>
              "El lujo no es tener más, sino encontrar lo que realmente te pertenece. Te ayudo a construir una imagen coherente, sofisticada y consciente, donde cada prenda cuenta tu historia. ¿Mi misión? Ser tu guía en este viaje."
            </p>
            {/* <p className="text-lg md:text-xl font-bold  mb-6 leading-tight" style={{ color: '#324d0cff' }}>
              Mi misión? Ser tu guía en este viaje
            </p> */}


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
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToContact}
              >
                Trabajemos juntos
              </Button>
              <Button size="lg" variant='tertiary' onClick={scrollToServices}>
                Descubre mi trabajo
              </Button>
            </div>
          </div>

          {/* Lado derecho - Foto con marco vintage */}
          <div className="relative">
          {/* Left - Personal Photo */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden shadow-2xl" style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img
                  src="/gaby/photo6.jpeg"
                  alt="Gabriela Ortiz - Diseñadora de Modas"
                  className="w-full h-[720px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  {/* <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#EDDCC3' }}>
                    Gabriela Ortiz
                  </h3>
                  <p className="text-base opacity-90" style={{ color: '#C8BAAA' }}>
                    Diseñadora de modas 
                  </p> */}
                  {/* <a
                    href="https://www.google.com/maps/place/Colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-base italic mt-2 opacity-80" style={{ color: '#C8BAAA' }}>
                      Servicio Internacional desde Colombia
                    </p>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

            {/* Elementos decorativos vintage */}
            {/* <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20 animate-vintage-float vintage-border" style={{ backgroundColor: '#8B8D79', animationDelay: '1s' }} /> */}
            {/* <div className="absolute -bottom-8 -left-8 w-40 h-40 opacity-15 animate-vintage-float vintage-border" style={{ backgroundColor: '#CBB186', animationDelay: '3s' }} /> */}
            {/* <div className="absolute top-1/2 -left-4 w-8 h-8 opacity-30 vintage-border" style={{ backgroundColor: '#565021' }} /> */}
            {/* <div className="absolute bottom-1/4 -right-6 w-12 h-12 opacity-25 vintage-border" style={{ backgroundColor: '#524354' }} /> */}
          </div>
        </div>

        {/* Indicador de scroll vintage */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToPromise}
            className="p-4 opacity-50 hover:opacity-80 transition-all duration-300 vintage-shadow vintage-border"
            style={{ backgroundColor: 'rgba(251, 255, 211, 0.64)' }}
          >
            <ArrowDown className="w-6 h-6" style={{ color: '#403902ff' }} />
          </button>
        </div> */}
      </div>
    </section>
  );
};