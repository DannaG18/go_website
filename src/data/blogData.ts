import slugify from 'slugify';

// 👉 Reemplaza con el ID de tu Google Sheet
const SHEET_ID = '1mPG8MsE1HneHWeDgvVxin6TvS5TnJDfadC2zZcxa0LM';
const BLOG_ARTICLES_URL = `https://opensheet.elk.sh/${SHEET_ID}/BlogArticle`;
const BLOG_CONTENT_URL = `https://opensheet.elk.sh/${SHEET_ID}/BlogContent`;

// ====================
// 🔹 Tipos
// ====================
export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  thumbnail: string;
  color: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'image' | 'list';
  text?: string;
  items?: string[]; // Para listas
}

export interface BlogContent {
  [id: string]: {
    content: ContentBlock[];
    conclusion?: string;
  };
}

// ====================
// 🔹 Utilidades
// ====================
function slugifyTitle(title: string, index?: number): string {
  try {
    if (!title || typeof title !== 'string') {
      console.warn('⚠️ slugifyTitle: título inválido o vacío', title);
      return index !== undefined ? `articulo-${index + 1}` : '';
    }

    const slug = slugify(title, { lower: true, strict: true });

    if (!slug && index !== undefined) {
      return `articulo-${index + 1}`;
    }

    return slug;
  } catch (error) {
    console.error('❌ Error en slugifyTitle:', error);
    return index !== undefined ? `articulo-${index + 1}` : '';
  }
}

// Generar ID único verificando duplicados
function generateUniqueId(title: string, index: number, existingIds: Set<string>): string {
  let baseId = slugifyTitle(title, index);
  let uniqueId = baseId;
  let counter = 1;

  while (existingIds.has(uniqueId)) {
    uniqueId = `${baseId}-${counter}`;
    counter++;
    console.warn(`⚠️ ID duplicado detectado: "${baseId}" -> renombrado a "${uniqueId}"`);
  }

  existingIds.add(uniqueId);
  return uniqueId;
}

function saveToCache<T>(key: string, data: T): void {
  try {
    if (!key || !data) {
      console.warn('⚠️ saveToCache: key o data inválidos');
      return;
    }

    const jsonString = JSON.stringify(data);
    console.log(`💾 Guardando en cache "${key}": ${jsonString.length} caracteres`);

    sessionStorage.setItem(key, jsonString);
    console.log(`✅ Cache guardado exitosamente: ${key}`);
  } catch (error) {
    console.error(`❌ Error al guardar en cache (${key}):`, error);

    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      alert(`❌ Error: Cuota de almacenamiento excedida para ${key}`);
    } else {
      alert(`Error al guardar datos en cache: ${key}`);
    }
  }
}

function getFromCache<T>(key: string): T | null {
  try {
    if (!key) return null;

    const cached = sessionStorage.getItem(key);
    if (cached) {
      console.log(`✅ Datos recuperados del cache: ${key} (${cached.length} caracteres)`);
      const parsed = JSON.parse(cached) as T;

      if (key === 'blog_content') {
        const contentObj = parsed as unknown as BlogContent;
        const keys = Object.keys(contentObj);
        console.log(`📊 Contenido en cache: ${keys.length} artículos`, keys);
      }

      return parsed;
    }

    console.log(`ℹ️ No hay datos en cache para: ${key}`);
    return null;
  } catch (error) {
    console.error(`❌ Error al leer cache (${key}):`, error);
    sessionStorage.removeItem(key);
    return null;
  }
}

// ====================
// 🔹 Validación de respuesta
// ====================
function validateResponse(response: Response, url: string): void {
  if (!response.ok) {
    throw new Error(
      `Error HTTP ${response.status}: ${response.statusText} al cargar ${url}`
    );
  }
}

function validateArrayData(data: unknown, context: string): data is Array<Record<string, string>> {
  if (!Array.isArray(data)) {
    console.error(`❌ ${context}: Los datos recibidos no son un array:`, typeof data);
    throw new Error(`${context}: Los datos no son un array`);
  }

  if (data.length === 0) {
    console.warn(`⚠️ ${context}: Array vacío recibido`);
    return true;
  }

  console.log(`✅ ${context}: Array válido con ${data.length} elementos`);
  return true;
}

function sanitizeImageUrl(url: string | undefined, articleTitle: string): string {
  if (!url || url.trim() === '') {
    console.log(`ℹ️ Sin imagen para: "${articleTitle}"`);
    return '';
  }

  try {
    new URL(url.trim());
    return url.trim();
  } catch {
    console.warn(`⚠️ URL de imagen inválida para "${articleTitle}": ${url} - Se usará sin imagen`);
    return '';
  }
}

