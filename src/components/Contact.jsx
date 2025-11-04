import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative rounded-2xl border border-neutral-200 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40rem_20rem_at_120%_0%,rgba(244,115,33,0.08),transparent)]" />
      <div className="relative p-8 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Let’s build something amazing</h3>
          <p className="mt-2 text-neutral-600">
            Have an idea or a role in mind? I’d love to hear about it. I’m open to freelance,
            full‑time, and collaborative projects.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-100"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-100"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
