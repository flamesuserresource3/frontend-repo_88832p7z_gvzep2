import { Star } from 'lucide-react';

export default function RestaurantCard({ restaurant, onAdd }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:shadow-md transition">
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
        {restaurant.offer && (
          <div className="absolute bottom-2 left-2 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            {restaurant.offer}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold line-clamp-1">{restaurant.name}</h3>
          <div className="flex items-center gap-1 text-xs font-semibold bg-green-600 text-white rounded px-1.5 py-0.5">
            <Star size={12} className="fill-white text-white" />
            {restaurant.rating}
          </div>
        </div>
        <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{restaurant.cuisines.join(', ')}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-neutral-600">
          <span>{restaurant.time} mins</span>
          <span>₹{restaurant.price} for one</span>
        </div>
        <button
          onClick={() => onAdd({ id: restaurant.id, name: restaurant.name, price: restaurant.price })}
          className="mt-3 w-full text-center text-sm font-semibold border border-neutral-300 rounded-md py-1.5 hover:bg-neutral-50"
        >
          Add
        </button>
      </div>
    </div>
  );
}
