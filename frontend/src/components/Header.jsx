// frontend/src/components/Header.jsx
import { NavLink } from 'react-router-dom';

export default function Header() {
  const links = ['Home','Menu','Contact','Cart'];
  return (
    <nav className="bg-coffee-light shadow-soft-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <NavLink to="/" className="text-2xl font-bold text-coffee-dark">Coffee Shop</NavLink>
        <div className="space-x-4">
          {links.map(link => (
            <NavLink
              key={link}
              to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-coffee-dark text-white' : 'text-coffee-dark hover:bg-coffee-accent/20'}`
              }
            >{link}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}