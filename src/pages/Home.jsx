import { FaCoffee, FaMugHot, FaSeedling } from 'react-icons/fa';
import welcomeImg from '../assets/home/coffee-welcome.png';
import caramelMochaImg from '../assets/home/caramel-mocha.png';
import icedLatteVideo from '../assets/home/iced-latte-feature.mp4';

const highlights = [
  { icon: FaCoffee, title: 'Craft Coffee', description: 'Single origin espresso, pour-over, and cold brew made just for you.' },
  { icon: FaMugHot, title: 'Fresh Pastries', description: 'House-baked croissants, muffins, and sweet treats every morning.' },
  { icon: FaSeedling, title: 'Cozy Space', description: 'Relax with warm lighting, friendly service, and free Wi-Fi.' },
];

function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-white shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 flex flex-col justify-center gap-6 animate-slide-in-left">
            <span className="inline-flex items-center px-4 py-2 bg-coffee-secondary text-coffee-dark rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
              Welcome to CoffeeHouse
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-coffee-dark">
              Your neighborhood coffee destination.
            </h1>
            <p className="max-w-xl text-coffee-dark/80 leading-8">
              Discover handcrafted beverages, flavorful breakfast sandwiches, and a warm place to relax. We source carefully roasted beans and serve every drink with friendly service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/menu" className="inline-flex items-center justify-center rounded-full bg-coffee-primary px-6 py-3 text-white shadow hover:bg-coffee-dark transition hover:scale-105 transform duration-200">
                View Menu
              </a>
              <a href="#highlights" className="inline-flex items-center justify-center rounded-full border border-coffee-primary px-6 py-3 text-coffee-primary hover:bg-coffee-primary/10 transition hover:scale-105 transform duration-200">
                Why CoffeeHouse?
              </a>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto animate-slide-in-right">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(111,78,55,0.15),_transparent_45%)]" />
            <img
              src={welcomeImg}
              alt="Coffee shop welcome"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="highlights" className="grid gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <article 
              key={item.title} 
              className="rounded-3xl bg-white p-8 shadow-sm border border-coffee-light animate-scale-up hover:shadow-lg hover:border-coffee-primary/30 transition-all duration-300 cursor-pointer transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-coffee-primary/10 text-coffee-primary mb-6 group-hover:animate-float">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-coffee-dark mb-3">{item.title}</h2>
              <p className="text-coffee-dark/75 leading-7">{item.description}</p>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl overflow-hidden bg-coffee-dark/5 border border-coffee-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="grid gap-8 lg:grid-cols-2 items-center p-10">
          <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm uppercase tracking-[0.3em] text-coffee-primary/90 font-semibold">Featured Drink</p>
            <h2 className="mt-4 text-3xl font-bold text-coffee-dark">Iced Cold Brew</h2>
            <p className="mt-4 text-coffee-dark/75 leading-8">
              Smooth, refreshing, and perfect for any time of day. Watch how our expert baristas prepare the perfect iced cold brew with premium beans and pristine ice. Bold, crisp, and absolutely delicious.
            </p>
            <div className="mt-6 inline-flex rounded-full bg-coffee-primary px-5 py-3 text-sm font-semibold text-white hover:bg-coffee-dark transition">
              Try it today
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-slide-in-right hover:shadow-3xl transition-shadow" style={{ animationDelay: '0.4s' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 object-cover"
            >
              <source src={icedLatteVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-coffee-primary/5 border border-coffee-primary/20 p-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-coffee-primary/90 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>Daily special</p>
            <h2 className="mt-4 text-3xl font-bold text-coffee-dark animate-slide-in-left" style={{ animationDelay: '0.5s' }}>Signature Caramel Mocha</h2>
            <p className="mt-4 text-coffee-dark/75 leading-8 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              Sweet espresso blended with velvety steamed milk, caramel, and a dusting of cocoa. Perfect for a cozy afternoon break.
            </p>
            <div className="mt-6 inline-flex rounded-full bg-coffee-secondary px-5 py-3 text-sm font-semibold text-coffee-dark hover:shadow-md transition-shadow animate-scale-up" style={{ animationDelay: '0.7s' }}>
              Available all week
            </div>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            <img
              src={caramelMochaImg}
              alt="Caramel mocha"
              className="rounded-3xl object-cover w-full h-80 hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
