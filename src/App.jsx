import './App.css'

import { Link, Outlet } from 'react-router-dom';

export default function App () {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        
      </nav>
      
      <Outlet />
    </>
  );
}
