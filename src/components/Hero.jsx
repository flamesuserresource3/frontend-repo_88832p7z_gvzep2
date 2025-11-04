import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 pt-10 lg:pt-16">
        <div className="relative order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="size-2 rounded-full bg-emerald-500"></span>
            Available for freelance
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Building delightful products with code and play
          </h1>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            I’m a full‑stack engineer crafting interactive, modern web experiences.
            I love combining performance, design and a sprinkle of 3D fun.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">
              See projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-100">
              Contact me
            </a>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] order-1 lg:order-2">
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-neutral-200 bg-white/60">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
