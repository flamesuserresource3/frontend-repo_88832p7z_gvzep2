import { MapPin, Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="size-9 bg-orange-500 rounded grid place-items-center text-white font-black">F</div>
          <div className="leading-tight">
            <div className="text-sm text-neutral-500">Deliver to</div>
            <button className="flex items-center gap-1 font-semibold text-sm">
              <MapPin size={16} className="text-orange-600" />
              <span>HSR Layout, Bengaluru</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center">
          <div className="w-full relative">
            <input
              className="w-full rounded-md border border-neutral-200 bg-white pl-10 pr-4 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400"
              placeholder="Search for restaurants and dishes"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900">
            <User size={18} />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-semibold bg-neutral-900 text-white px-3 py-2 rounded-md hover:bg-neutral-800">
            <ShoppingCart size={18} />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
