import { ArrowDown } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const MainHero: React.FC = () => {
  const scrollToPromise = () => {
    const element = document.getElementById('promesa-compra');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios-preview');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto-preview');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-20"
    >
      {/* Fondo base */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#84685a72' }}
      />

      {/* Textura difuminada */}
      <div className="absolute inset-0 bg-[url(/textures/textura2.jpg)] bg-cover bg-center">
        <div
          className="absolute inset-0 backdrop-blur-2xl"
          style={{ backgroundColor: 'rgba(237, 214, 192, 0.65)' }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <div className="space-y-10 text-center">
            <div className="max-w-full md:max-w-md lg:max-w-[610px] lg:text-right mx-auto lg:ml-auto mb-10 lg:mb-24">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-normal leading-tight mt-5">
                <span style={{ color: '#291509' }}>Gabriela Ortiz</span>
              </h1>
              <div
                className="w-3/2 md:w-full h-0.5 my-1 mx-auto lg:mx-0 rounded-sm"
                style={{ backgroundColor: '#ebe5dcff' }}
              />
              <p
                className="text-lg sm:text-xl mt-3 md:text-2xl opacity-90"
                style={{ color: '#291509' }}
              >
                Imagen e Identidad Digital
              </p>
            </div>

            {/* Lista de beneficios */}
            <div className="lg:text-left space-y-4">
              <p className="text-lg md:text-xl font-medium " style={{ color: '#291509' }}>
                SI ESTÁS LISTO PARA:
              </p>
              <ul
                className=" space-y-3 text-sm sm:text-base md:text-lg mx-auto lg:mx-0"
                style={{ color: '#291509' }}
              >
                <li className="flex items-start justify-start">
                  <span
                    className="w-2 h-2 mr-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#ebe5dcff' }}
                  />
                  Un armario que eleve tu esencia.
                </li>
                <li className="flex items-start justify-start">
                  <span
                    className="w-2 h-2 mr-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#ebe5dcff' }}
                  />
                  Una marca que venda por valor, no por descuentos.
                </li>
                <li className="flex items-start justify-start">
                  <span
                    className="w-2 h-2 mr-3 mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#ebe5dcff' }}
                  />
                  Un estilo de vida donde cada elección sume.
                </li>
              </ul>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-5">
              <Button variant="secondary" size="lg" onClick={scrollToContact}>
                Trabajemos juntos
              </Button>
              <Button size="lg" variant="tertiary" onClick={scrollToServices}>
                Descubre mi trabajo
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="overflow-hidden shadow-2xl " style={{ backgroundColor: '#C8BAAA' }}>
              <div className="relative">
                <img
                  src="/gaby/photo14.jpeg"
                  alt="Gabriela Ortiz - Imagen e Identidad Digital"
                  className="w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Flecha de scroll (visible solo en pantallas grandes) */}
        {/* <div className="hidden md:block absolute left-1/2 bottom-10 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToPromise}
            className="p-4 opacity-60 hover:opacity-90 transition-all duration-300 rounded-full shadow-md"
            style={{ backgroundColor: 'rgba(251, 255, 211, 0.64)' }}
          >
            <ArrowDown className="w-6 h-6" style={{ color: '#403902ff' }} />
          </button>
        </div> */}
      </div>
    </section>
  );
};
