import { Header } from '../components/sections/Header';
import { Colaboraciones } from '../components/sections/Colaboraciones';
import { Footer } from '../components/sections/Footer';

export const ColaboracionesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Colaboraciones />
      </main>
      <Footer />
    </div>
  );
};