import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const PurchasePromise: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="promesa-compra" className="py-32 relative overflow-hidden">
      {/* Background con Piel Suave */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#EDDCC3' }}
      />
      
      {/* Textura de madera natural */}
      {/* <div className="absolute inset-0 opacity-15">
        <img 
          src="public/textura2.jpg" 
          alt="Textura natural de algodón" 
          className="w-full h-full object-cover"
        />
      </div> */}
      
      <div className="container relative z-10">
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contenido de texto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight" style={{ color: '#291509' }}>
                Mi Promesa
              </h2>
              <div className="w-64 h-0.5 mb-8" style={{ backgroundColor: '#565021' }} />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#291509' }}>
              <p>
                No se trata de seguir tendencias, sino de crear un lenguaje visual único 
                que hable por ti antes de que digas una palabra.
              </p>
              <p>
                Trabajo contigo para desarrollar un estilo auténtico que refleje tu esencia, 
                valores y aspiraciones. Cada pieza, cada elección, cada detalle está pensado 
                para potenciar tu presencia y confianza.
              </p>
              <p>
                Mi compromiso es transformar tu relación con la moda, creando un guardarropa 
                consciente que te acompañe en cada etapa de tu crecimiento personal y profesional.
              </p>
            </div>

            {/* Valores con estilo orgánico */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { title: 'Autenticidad', desc: 'Tu esencia única como punto de partida' },
                { title: 'Sostenibilidad', desc: 'Decisiones conscientes y duraderas' },
                { title: 'Elegancia', desc: 'Sofisticación natural y atemporal' },
                { title: 'Propósito', desc: 'Cada elección con intención y significado' }
              ].map((value, index) => (
                <div key={index} className="space-y-2 p-4" style={{ backgroundColor: '#4D1A09' }}>
                  <h3 className="text-lg font-medium" style={{ color: '#EEDEC4' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm opacity-80" style={{ color: '#EEDEC4' }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen con marco orgánico */}
          <div className="relative">
            <div className="relative overflow-hidden organic-shadow-lg">
              <img 
                src="public/promesa.png" 
                alt="Proceso creativo y materiales naturales" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>
            
            {/* Elementos decorativos orgánicos */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-30 animate-float" style={{ backgroundColor: '#8B8D79' }} />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 animate-float" style={{ backgroundColor: '#CBB186', animationDelay: '2s' }} />
            <div className="absolute top-1/3 -right-4 w-6 h-6 opacity-40" style={{ backgroundColor: '#565021' }} />
          </div>
        </div>
      </div>
    </section>
  );
};