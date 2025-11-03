// src/pages/ReflectionDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  fetchBlogArticles,
  fetchBlogContent,
  getBlogArticleById,
  getBlogContentById,
  BlogArticle,
  ContentBlock
} from '../data/blogData';

interface FullArticle {
  meta: BlogArticle | null;
  content: ContentBlock[];
  conclusion: string;
}

export const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(true);
  const [fullArticle, setFullArticle] = useState<FullArticle>({
    meta: null,
    content: [],
    conclusion: ''
  });
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    console.log('🔍 ReflectionDetailPage montado con ID:', id);

    if (!id) {
      console.error('❌ No hay ID en la URL');
      setNotFound(true);
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true);
      console.log(`🚀 Iniciando carga del artículo: "${id}"`);

      try {
        // Cargar ambos datasets
        console.log('📥 Cargando artículos y contenido...');
        const [previews, contents] = await Promise.all([
          fetchBlogArticles(),
          fetchBlogContent()
        ]);

        console.log('✅ Datos cargados:', {
          totalArticulos: previews.length,
          totalContenidos: Object.keys(contents).length,
          articulosIDs: previews.map(a => a.id),
          contenidosIDs: Object.keys(contents)
        });

        // Buscar metadata por slug (id)
        const meta = previews.find(a => a.id === id) || null;
        console.log('🔍 Metadata encontrada:', meta ? `✅ "${meta.title}"` : '❌ No encontrado');

        // Buscar contenido por slug
        const contentEntry = contents[id];
        console.log('🔍 Contenido encontrado:', contentEntry ? `✅ ${contentEntry.content.length} bloques` : '❌ No encontrado');

        // Validación estricta
        if (!meta) {
          console.error(`❌ No se encontró metadata para ID: "${id}"`);
          console.log('📝 IDs disponibles:', previews.map(a => `"${a.id}"`).join(', '));
        }

        if (!contentEntry) {
          console.error(`❌ No se encontró contenido para ID: "${id}"`);
          console.log('📝 IDs de contenido disponibles:', Object.keys(contents).map(k => `"${k}"`).join(', '));
        }

        // Si no hay ni metadata ni contenido, mostrar not found
        if (!meta && !contentEntry) {
          console.error('❌ Artículo no encontrado completamente');
          setNotFound(true);
          setFullArticle({ meta: null, content: [], conclusion: '' });
        } else {
          // Construir el artículo completo
          const article: FullArticle = {
            meta,
            content: contentEntry?.content ?? [],
            conclusion: contentEntry?.conclusion ?? ''
          };

          console.log('✅ Artículo completo construido:', {
            tieneMetadata: !!article.meta,
            bloques: article.content.length,
            tieneConclusion: !!article.conclusion
          });

          setFullArticle(article);
          setNotFound(false);
        }
      } catch (err) {
        console.error('❌ Error crítico cargando artículo:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24">
          <div className="container relative z-10 text-center">
            <p style={{ color: '#291509' }}>Cargando reflexión...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || (!fullArticle.meta && fullArticle.content.length === 0)) {
    console.warn('⚠️ Mostrando página de "No encontrado"');

    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24 relative">
          <div className="absolute inset-0" style={{ backgroundColor: '#EDDCC3' }} />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-8" style={{ color: '#291509' }}>
              Reflexión no encontrada
            </h1>
            <p className="text-lg mb-8" style={{ color: '#524354' }}>
              El artículo con ID "<strong>{id}</strong>" no existe.
            </p>
            <p className="text-sm mb-8" style={{ color: '#524354' }}>
              Revisa la consola para más detalles.
            </p>
            <Link to="/blog">
              <Button>Volver al Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { meta, content = [], conclusion = '' } = fullArticle;

  console.log('🎨 Renderizando artículo:', {
    titulo: meta?.title,
    bloques: content.length,
    conclusion: !!conclusion
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 relative">
        <div className="absolute inset-0" style={{ backgroundColor: '#EDDCC3' }} />
        <div className="absolute inset-0 vintage-texture-paper opacity-30" />

        <div className="container relative z-10">
          {/* Back */}
          <div className="mb-10">
            <Link
              to="/blog"
              className="inline-flex items-center text-lg font-medium transition-colors duration-300 hover:opacity-80"
              style={{ color: '#565021' }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a Reflexiones
            </Link>
          </div>

          {/* Header (usa meta si existe) */}
          {meta && (
            <div className="max-w-6xl mx-auto mb-16">
              <Card className="overflow-hidden vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
                <div className="relative">
                  {meta.thumbnail ? (
                    <>
                      <img src={meta.thumbnail} alt={meta.title} className="w-full h-96 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div
                      className="w-full h-96 flex items-center justify-center"
                      style={{ backgroundColor: meta.color || '#8B8D79' }}
                    >
                      <p className="text-6xl opacity-20" style={{ color: '#EDDCC3' }}>
                        {meta.category}
                      </p>
                    </div>
                  )}

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-sm font-medium px-3 py-1 flex items-center vintage-shadow"
                        style={{ backgroundColor: meta.color || '#8B8D79', color: '#EDDCC3' }}
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {meta.category}
                      </span>
                      {meta.readTime && (
                        <span className="text-sm text-white flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {meta.readTime}
                        </span>
                      )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#EDDCC3' }}>
                      {meta.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm" style={{ color: '#C8BAAA' }}>
                      {meta.author && (
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {meta.author}
                        </div>
                      )}
                      {meta.date && (
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {meta.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-3">
                <Card className="p-12 vintage-shadow" style={{ backgroundColor: '#EDDCC3' }}>
                  <div className="prose prose-lg max-w-none" style={{ color: '#524354' }}>
                    {/* Optional description from meta */}
                    {meta?.description && (
                      <div className="mb-12 p-8 vintage-border" style={{ backgroundColor: '#C8BAAA' }}>
                        <p className="text-xl leading-relaxed italic" style={{ color: '#291509' }}>
                          {meta.description}
                        </p>
                      </div>
                    )}

                    {/* Render content blocks */}
                    {content.length > 0 ? (
                      <div className="space-y-8 text-lg leading-relaxed">
                        {content.map((block, i) => {
                          console.log(`Renderizando bloque #${i}:`, block);

                          return (
                            <div key={i}>
                              {block.type === 'heading' && (
                                <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: '#291509' }}>
                                  {block.text}
                                </h2>
                              )}
                              {block.type === 'paragraph' && (
                                <p className="mb-6">{block.text}</p>
                              )}
                              {block.type === 'quote' && (
                                <div className="my-12 p-8 vintage-border" style={{ backgroundColor: '#565021' }}>
                                  <blockquote className="text-2xl font-light italic text-center" style={{ color: '#EDDCC3' }}>
                                    "{block.text}"
                                  </blockquote>
                                </div>
                              )}
                              {block.type === 'image' && block.text && (
                                <div className="my-8">
                                  <img
                                    src={block.text}
                                    alt="Imagen del artículo"
                                    className="w-full rounded-lg vintage-shadow"
                                    onError={(e) => {
                                      console.error('Error cargando imagen:', block.text);
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                </div>
                              )}

                              {block.type === 'list' && block.items && (
                                <ul className="space-y-3 mb-8 ml-6">
                                  {block.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span
                                        className="w-2 h-2 mt-3 mr-4 flex-shrink-0 rounded-full"
                                        style={{ backgroundColor: '#565021' }}
                                      />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p style={{ color: '#524354' }}>
                          No hay contenido disponible para este artículo.
                        </p>
                      </div>
                    )}

                    {/* Conclusion */}
                    {conclusion && (
                      <div className="mt-16 p-8 vintage-border" style={{ backgroundColor: '#8B8D79' }}>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#EDDCC3' }}>
                          Reflexión Final
                        </h3>
                        <p className="text-lg leading-relaxed" style={{ color: '#C8BAAA' }}>
                          {conclusion}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Share */}
                  <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#565021' }}>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#EDDCC3' }}>
                      Compartir
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Share2}
                      className="w-full"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: meta?.title ?? document.title,
                            text: meta?.description ?? '',
                            url: window.location.href,
                          });
                        } else {
                          // Fallback: copiar al portapapeles
                          navigator.clipboard.writeText(window.location.href);
                          alert('✅ Link copiado al portapapeles');
                        }
                      }}
                    >
                      Compartir
                    </Button>
                  </Card>

                  {/* Related Articles */}
                  <Card className="p-6 vintage-shadow" style={{ backgroundColor: '#C8BAAA' }}>
                    <h4 className="text-lg font-semibold mb-6" style={{ color: '#291509' }}>
                      Reflexiones Relacionadas
                    </h4>
                    <div className="space-y-4">
                      <RelatedList currentId={id!} currentCategory={meta?.category} />
                    </div>
                  </Card>

                  {/* Newsletter */}
                  {/* <Card className="p-6 text-center vintage-shadow" style={{ backgroundColor: '#1C2218' }}>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#EDDCC3' }}>
                      Suscríbete
                    </h4>
                    <p className="text-sm mb-4 opacity-90" style={{ color: '#C8BAAA' }}>
                      Recibe mis últimas reflexiones
                    </p>
                    <Button size="sm" className="w-full">
                      Suscribirse
                    </Button>
                  </Card> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="flex justify-between items-center">
              <Link to="/blog">
                <Button variant="outline" icon={ArrowLeft}>
                  Todas las Reflexiones
                </Button>
              </Link>

              <Button className='w-[250px]' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Volver arriba
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

/** Helper component para relacionados */
const RelatedList: React.FC<{ currentId: string; currentCategory?: string }> = ({
  currentId,
  currentCategory
}) => {
  const [related, setRelated] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const previews = await fetchBlogArticles();
        const filtered = previews
          .filter(a => a.id !== currentId && (!currentCategory || a.category === currentCategory))
          .slice(0, 3);

        if (mounted) {
          setRelated(filtered);
          setLoading(false);
        }
      } catch (err) {
        console.error('❌ Error cargando relacionados:', err);
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => { mounted = false; };
  }, [currentId, currentCategory]);

  if (loading) {
    return <div className="text-sm" style={{ color: '#524354' }}>Cargando...</div>;
  }

  if (related.length === 0) {
    return <div className="text-sm" style={{ color: '#524354' }}>No hay reflexiones relacionadas.</div>;
  }

  return (
    <>
      {related.map(r => (
        <Link key={r.id} to={`/blog/${r.id}`} className="block group">
          <div className="flex items-start space-x-3 p-3 rounded-lg transition-colors duration-300 hover:bg-white hover:bg-opacity-50">
            {r.thumbnail ? (
              <img
                src={r.thumbnail}
                alt={r.title}
                className="w-16 h-16 object-cover rounded flex-shrink-0"
              />
            ) : (
              <div
                className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: r.color || '#8B8D79' }}
              >
                <span className="text-xs opacity-50" style={{ color: '#EDDCC3' }}>
                  {r.category.substring(0, 2)}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-medium mb-1 line-clamp-2 group-hover:opacity-80" style={{ color: '#291509' }}>
                {r.title}
              </h5>
              {r.readTime && (
                <div className="flex items-center text-xs opacity-60" style={{ color: '#524354' }}>
                  <BookOpen className="w-3 h-3 mr-1" />
                  {r.readTime}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};