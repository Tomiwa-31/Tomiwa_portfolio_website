import { Github, ArrowUpRight, ChevronRight } from 'lucide-react';
import { flows, labels } from '../data';

export default function ProjectCard({ project, index, featured }) {
  const flow = flows[project.id];
  return (
    <article
      className={`group rounded-2xl border bg-ink-900 p-6 transition-colors hover:border-accent/40 md:p-8 ${
        featured ? 'border-accent/30' : 'border-white/10'
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-500">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className="text-accent">{labels[project.id]}</span>
        {featured && (
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent">Latest</span>
        )}
      </div>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-accent hover:text-accent"
        >
          <Github size={16} /> Source <ArrowUpRight size={14} />
        </a>
      </div>

      <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">{project.longDescription}</p>

      {flow && (
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/5 bg-ink-950 p-4">
          <ol className="flex w-max items-center gap-1.5 font-mono text-xs text-gray-300">
            {flow.map((step, i) => (
              <li key={step} className="flex items-center gap-1.5">
                <span className="whitespace-nowrap rounded-md border border-white/10 bg-ink-800 px-2.5 py-1.5">
                  {step}
                </span>
                {i < flow.length - 1 && <ChevronRight size={14} className="text-accent" />}
              </li>
            ))}
          </ol>
        </div>
      )}

      <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-gray-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
