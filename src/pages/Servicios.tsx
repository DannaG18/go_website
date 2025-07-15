import { Header } from '../components/sections/Header';
import { Services } from '../components/sections/Services';
import { Footer } from '../components/sections/Footer';

export const ServiciosPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
};