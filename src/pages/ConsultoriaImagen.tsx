import { Header } from '../components/sections/Header';
import { ConsultoriaImagen } from '../components/sections/ConsultoriaImagen';
import { Footer } from '../components/sections/Footer';

export const ConsultoriaImagenPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ConsultoriaImagen />
      </main>
      <Footer />
    </div>
  );
};