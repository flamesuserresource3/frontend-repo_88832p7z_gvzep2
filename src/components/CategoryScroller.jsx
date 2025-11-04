const categories = [
  { id: '1', name: 'Pizza', emoji: '🍕' },
  { id: '2', name: 'Biryani', emoji: '🍗' },
  { id: '3', name: 'Burgers', emoji: '🍔' },
  { id: '4', name: 'Chinese', emoji: '🥡' },
  { id: '5', name: 'Desserts', emoji: '🍰' },
  { id: '6', name: 'Healthy', emoji: '🥗' },
  { id: '7', name: 'South Indian', emoji: '🍛' },
  { id: '8', name: 'Street Food', emoji: '🌯' },
  { id: '9', name: 'Cakes', emoji: '🎂' },
  { id: '10', name: 'Coffee', emoji: '☕' },
];

export default function CategoryScroller() {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 -mx-4 px-4">
        {categories.map((c) => (
          <button
            key={c.id}
            className="flex-shrink-0 inline-flex items-center gap-2 border border-neutral-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-neutral-300 hover:shadow-sm transition"
          >
            <span className="text-lg">
              <span role="img" aria-label={c.name}>
                {c.emoji}
              </span>
            </span>
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
