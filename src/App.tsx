
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='main-content'>
        <Hero />
        <Features />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
export default App;