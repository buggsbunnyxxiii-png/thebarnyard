import { motion, useScroll, useSpring } from "framer-motion";
import { Hero, Manifesto, Nav } from "./sections/Header";
import { Homes, Performance, Process } from "./sections/Middle";
import { Contact, Footer, Quote, Studio } from "./sections/Bottom";
import { AboutMigration, CollectionsMigration, ProjectsMigration, ProcessMigration, ContactMigration } from "./sections/Migration";
import PageRouter from "./pages";

/** The book's running head — a vertical index pinned to the left margin. */
function RunningIndex() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-7 xl:flex"
    >
      <span className="h-16 w-px bg-ink/18" />
      <div className="relative h-24 w-px overflow-hidden bg-ink/12">
        <motion.span
          style={{ scaleY }}
          className="absolute inset-0 origin-top bg-oxide"
        />
      </div>
      <div className="flex items-center gap-6 [writing-mode:vertical-rl]">
        <span className="label rotate-180 text-taupe/85">
          Yankee Barn Homes
        </span>
        <span className="label tnum rotate-180 text-taupe/55">
          Est. 1969 — Grantham, NH
        </span>
      </div>
      <span className="h-16 w-px bg-ink/18" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <Nav />
      <RunningIndex />
      <main>
        {window.location.pathname !== "/" ? <PageRouter /> : <>
        <Hero />
        <Manifesto />
        <AboutMigration />
        <CollectionsMigration />
        <Homes />
        <ProjectsMigration />
        <Process />
        <ProcessMigration />
        <Performance />
        <Studio />
        <Quote />
        <ContactMigration />
        <Contact />
        </>}
      </main>
      <Footer />
    </div>
  );
}
