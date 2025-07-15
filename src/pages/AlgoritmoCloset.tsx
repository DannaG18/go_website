import { Header } from '../components/sections/Header';
import { ClosetAlgorithm } from '../components/sections/ClosetAlgorithm';
import { Footer } from '../components/sections/Footer';

export const AlgoritmoClosetPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ClosetAlgorithm />
      </main>
      <Footer />
    </div>
  );
};