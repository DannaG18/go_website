import { Play, Clock, Tag, Instagram, Youtube, Video, BookOpen, Leaf, ShoppingBag, Users } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { VLOG_VIDEOS } from '../../utils/constants';
import { AnimatedPage } from '../common/AnimationPage';

export const Vlog: React.FC = () => {
  const contentTypes = [
    {
      icon: Leaf,
      title: 'Moda Sostenible',
      description: 'Recopilado de posts sobre marcas conscientes, materiales eco-friendly y consumo responsable.',
      color: '#565021'
    },
    {
      icon: Users,
      title: 'Marcas Locales',
      description: 'Spotlight a diseñadores y marcas mexicanas que están transformando la industria.',
      color: '#4D1A09'
    },
    {
      icon: ShoppingBag,
      title: 'Guías de Básicos',
      description: 'Guías completas de compra para construir un armario funcional y atemporal.',
      color: '#8B8D79'
    },
    {
      icon: BookOpen,
      title: 'Educación de Estilo',
      description: 'Tips, consejos y metodologías para desarrollar tu propio lenguaje visual.',
      color: '#1C2218'
    }
  ];

  const platforms = [
    {
      icon: Instagram,
      name: 'Instagram Reels',
      description: 'Contenido dinámico y visual adaptado para el feed de Instagram',
      format: 'Vertical 9:16',
      duration: '15-60 segundos'
    },
    {
      icon: Video,
      name: 'TikTok',
      description: 'Versiones creativas y trending del contenido principal',
      format: 'Vertical 9:16',
      duration: '15-180 segundos'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      description: 'Contenido extenso y detallado con análisis profundo',
      format: 'Horizontal 16:9',
      duration: '8-20 minutos'
    }
  ];

  return (
    <AnimatedPage>
      <Section id="vlog" className="py-24">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#EDDCC3' }}
        />

        {/* Vintage paper texture */}
        <div className="absolute inset-0 vintage-texture-paper opacity-30" />

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#291509' }}>
              Vlog
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#8B8D79' }} />
            <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-80 mb-12" style={{ color: '#524354' }}>
              Un ecosistema de contenido multiplataforma donde comparto mi visión sobre moda consciente,
              marcas locales y guías prácticas para construir un estilo auténtico y sostenible.
            </p>
          </div>

          {/* Content Strategy Overview */}
          <div className="mb-20">
            <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#565021' }}>
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#EDDCC3' }}>
                Estrategia de Contenido Integral
              </h3>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="p-6 vintage-border" style={{ backgroundColor: '#8B8D79' }}>
                    <h4 className="text-xl font-semibold mb-4" style={{ color: '#EDDCC3' }}>
                      Contenido Principal
                    </h4>
                    <p className="text-base leading-relaxed opacity-90" style={{ color: '#EDDCC3' }}>
                      Cada post del vlog se convierte en un ecosistema completo de contenido,
                      adaptado estratégicamente para cada plataforma digital.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm" style={{ color: '#EDDCC3' }}>
                      <div className="w-3 h-3 mr-4" style={{ backgroundColor: '#CBB186' }} />
                      <span>Un post = Múltiples formatos</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: '#EDDCC3' }}>
                      <div className="w-3 h-3 mr-4" style={{ backgroundColor: '#CBB186' }} />
                      <span>Contenido adaptado por plataforma</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: '#EDDCC3' }}>
                      <div className="w-3 h-3 mr-4" style={{ backgroundColor: '#CBB186' }} />
                      <span>Máximo alcance y engagement</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((platform, index) => (
                    <Card
                      key={index}
                      hover
                      className="p-4 text-center group transform transition-all duration-500 hover:scale-105"
                      style={{ backgroundColor: '#EDDCC3' }}
                    >
                      <platform.icon
                        className="w-8 h-8 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: '#4D1A09' }}
                      />
                      <h5 className="text-sm font-semibold mb-2" style={{ color: '#291509' }}>
                        {platform.name}
                      </h5>
                      <p className="text-xs opacity-70 mb-2" style={{ color: '#524354' }}>
                        {platform.format}
                      </p>
                      <p className="text-xs opacity-60" style={{ color: '#524354' }}>
                        {platform.duration}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Content Categories */}
          <div className="mb-20">
            <h3 className="text-3xl font-light text-center mb-12" style={{ color: '#291509' }}>
              Categorías de Contenido
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
                <Card
                  key={index}
                  hover
                  className="p-8 text-center group transform transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#C8BAAA' }}
                >
                  <type.icon
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: type.color }}
                  />
                  <h4 className="text-xl font-semibold mb-4" style={{ color: '#291509' }}>
                    {type.title}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: '#524354' }}>
                    {type.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Videos */}
          <div className="mb-16">
            <h3 className="text-3xl font-light text-center mb-12" style={{ color: '#291509' }}>
              Contenido Destacado
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VLOG_VIDEOS.map((video, index) => (
                <Card
                  key={video.id}
                  hover
                  className="group overflow-hidden transform transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#C8BAAA' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white bg-opacity-90 flex items-center justify-center">
                        <Play className="w-6 h-6 ml-1" style={{ color: '#565021' }} />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-black bg-opacity-60 text-xs text-white flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-medium px-3 py-1 flex items-center"
                        style={{
                          backgroundColor: '#8B8D79',
                          color: '#EDDCC3'
                        }}
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {video.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-medium mb-3 leading-tight" style={{ color: '#291509' }}>
                      {video.title}
                    </h4>

                    <p className="text-sm leading-relaxed opacity-70" style={{ color: '#524354' }}>
                      {video.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                Sígueme en todas las plataformas
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" style={{ color: '#C8BAAA' }}>
                No te pierdas ningún contenido. Cada plataforma ofrece una perspectiva única
                del mismo mensaje: moda consciente, estilo auténtico y consumo responsable.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://instagram.com/sgabrielaortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 vintage-shadow"
                  style={{
                    backgroundColor: '#CBB186',
                    color: '#291509'
                  }}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>

                <a
                  href="https://youtube.com/@gabrielaortiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 vintage-shadow"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#EDDCC3',
                    border: '2px solid #CBB186'
                  }}
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </AnimatedPage>
  );
};