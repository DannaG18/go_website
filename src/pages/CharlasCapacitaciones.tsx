import { Header } from '../components/sections/Header';
import { CharlasCapacitaciones } from '../components/sections/CharlasCapacitaciones';
import { Footer } from '../components/sections/Footer';

export const CharlasCapacitacionesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CharlasCapacitaciones />
      </main>
      <Footer />
    </div>
  );
};