import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
