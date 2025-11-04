import { ExternalLink, Star, Code2 } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Realtime 3D Showcase',
    desc: 'WebGL + Spline powered interactive product explorer.',
    tags: ['React', 'Spline', 'Three.js'],
    link: '#',
    stars: '1.2k',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Design System Kit',
    desc: 'A flexible, accessible component library for fast shipping.',
    tags: ['Tailwind', 'Radix', 'Storybook'],
    link: '#',
    stars: '940',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Content Studio',
    desc: 'Generate, edit and publish content with collaborative tools.',
    tags: ['FastAPI', 'MongoDB', 'OpenAI'],
    link: '#',
    stars: '2.1k',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected work</h2>
          <p className="text-neutral-600 mt-1">A few fun things I’ve built recently.</p>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
        >
          <Code2 size={16} />
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <article key={p.id} className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition">
            <div className="relative h-44">
              <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg group-hover:underline underline-offset-4">{p.title}</h3>
                <div className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-500/90 text-white px-2 py-0.5 rounded">
                  <Star size={12} className="fill-white" /> {p.stars}
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-neutral-200 px-2 py-1 bg-neutral-50">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:underline underline-offset-4"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
