import { Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { MainHero } from './components/sections/MainHero';
import { PurchasePromise } from './components/sections/PurchasePromise';
import { ServicesPreview } from './components/sections/ServicesPreview';
import { AboutPreview } from './components/sections/AboutPreview';
import { ContactPreview } from './components/sections/ContactPreview';
import { Footer } from './components/sections/Footer';

// Import page components
import { MarcaPersonalPage } from './pages/MarcaPersonal';
import { ServiciosPage } from './pages/Servicios';
import { VlogPage } from './pages/Vlog';
import { AlgoritmoClosetPage } from './pages/AlgoritmoCloset';
import { SobreMiPage } from './pages/SobreMi';
import { ContactoPage } from './pages/Contacto';

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marca-personal" element={<MarcaPersonalPage />} />
      <Route path="/servicios" element={<ServiciosPage />} />
      <Route path="/vlog" element={<VlogPage />} />
      <Route path="/algoritmo-closet" element={<AlgoritmoClosetPage />} />
      <Route path="/sobre-mi" element={<SobreMiPage />} />
      <Route path="/contactame" element={<ContactoPage />} />
    </Routes>
  );
}

export default App;