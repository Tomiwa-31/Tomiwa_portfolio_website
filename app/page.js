import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { projects } from './data';

// Display order: newest and most relevant first
const ORDER = [0, 3, 2, 1];

export default function Portfolio() {
  const ordered = ORDER.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-gray-100">
      <Nav />
      <main>
        <Hero />

        <section id="work" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-sm text-accent">01 / Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Systems I&apos;ve built end to end
            </h2>
            <div className="mt-10 space-y-6">
              {ordered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} featured={i === 0} />
              ))}
            </div>
          </div>
        </section>

        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/5 px-6 py-8">
        <p className="mx-auto max-w-6xl text-sm text-gray-500">
          © 2026 Tomiwa Oladimeji
        </p>
      </footer>
    </div>
  );
}
