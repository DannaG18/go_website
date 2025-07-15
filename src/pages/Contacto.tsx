import { Header } from '../components/sections/Header';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

export const ContactoPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};