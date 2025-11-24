import Nevbar from './pages/Nevbar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Categories from './pages/Categories';
import BestSelling from './pages/BestSelling';
import Offer from './pages/Offer';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div className="bg-gradient-to-r from-white via-brand-light to-white text-brand-dark overflow-x-hidden antialiased">
      <Nevbar />
      <Hero />
      <Features />
      <Categories />
      <BestSelling />
      <Offer />
      <Testimonials />
    </div>
  );
}

export default App;
