import { useCallback, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import ValuesStrip from "./components/ValuesStrip";
import Services from "./components/Services";
import FeaturedServices from "./components/FeaturedServices";
import Journey from "./components/Journey";
import AdvocacyFeature from "./components/AdvocacyFeature";
import ResourcesDirectory from "./components/ResourcesDirectory";
import About from "./components/About";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#0a1628]">
      <Navigation onOpenContact={openContact} />

      <main>
        <Hero
          onOpenContact={openContact}
          onScrollServices={() => scrollToSection("services")}
        />

        <Introduction />

        <ValuesStrip />

        <Services />

        <FeaturedServices />

        <Journey />

        <AdvocacyFeature />

        <About />

        <Impact />

        <ResourcesDirectory />

        <Testimonials />

        <Contact onOpen={openContact} />
      </main>

      <Footer onOpenContact={openContact} />

      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  );
}