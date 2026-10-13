import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-8 md:p-12">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white">
          Building something with LLMs? Let&apos;s talk.
        </h2>
        <p className="mt-3 max-w-xl text-gray-400">
          I&apos;m open to AI engineering roles and collaborations on RAG, agentic workflows and MLOps.
        </p>
        <a
          href="mailto:oladimejitomiwa31@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-white"
        >
          <Mail size={16} /> oladimejitomiwa31@gmail.com
        </a>
      </div>
    </section>
  );
}
