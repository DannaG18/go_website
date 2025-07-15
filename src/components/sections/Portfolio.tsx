// import { useState } from 'react';
// import { ExternalLink } from 'lucide-react';
// import { Section } from '../common/Section';
// import { Card } from '../common/Card';
// import { PORTFOLIO_ITEMS } from '../../utils/constants';

// export function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Editorial', 'Personal Styling', 'Branding'];

//   const filteredItems = selectedCategory === 'All'
//     ? PORTFOLIO_ITEMS
//     : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

//   return (
//     <Section id="portfolio" background="light">
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#291509' }}>
//           Mi Portfolio
//         </h2>
//         <p className="text-lg max-w-2xl mx-auto opacity-80 mb-8" style={{ color: '#524334' }}>
//           Una selección de proyectos que reflejan mi pasión por el diseño consciente 
//           y la transformación personal.
//         </p>

//         {/* Filtro de Categorías */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? 'opacity-100 shadow-sm'
//                   : 'opacity-60 hover:opacity-80'
//               }`}
//               style={{
//                 backgroundColor: selectedCategory === category ? '#524334' : 'transparent',
//                 color: selectedCategory === category ? 'white' : '#524334',
//                 border: `1px solid ${selectedCategory === category ? '#524334' : '#CBBEBA'}`,
//               }}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Grid de Proyectos */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredItems.map((item) => (
//           <Card key={item.id} hover className="group overflow-hidden">
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                   <ExternalLink className="w-4 h-4" style={{ color: '#524334' }} />
//                 </div>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="flex items-center justify-between mb-3">
//                 <span
//                   className="text-xs font-medium px-3 py-1 rounded-full"
//                   style={{
//                     backgroundColor: '#EDDCC3',
//                     color: '#524334',
//                   }}
//                 >
//                   {item.category}
//                 </span>
//               </div>

//               <h3 className="text-lg font-semibold mb-2" style={{ color: '#291509' }}>
//                 {item.title}
//               </h3>

//               <p className="text-sm opacity-70" style={{ color: '#524334' }}>
//                 {item.description}
//               </p>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </Section>
//   );
// }