// ====================
// 🔹 Fetch de artículos (previews)
// ====================
export async function fetchBlogArticles(): Promise<BlogArticle[]> {
  const cacheKey = 'blog_articles';

  try {
    const cached = getFromCache<BlogArticle[]>(cacheKey);
    if (cached && cached.length > 0) {
      console.log(`📦 Usando ${cached.length} artículos del cache`);

      const ids = cached.map(a => a.id);
      const uniqueIds = new Set(ids);
      if (ids.length !== uniqueIds.size) {
        console.error('❌ IDs duplicados encontrados en cache. Limpiando...');
        sessionStorage.removeItem(cacheKey);
        return fetchBlogArticles();
      }

      return cached;
    }

    console.log('🔄 Cargando artículos desde Google Sheets...');
    console.log(`📍 URL: ${BLOG_ARTICLES_URL}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(BLOG_ARTICLES_URL, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    validateResponse(response, BLOG_ARTICLES_URL);

    const data = await response.json();
    console.log('📥 Datos raw de artículos:', data);

    validateArrayData(data, 'BlogArticles');

    if (data.length === 0) {
      alert('⚠️ No se encontraron artículos en Google Sheets');
      return [];
    }

    if (data.length > 0) {
      console.log('📋 Columnas disponibles en artículos:', Object.keys(data[0]));
    }

    const existingIds = new Set<string>();

    const formatted: BlogArticle[] = data.map((item: Record<string, string>, index: number) => {
      try {
        const id = generateUniqueId(item.título || '', index, existingIds);

        const thumbnail = sanitizeImageUrl(item.imagen, item.título || `Artículo #${index + 1}`);

        const article = {
          id,
          title: item.título || '',
          description: item.descripción || '',
          category: item.categoría || '',
          date: item.fecha || '',
          author: item.autor || '',
          readTime: item.tiempo_lectura || '',
          thumbnail,
          color: item.color_categoria || '#8B8D79',
        };

        return article;
      } catch (error) {
        console.error(`❌ Error procesando artículo #${index + 1}:`, error, item);
        throw error;
      }
    });

    console.log(`✅ ${formatted.length} artículos cargados exitosamente`);
    console.log('📝 IDs de artículos generados:', formatted.map(a => `"${a.id}"`).join(', '));

    const withImages = formatted.filter(a => a.thumbnail).length;
    const withoutImages = formatted.length - withImages;
    console.log(`📊 Estadísticas: ${withImages} con imagen, ${withoutImages} sin imagen`);

    saveToCache(cacheKey, formatted);
    return formatted;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('❌ Error en fetchBlogArticles:', error);

    if (error instanceof Error && error.name === 'AbortError') {
      alert('⏱️ Timeout: La carga de artículos está tardando demasiado. Verifica tu conexión.');
    } else {
      alert(`❌ Error al cargar artículos:\n${errorMessage}\n\nRevisa la consola para más detalles.`);
    }

    return [];
  }
}

