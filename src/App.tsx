import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Lazy load sections below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Journey = lazy(() => import('./components/Journey'));
const CurrentlyExploring = lazy(() => import('./components/CurrentlyExploring'));
const Contact = lazy(() => import('./components/Contact'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Journey />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CurrentlyExploring />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
