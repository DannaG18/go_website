import React from 'react';
import { Play, Clock, Tag, Instagram, Youtube, Video, BookOpen, Leaf, ShoppingBag, Users } from 'lucide-react';
import { Section } from '../common/Section';
import { Card } from '../common/Card';
import { VLOG_VIDEOS } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Blog: React.FC = () => {
  const contentTypes = [
    {
      icon: Leaf,
      title: 'Moda Sostenible',
      description: 'Descubre marcas conscientes, materiales eco-friendly y consumo responsable.',
      color: '#9e9552ff'
    },
    {
      icon: Users,
      title: 'Marcas Locales',
      description: 'Conoce diseñadores y marcas colombianas que están transformando la industria.',
      color: '#EDDCC3'
    },
    {
      icon: ShoppingBag,
      title: 'Guías de Compra',
      description: 'Aprende a construir un armario funcional y atemporal con piezas clave.',
      color: '#EDDCC3'
    },
    {
      icon: BookOpen,
      title: 'Educación de Estilo',
      description: 'Tips, consejos y metodologías para desarrollar tu propio lenguaje visual.',
      color: '#EDDCC3'
    }
  ];

  return (
    <Section id="blog" className="py-24 relative w-full overflow-x-hidden" >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#EDDCC3' }}
      />

      {/* Vintage paper texture */}
      <div className="absolute inset-0 vintage-texture-paper opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#291509' }}>
            Blog
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#8B8D79' }} />
          <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-80 mb-12" style={{ color: '#291509' }}>
            Contenido auténtico sobre moda consciente, estilo personal y vida sostenible.
            Descubre tips prácticos, marcas locales y guías para construir tu estilo único.
          </p>
        </div>

        {/* Content Categories */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12" style={{ color: '#291509' }}>
            ¿Qué encontrarás?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <Card
                key={index}
                hover
                className="p-8 text-center group transform transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: '#4D1A09' }}
              >
                <type.icon
                  className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: type.color }}
                />
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#e7e0dcff' }}>
                  {type.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-80" style={{ color: '#f1e6f3ff' }}>
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Videos */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12" style={{ color: '#291509' }}>
            Videos Destacados
          </h3>

          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={10}  
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 }, // en pantallas medianas: 2 cards
              1024: { slidesPerView: 3 }, // en pantallas grandes: 3 cards
            }}
            className="max-w-8xl mx-auto"
          >
            {VLOG_VIDEOS.map((video) => (
              <SwiperSlide key={video.id}>
                <div className='px-16 mb-10'>
                  <Card
                    hover
                    className="group overflow-hidden transform transition-all duration-500 hover:scale-105"
                    style={{ backgroundColor: "#C8BAAA" }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-100 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play button */}
                      <a href={video.link} target="_blank" rel="">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-20 h-20 bg-white bg-opacity-90 flex items-center justify-center vintage-shadow">
                            <Play className="w-8 h-8 ml-1" style={{ color: "#565021" }} />
                          </div>
                        </div>
                      </a>
                      {/* Duration badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black bg-opacity-70 text-white text-sm flex items-center vintage-shadow">
                        <Clock className="w-4 h-4 mr-2" />
                        {video.duration}
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs font-medium px-3 py-1 flex items-center vintage-shadow"
                          style={{
                            backgroundColor: "#8B8D79",
                            color: "#EDDCC3",
                          }}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {video.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h4
                        className="text-xl font-medium mb-2 leading-tight"
                        style={{ color: "#291509" }}
                      >
                        {video.title}
                      </h4>

                      <p
                        className="text-sm leading-relaxed opacity-70 mb-4"
                        style={{ color: "#524354" }}
                      >
                        {video.description}
                      </p>
                      <a href={video.link} target="_blank" rel="">
                        <button
                          className="text-sm font-medium flex items-center transition-colors duration-300 hover:opacity-80"
                          style={{ color: "#565021" }}
                        >
                          Ver video
                          <Play className="w-4 h-4 ml-2" />
                        </button>
                      </a>
                    </div>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Platforms Section */}
        <div className="mb-16">
          <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#565021' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#EDDCC3' }}>
                Sígueme en todas las plataformas
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto" style={{ color: '#C8BAAA' }}>
                Cada plataforma ofrece contenido único adaptado a su formato.
                No te pierdas ninguna actualización sobre moda consciente y estilo auténtico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a
                href="https://www.instagram.com/sgabrielaortiz/"
                target="_blank"
                rel="noopener noreferrer"
                // className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: '#1C2218' }}
              >
                <Card
                  hover
                  className="p-8 text-center group transform transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#EDDCC3' }}
                >
                  <Instagram
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#4D1A09' }}
                  />
                  <h4 className="text-xl font-semibold mb-3" style={{ color: '#4D1A09' }}>
                    Instagram
                  </h4>
                  <p className="text-sm opacity-80 mb-4" style={{ color: '#524354' }}>
                    Stories diarias, reels inspiradores y contenido behind the scenes
                  </p>
                  <div className="text-xs opacity-60" style={{ color: '#524354' }}>
                    @sgabrielaortiz
                  </div>
                </Card>
              </a>
              <a
                href="https://www.youtube.com/@sgabrielaortiz"
                target="_blank"
                rel="noopener noreferrer"
                // className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: '#1C2218' }}
              >
                <Card
                  hover
                  className="p-8 text-center group transform transition-all duration-500 hover:scale-105"
                  style={{ backgroundColor: '#EDDCC3' }}
                >
                  <Youtube
                    className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#4D1A09' }}
                  />
                  <h4 className="text-xl font-semibold mb-3" style={{ color: '#3b1407ff' }}>
                    YouTube
                  </h4>
                  <p className="text-sm opacity-90 mb-4" style={{ color: '#524354' }}>
                    Videos extensos, tutoriales detallados y análisis profundo
                  </p>
                  <div className="text-xs opacity-70" style={{ color: '#524354' }}>
                    Gabriela Ortiz
                  </div>
                </Card>
              </a>

              <Card
                hover
                className="p-8 text-center group transform transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: '#EDDCC3' }}
              >
                <Video
                  className="w-16 h-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#4D1A09' }}
                />
                <h4 className="text-xl font-semibold mb-3" style={{ color: '#3b1407ff' }}>
                  TikTok
                </h4>
                <p className="text-sm opacity-90 mb-4" style={{ color: '#524354' }}>
                  Tips rápidos, tendencias conscientes y contenido educativo
                </p>
                <div className="text-xs opacity-70" style={{ color: '#524354' }}>
                  @gabrielaortiz
                </div>
              </Card>
            </div>

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
                Seguir en Instagram
              </a>

              <a
                href="https://www.youtube.com/@sgabrielaortiz"
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
                Suscribirse a YouTube
              </a>
            </div>
          </Card>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="text-center">
          <Card className="p-10 vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#EDDCC3' }}>
              ¿Quieres ser la primera en enterarte?
            </h3>
            <p className="text-base mb-8 opacity-90" style={{ color: '#CBB186' }}>
              Suscríbete para recibir notificaciones de nuevos videos y contenido exclusivo
            </p>

            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Tu email aquí"
                className="flex-1 px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors"
                style={{
                  backgroundColor: '#EDDCC3',
                  borderColor: '#C8BAAA',
                  color: '#291509'
                }}
              />
              <button
                className="px-6 py-3 font-medium transition-all duration-300 hover:scale-105 vintage-shadow"
                style={{
                  backgroundColor: '#CBB186',
                  color: '#291509'
                }}
              >
                Suscribirse
              </button>
            </div>
          </Card>
        </div> */}
      </div>
    </Section>
  );
};