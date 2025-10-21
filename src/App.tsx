import { Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { MainHero } from './components/sections/MainHero';
import { PurchasePromise } from './components/sections/PurchasePromise';
import { ServicesPreview } from './components/sections/ServicesPreview';
import { AboutPreview } from './components/sections/AboutPreview';
import { ContactPreview } from './components/sections/ContactPreview';
import { Footer } from './components/sections/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
// Import page components
import { MarcaPersonalPage } from './pages/MarcaPersonal';
import { ServiciosPage } from './pages/Servicios';
import { BlogPage } from './pages/Blog';
import { AlgoritmoClosetPage } from './pages/AlgoritmoCloset';
import { SobreMiPage } from './pages/SobreMi';
import { ContactoPage } from './pages/Contacto';
import { ConsultoriaImagenPage } from './pages/ConsultoriaImagen';
import { ConsultoriaMarcasPage } from './pages/ConsultoriaMarcas';
import { CharlasCapacitacionesPage } from './pages/CharlasCapacitaciones';
import { ColaboracionesPage } from './pages/Colaboraciones';

// Home page component
const HomePage: React.FC = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <MainHero />
      <PurchasePromise />
      <ServicesPreview />
      <AboutPreview />
      <ContactPreview />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/marca-personal" element={<MarcaPersonalPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/algoritmo-closet" element={<AlgoritmoClosetPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/contactame" element={<ContactoPage />} />
          <Route path="/consultoria-imagen" element={<ConsultoriaImagenPage />} />
          <Route path="/consultoria-marcas" element={<ConsultoriaMarcasPage />} />
          <Route path="/charlas-capacitaciones" element={<CharlasCapacitacionesPage />} />
          <Route path="/colaboraciones" element={<ColaboracionesPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;