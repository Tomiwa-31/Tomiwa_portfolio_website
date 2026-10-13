import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { stats } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI / ML Engineer
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
          I build AI systems that are <span className="text-accent">grounded</span>, auditable and ready for production.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
          Hi, I&apos;m Tomiwa Oladimeji. I design RAG pipelines, agentic workflows and the MLOps around
          them, with a focus on systems that stay accurate, keep a human in control and are easy to debug.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-white"
          >
            View my work <ArrowDown size={16} />
          </a>
          <a
            href="mailto:oladimejitomiwa31@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-200 transition-colors hover:border-white/30"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/Tomiwa-31"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-200 transition-colors hover:border-white/30"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tomiwa-oladimeji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-200 transition-colors hover:border-white/30"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900 p-5">
              <dt className="font-mono text-3xl font-semibold text-white">{s.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-gray-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
