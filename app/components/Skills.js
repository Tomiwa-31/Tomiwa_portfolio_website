import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-accent">02 / Skills</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          What I work with
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-white/10 bg-ink-900 p-6">
              <h3 className="text-sm font-medium text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
