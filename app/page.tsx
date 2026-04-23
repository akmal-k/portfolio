import ScrollProgress from "./components/ScrollProgress";
import OpenToWorkBanner from "./components/OpenToWorkBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <ScrollProgress />
      <OpenToWorkBanner />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
