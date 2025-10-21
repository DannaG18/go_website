import { Header } from '../components/sections/Header';
import { Blog } from '../components/sections/Blog';
import { Footer } from '../components/sections/Footer';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
};