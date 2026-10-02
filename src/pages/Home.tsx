import { motion, useScroll, useReducedMotion } from "motion/react";
import { Navigation } from "../components/Navigation";
import {
  Hero,
  About,
  Experience,
  Expertise,
  Approach,
  Projects,
  Universe,
  Beyond,
  Footer,
} from "../components/Sections";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  return (
    <>
      <motion.div
        className="scroll-progress"
        aria-hidden="true"
        style={{ scaleX: reduced ? 0 : scrollYProgress }}
      />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Approach />
        <Projects />
        <Universe />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
