import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
          <Projects />
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}
