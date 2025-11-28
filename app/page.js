import Header from "../components/Header";
import Hero from "../components/Hero";
import SkillsGrid from "../components/SkillsGrid";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundDeco from "../components/BackgroundDeco";
import "./index.css";

export default function Home() {
  return (
    <>
      <BackgroundDeco />
      <Header />
      <main className="px-4 md:px-8 max-w-4xl relative z-10 pb-20">
        <Hero />
        <hr className="mt-10 md:mt-16 border-gray-700" />
        <SkillsGrid />
        <hr className="mt-12 md:mt-16 border-gray-700" />
        <Projects />
        <hr className="mt-12 md:mt-16 border-gray-700" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
