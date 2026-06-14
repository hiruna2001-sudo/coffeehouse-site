import React, { useState, useEffect } from 'react';

function OrderInvoice({ order, onClose }) {
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    return now.toISOString().slice(11, 16);
  });
  const [quantity, setQuantity] = useState(order?.qty || 1);

  useEffect(() => {
    if (order) {
      setQuantity(order.qty);
    }
  }, [order]);

  if (!order) return null;

  const priceNumber = Number(order.item.price.replace(/[^0-9.]/g, ''));
  const subtotal = priceNumber * quantity;
  const handleConfirm = () => {
    window.alert(
      `Order confirmed for ${customerName || 'Guest'} at ${pickupTime}. ${quantity} x ${order.item.name}. Total: $${subtotal.toFixed(2)}`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-4 shadow-2xl animate-slide-up-fade">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-coffee-primary/90">Invoice</p>
            <h2 className="text-xl font-bold text-coffee-dark">Order Summary</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-coffee-light px-2 py-1 text-sm text-coffee-dark hover:bg-coffee-primary/10"
          >
            Close
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="rounded-3xl bg-coffee-background p-4 border border-dashed border-coffee-light">
            <div className="flex items-center gap-4">
              {order.item.image && (
                <img
                  src={order.item.image}
                  alt={order.item.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
              )}
              <div>
                <p className="text-base font-semibold text-coffee-dark">{order.item.name}</p>
                <p className="mt-1 text-xs text-coffee-dark/75">{order.item.description}</p>
                <div className="mt-2 space-y-1 text-xs text-coffee-dark/80">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-coffee-dark">Qty:</span>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-16 rounded-lg border border-coffee-light px-2 py-1 text-xs text-coffee-dark focus:border-coffee-primary focus:outline-none"
                    />
                  </div>
                  <p>Price: <span className="font-semibold text-coffee-dark">{order.item.price}</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-coffee-light bg-white p-4">
            <div className="grid gap-3">
              <div className="grid gap-1">
                <label className="text-xs font-semibold text-coffee-dark">Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-coffee-light px-3 py-2 text-sm text-coffee-dark focus:border-coffee-primary focus:outline-none"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-xs font-semibold text-coffee-dark">Pickup Time</label>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full rounded-2xl border border-coffee-light px-3 py-2 text-sm text-coffee-dark focus:border-coffee-primary focus:outline-none"
                />
              </div>

              <div className="rounded-3xl bg-coffee-secondary/10 p-4 text-coffee-dark text-sm">
                <div className="flex justify-between text-xs text-coffee-dark/80">
                  <span>Order number</span>
                  <span>#{order.id}</span>
                </div>
                <div className="mt-2 flex justify-between text-xs text-coffee-dark/80">
                  <span>Date</span>
                  <span>{order.date}</span>
                </div>
                <div className="mt-2 flex justify-between text-xs text-coffee-dark/80">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="mt-2 border-t border-coffee-light pt-2 flex justify-between text-sm font-semibold text-coffee-dark">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <button
              onClick={onClose}
              className="rounded-full border-2 border-red-400 px-4 py-2 text-xs font-semibold text-red-500 hover:bg-red-50"
            >
              Delete Order
            </button>
            <button
              onClick={handleConfirm}
              className="rounded-full bg-coffee-primary px-4 py-2 text-xs font-semibold text-white hover:bg-coffee-dark transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInvoice;
