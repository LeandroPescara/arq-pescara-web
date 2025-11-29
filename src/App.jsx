import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact";
import CTA from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";



export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-almond)] text-[var(--color-raisin)]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact /> 
        
      </main>
      <Footer />
    </div>
  );
}
