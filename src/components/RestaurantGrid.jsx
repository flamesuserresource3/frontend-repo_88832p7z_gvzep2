import RestaurantCard from './RestaurantCard.jsx';

const restaurants = [
  {
    id: 'r1',
    name: 'Oven Story Pizza',
    rating: 4.3,
    time: 30,
    price: 200,
    cuisines: ['Pizza', 'Italian'],
    offer: '50% OFF up to ₹100',
    image:
      'https://images.unsplash.com/photo-1548365328-9f547fb095de?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'r2',
    name: 'Paradise Biryani',
    rating: 4.4,
    time: 28,
    price: 180,
    cuisines: ['Biryani', 'Hyderabadi'],
    offer: 'Flat 20% OFF',
    image:
      'https://images.unsplash.com/photo-1604909052743-84e5d6f0573a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'r3',
    name: 'Chinese Wok',
    rating: 4.1,
    time: 25,
    price: 150,
    cuisines: ['Chinese', 'Asian'],
    offer: 'Items at ₹99',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'r4',
    name: 'Truffle Affairs',
    rating: 4.6,
    time: 35,
    price: 220,
    cuisines: ['Desserts', 'Bakery'],
    offer: 'Free Delivery',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'r5',
    name: 'Burger Junction',
    rating: 4.0,
    time: 22,
    price: 160,
    cuisines: ['Burgers', 'Fast Food'],
    offer: 'Buy 1 Get 1',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'r6',
    name: 'Green Bowl',
    rating: 4.5,
    time: 20,
    price: 140,
    cuisines: ['Healthy', 'Salads'],
    offer: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function RestaurantGrid({ onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} onAdd={onAdd} />
      ))}
    </div>
  );
}
