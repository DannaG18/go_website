import { Header } from '../components/sections/Header';
import { Vlog } from '../components/sections/Vlog';
import { Footer } from '../components/sections/Footer';

export const VlogPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Vlog />
      </main>
      <Footer />
    </div>
  );
};