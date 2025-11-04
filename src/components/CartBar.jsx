import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartBar({ cart, onDecrease, onClear }) {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  if (cart.length === 0) {
    return (
      <div className="sticky bottom-4 inset-x-0 px-4">
        <div className="max-w-6xl mx-auto bg-neutral-900 text-white rounded-lg py-3 px-4 flex items-center justify-between shadow-lg">
          <span className="text-sm">Your cart is empty</span>
          <span className="text-sm opacity-80">Add some tasty bites!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky bottom-4 inset-x-0 px-4">
      <div className="max-w-6xl mx-auto bg-neutral-900 text-white rounded-lg py-3 px-4 shadow-lg">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-2 bg-neutral-800 rounded-md px-3 py-2">
              <span className="text-sm font-medium">{item.name}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease(item.id)}
                  className="size-6 grid place-items-center rounded border border-neutral-600 hover:bg-neutral-700"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm">{item.qty}</span>
                <button
                  onClick={() => onDecrease(item.id)}
                  className="size-6 grid place-items-center rounded border border-neutral-600 hover:bg-neutral-700 opacity-50 cursor-not-allowed"
                  disabled
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="text-sm font-semibold">₹{item.qty * item.price}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-3">
            <button onClick={onClear} className="inline-flex items-center gap-1.5 text-sm bg-neutral-800 px-3 py-2 rounded-md hover:bg-neutral-700">
              <Trash2 size={16} />
              Clear
            </button>
            <div className="text-sm">{totalQty} items</div>
            <button className="bg-white text-neutral-900 font-semibold text-sm px-4 py-2 rounded-md hover:bg-neutral-100">
              Pay ₹{totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
