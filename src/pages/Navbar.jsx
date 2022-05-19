import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import { FaBitcoin } from "react-icons/fa";
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <>
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <FaBitcoin fontSize={34}/>
        </div>
        <div className="navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="blockchain">Blockchain</Link></p>
          <p><Link to="bitcoin">Bitcoin</Link></p>
          <p><Link to="webthree">Web3</Link></p>
        </div>
      </div>
      <div className="navbar-sign">
        <Link to="signin">
          <button type="button">Sign in</button>
        </Link>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><Link to="blockchain">Blockchain</Link></p>
            <p><Link to="bitcoin">Bitcoin</Link></p>
            <p><Link to="webthree">Web3</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
    <Outlet />
  </>
  );
};

export default Navbar;

