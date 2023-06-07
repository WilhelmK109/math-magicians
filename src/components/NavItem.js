import { NavLink } from 'react-router-dom';

export default function NavItem() {
  return (
    <ul className="nav-items">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="calculator">Calculator</NavLink></li>
      <li><NavLink to="quote">Quote</NavLink></li>
    </ul>
  );
}