// ====================
// 🔹 Fetch de contenido completo
// ====================
export async function fetchBlogContent(): Promise<BlogContent> {
  const cacheKey = 'blog_content';

  try {
    console.log('🚀 Iniciando fetchBlogContent...');

    const cached = getFromCache<BlogContent>(cacheKey);
    if (cached && Object.keys(cached).length > 0) {
      const count = Object.keys(cached).length;
      console.log(`📦 Usando ${count} contenidos del cache`);
      console.log('📝 IDs de contenido en cache:', Object.keys(cached).map(id => `"${id}"`).join(', '));
      return cached;
    }

    console.log('🔄 Cargando contenido desde Google Sheets...');
    console.log(`📍 URL: ${BLOG_CONTENT_URL}`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(BLOG_CONTENT_URL, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    console.log('📡 Respuesta recibida:', response.status, response.statusText);

    validateResponse(response, BLOG_CONTENT_URL);

    const rows = await response.json();
    console.log('📥 Datos raw de contenido:', rows);
    console.log(`📊 Total de filas recibidas: ${rows.length}`);

    validateArrayData(rows, 'BlogContent');

    if (rows.length === 0) {
      alert('⚠️ No se encontró contenido en Google Sheets');
      return {};
    }

    if (rows.length > 0) {
      console.log('📋 Columnas disponibles en contenido:', Object.keys(rows[0]));
      console.log('🔍 Primera fila de ejemplo:', rows[0]);
    }

    const existingIds = new Set<string>();

    const contentData: BlogContent = rows.reduce((acc: BlogContent, row: Record<string, string>, index: number) => {
      try {
        const titulo = row.título || row.titulo;

        if (!titulo) {
          console.warn(`⚠️ Fila #${index + 1} sin título, saltando...`, row);
          return acc;
        }

        const id = generateUniqueId(titulo, index, existingIds);

        console.log(`📄 Procesando contenido #${index + 1}: "${titulo}" -> ID: "${id}"`);

        const contentArray: ContentBlock[] = [];

        Object.entries(row).forEach(([key, value]) => {
          if (!value || key === 'título' || key === 'titulo' || key === 'conclusion') return;

          try {
            if (key.startsWith('paragraph_')) {
              contentArray.push({ type: 'paragraph', text: value });
            } else if (key.startsWith('heading_')) {
              contentArray.push({ type: 'heading', text: value });
            } else if (key.startsWith('quote_')) {
              contentArray.push({ type: 'quote', text: value });
            } else if (key.startsWith('image_')) {
              contentArray.push({ type: 'image', text: value });
            } else if (key.startsWith('list_')) {
              // Convertir el texto en un array de items separados por salto de línea o punto y coma
              const items = value.split(/\n|;/).map(item => item.trim()).filter(item => item.length > 0);
              contentArray.push({ type: 'list', items });
            }
          } catch (error) {
            console.error(`❌ Error procesando campo ${key} del contenido #${index + 1}:`, error);
          }
        });

        acc[id] = {
          content: contentArray,
          conclusion: row.conclusion || '',
        };

        console.log(`✅ Contenido "${id}" procesado: ${contentArray.length} bloques`);

        return acc;
      } catch (error) {
        console.error(`❌ Error procesando contenido #${index + 1}:`, error, row);
        return acc;
      }
    }, {});

    const contentCount = Object.keys(contentData).length;
    console.log(`✅ ${contentCount} contenidos procesados exitosamente`);
    console.log('📝 IDs de contenido generados:', Object.keys(contentData).map(id => `"${id}"`).join(', '));

    if (contentCount === 0) {
      alert('⚠️ No se pudo procesar ningún contenido válido');
      return {};
    }

    saveToCache(cacheKey, contentData);
    console.log('💾 Contenido guardado en cache exitosamente');

    return contentData;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('❌ Error CRÍTICO en fetchBlogContent:', error);

    if (error instanceof Error && error.name === 'AbortError') {
      alert('⏱️ Timeout: La carga de contenido está tardando demasiado. Verifica tu conexión.');
    } else {
      alert(`❌ Error al cargar contenido:\n${errorMessage}\n\nRevisa la consola para más detalles.`);
    }

    return {};
  }
}

// ====================
// 🔹 Función auxiliar para buscar artículo por ID
// ====================
export async function getBlogArticleById(id: string): Promise<BlogArticle | null> {
  try {
    console.log(`🔍 Buscando artículo con ID: "${id}"`);
    const articles = await fetchBlogArticles();
    const article = articles.find(a => a.id === id);

    if (!article) {
      console.error(`❌ No se encontró artículo con ID: "${id}"`);
      console.log('📝 IDs de artículos disponibles:', articles.map(a => `"${a.id}"`).join(', '));
    } else {
      console.log(`✅ Artículo encontrado:`, article);
    }

    return article || null;
  } catch (error) {
    console.error('❌ Error en getBlogArticleById:', error);
    return null;
  }
}

// ====================
// 🔹 Función auxiliar para buscar contenido por ID
// ====================
export async function getBlogContentById(id: string): Promise<BlogContent[string] | null> {
  try {
    console.log(`🔍 Buscando contenido con ID: "${id}"`);
    const content = await fetchBlogContent();
    const articleContent = content[id];

    if (!articleContent) {
      console.error(`❌ No se encontró contenido con ID: "${id}"`);
      console.log('📝 IDs de contenido disponibles:', Object.keys(content).map(k => `"${k}"`).join(', '));
    } else {
      console.log(`✅ Contenido encontrado para "${id}":`, {
        blocksCount: articleContent.content.length,
        hasConclusion: !!articleContent.conclusion
      });
    }

    return articleContent || null;
  } catch (error) {
    console.error('❌ Error en getBlogContentById:', error);
    return null;
  }
}

// ====================
// 🔹 Función de debug para limpiar cache
// ====================
export function clearBlogCache(): void {
  try {
    sessionStorage.removeItem('blog_articles');
    sessionStorage.removeItem('blog_content');
    console.log('🗑️ Cache limpiado exitosamente');
    alert('✅ Cache limpiado. Recarga la página para cargar datos frescos.');
  } catch (error) {
    console.error('❌ Error al limpiar cache:', error);
  }
}

// Exponer funciones en window para debug
if (typeof window !== 'undefined') {
  (window as any).clearBlogCache = clearBlogCache;
  (window as any).getBlogArticleById = getBlogArticleById;
  (window as any).getBlogContentById = getBlogContentById;
  (window as any).fetchBlogContent = fetchBlogContent;
  (window as any).fetchBlogArticles = fetchBlogArticles;
}
// ```

// **Cambios principales:**

// 1. ✅ **`ContentBlock` interface** - Agregado `items?` para listas
// 2. ✅ **Procesamiento de `list_`** - Divide el texto en items usando saltos de línea o punto y coma
// 3. ✅ **Procesamiento de `image_`** - Guarda la URL de la imagen
// 4. ✅ **Corregidos errores de sintaxis** - Cerrados todos los bloques correctamente

// **En tu Google Sheet, las listas deben estar así:**
// ```
// list_1: "Item 1
// Item 2
// Item 3"
// ```

// O también:
// ```
// list_1: "Item 1; Item 2; Item 3"