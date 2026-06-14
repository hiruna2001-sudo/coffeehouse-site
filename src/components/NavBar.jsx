import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
];

function NavBar() {
  return (
    <header className="bg-white/80 backdrop-blur shadow-sm border-b border-coffee-light sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-coffee-primary">
          CoffeeHouse
        </Link>

        <nav className="space-x-6 text-sm font-medium text-coffee-dark">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-coffee-primary underline underline-offset-4'
                  : 'hover:text-coffee-primary'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
