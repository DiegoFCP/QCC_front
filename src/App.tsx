
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='main-content'>
        <Hero />
        <Features />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
export default App;