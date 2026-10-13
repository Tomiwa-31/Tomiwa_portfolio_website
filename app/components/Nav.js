import { Github } from 'lucide-react';

const links = [
  ['Work', '#work'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm text-gray-200">
          tomiwa<span className="text-accent">.ai</span>
        </a>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-white">
              {label}
            </a>
          ))}
          <a
            href="https://github.com/Tomiwa-31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
