import './App.css';
import Header from './components/header/header';
import About from './components/about/About';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}