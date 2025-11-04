import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-neutral-900 text-white grid place-items-center">
            <Rocket size={16} />
          </div>
          <span className="font-semibold tracking-tight">Your Name</span>
        </div>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#home" className="hover:text-neutral-950">Home</a>
          <a href="#projects" className="hover:text-neutral-950">Projects</a>
          <a href="#contact" className="hover:text-neutral-950">Contact</a>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-md border border-neutral-200 hover:bg-neutral-100">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-md border border-neutral-200 hover:bg-neutral-100">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
