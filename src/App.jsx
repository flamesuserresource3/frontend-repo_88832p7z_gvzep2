import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import CategoryScroller from './components/CategoryScroller.jsx';
import RestaurantGrid from './components/RestaurantGrid.jsx';
import CartBar from './components/CartBar.jsx';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const handleDecrease = (id) => {
    setCart((prev) => {
      const next = prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      return next;
    });
  };

  const handleClear = () => setCart([]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4">
        <section className="mt-6">
          <CategoryScroller />
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Top restaurants near you</h2>
          <RestaurantGrid onAdd={handleAddToCart} />
        </section>
      </main>

      <CartBar cart={cart} onDecrease={handleDecrease} onClear={handleClear} />
    </div>
  );
}
