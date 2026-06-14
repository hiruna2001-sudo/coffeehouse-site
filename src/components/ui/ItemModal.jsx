import React, { useState } from 'react';

function ItemModal({ item, onClose, onOrder }) {
  const [qty, setQty] = useState(1);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg animate-slide-up-fade">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-28 h-28 rounded-lg object-cover" />
            )}
            <div>
              <h3 className="text-2xl font-bold text-coffee-dark">{item.name}</h3>
              <p className="mt-2 text-coffee-dark/75">{item.description}</p>
              <p className="mt-4 font-semibold text-coffee-primary">{item.price}</p>
            </div>
          </div>
          <button
            aria-label="close"
            onClick={onClose}
            className="text-coffee-dark/60 hover:text-coffee-dark"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <label className="text-sm text-coffee-dark/75">Quantity</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            className="w-20 rounded-md border px-3 py-2"
          />
          <button
            onClick={() => onOrder(item, qty)}
            className="ml-auto rounded-full bg-coffee-primary px-4 py-2 text-white font-semibold hover:bg-coffee-dark"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
