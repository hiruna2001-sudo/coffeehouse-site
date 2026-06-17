import React, { useState } from 'react';
import ItemModal from '../components/ui/ItemModal';
import OrderInvoice from '../components/ui/OrderInvoice';
import americanoImg from '../assets/menu/americano.jpg';
import latteImg from '../assets/menu/latte.jpg';
import cappuccinoImg from '../assets/menu/cappuccino.jpg';
import flatWhiteImg from '../assets/menu/flat-white.jpg';
import caramelMochaImg from '../assets/menu/caramel-mocha.jpg';
import vanillaHoneyLatteImg from '../assets/menu/vanilla-honey-latte.jpg';
import icedColdBrewImg from '../assets/menu/iced-cold-brew.jpg';
import chaiLatteImg from '../assets/menu/chai-latte.jpg';
import almondCroissantImg from '../assets/menu/almond-croissant.jpg';
import blueberryMuffinImg from '../assets/menu/blueberry-muffin.jpg';
import breakfastSandwichImg from '../assets/menu/breakfast-sandwich.jpg';
import avocadoToastImg from '../assets/menu/avocado-toast.jpg';

const menuCategories = [
  {
    title: 'Coffee Classics',
    items: [
      { name: 'Americano', description: 'Espresso with hot water for a smooth, rich cup.', price: '$3.50', image: americanoImg },
      { name: 'Latte', description: 'Creamy espresso with steamed milk and light foam.', price: '$4.75', image: latteImg },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.', price: '$4.75', image: cappuccinoImg },
      { name: 'Flat White', description: 'Smooth microfoam poured over espresso.', price: '$5.25', image: flatWhiteImg },
    ],
  },
  {
    title: 'Specialty Drinks',
    items: [
      { name: 'Caramel Mocha', description: 'Espresso, chocolate, caramel, steamed milk, whipped cream.', price: '$5.95', image: caramelMochaImg },
      { name: 'Vanilla Honey Latte', description: 'Espresso with vanilla, honey, and steamed milk.', price: '$5.95', image: vanillaHoneyLatteImg },
      { name: 'Iced Cold Brew', description: 'Slow-steeped cold brew served over ice.', price: '$4.95', image: icedColdBrewImg },
      { name: 'Chai Latte', description: 'Spiced black tea blended with steamed milk.', price: '$4.95', image: chaiLatteImg },
    ],
  },
  {
    title: 'Bakery & Bites',
    items: [
      { name: 'Almond Croissant', description: 'Flaky pastry with almond filling and sugar glaze.', price: '$3.95', image: almondCroissantImg },
      { name: 'Blueberry Muffin', description: 'Moist muffin loaded with fresh blueberries.', price: '$3.50', image: blueberryMuffinImg },
      { name: 'Breakfast Sandwich', description: 'Egg, cheese, and bacon on a toasted brioche bun.', price: '$6.50', image: breakfastSandwichImg },
      { name: 'Avocado Toast', description: 'Sourdough with smashed avocado, chili flakes, and lemon.', price: '$7.25', image: avocadoToastImg },
    ],
  },
];

function Menu() {
  const [selected, setSelected] = useState(null);
  const [orderInvoice, setOrderInvoice] = useState(null);

  function handleOrder(item, qty) {
    const priceNumber = Number(item.price.replace('$', ''));
    const total = priceNumber * qty;
    const order = {
      id: Math.floor(Math.random() * 1000000),
      date: new Date().toLocaleDateString(),
      item,
      qty,
      total,
    };
    setOrderInvoice(order);
    setSelected(null);
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white p-10 shadow-lg border border-coffee-light">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-coffee-primary/90">Menu</p>
            <h1 className="text-4xl font-bold text-coffee-dark">Taste our favorites</h1>
          </div>
          <div className="rounded-3xl bg-coffee-secondary/10 px-5 py-4 text-coffee-dark">
            <p className="text-sm uppercase tracking-[0.2em]">Order ahead</p>
            <p className="text-lg font-semibold">Pickup in 10 minutes</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-lg border border-coffee-light">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-coffee-primary/90">Menu breakdown</p>
            <h2 className="text-3xl font-bold text-coffee-dark">Explore every category</h2>
          </div>
          <div className="rounded-3xl bg-coffee-secondary/10 px-5 py-4 text-coffee-dark">
            <p className="text-sm uppercase tracking-[0.2em]">12 delicious choices</p>
            <p className="text-lg font-semibold">Coffee, specialty drinks, and bites</p>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {menuCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold text-coffee-dark">{category.title}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-coffee-primary/80">{category.items.length} items</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {category.items.map((item) => (
                  <article key={item.name} className="rounded-3xl border border-coffee-light p-4 shadow-sm bg-coffee-background transition hover:-translate-y-1 hover:shadow-md">
                    <img src={item.image} alt={item.name} className="h-40 w-full rounded-3xl object-cover shadow-sm" />
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-coffee-dark">{item.name}</h4>
                        <p className="mt-2 text-coffee-dark/70 leading-6">{item.description}</p>
                      </div>
                      <span className="text-coffee-primary font-semibold">{item.price}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelected(item)}
                        className="rounded-full border border-coffee-primary px-3 py-2 text-coffee-primary hover:bg-coffee-primary/10"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleOrder(item, 1)}
                        className="rounded-full bg-coffee-primary px-3 py-2 text-white font-semibold hover:bg-coffee-dark"
                      >
                        Order
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ItemModal
        item={selected}
        onClose={() => setSelected(null)}
        onOrder={handleOrder}
      />
      <OrderInvoice order={orderInvoice} onClose={() => setOrderInvoice(null)} />
    </div>
  );
}

export default Menu;
