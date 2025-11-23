import Nevbar from './pages/Nevbar';
import Hero from './pages/Hero';
import Features from './pages/Features';

function App() {
  return (
    <div className="bg-gradient-to-r from-white via-brand-light to-white text-brand-dark overflow-x-hidden antialiased">
      <Nevbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
