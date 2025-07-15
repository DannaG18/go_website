import { Header } from '../components/sections/Header';
import { PersonalBrand } from '../components/sections/PersonalBrand';
import { Footer } from '../components/sections/Footer';

export const MarcaPersonalPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PersonalBrand />
      </main>
      <Footer />
    </div>
  );
};