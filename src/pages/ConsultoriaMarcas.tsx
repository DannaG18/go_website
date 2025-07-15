import { Header } from '../components/sections/Header';
import { ConsultoriaMarcas } from '../components/sections/ConsultoriaMarcas';
import { Footer } from '../components/sections/Footer';

export const ConsultoriaMarcasPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ConsultoriaMarcas />
      </main>
      <Footer />
    </div>
  );
};