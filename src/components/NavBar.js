import { Outlet } from 'react-router-dom';
import NavItem from './NavItem';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <h1>Math Magicians</h1>
        <NavItem />
      </nav>
      <Outlet />
    </>
  );
}
