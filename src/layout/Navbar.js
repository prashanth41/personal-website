import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/bookshelf">Bookshelf</Link>
        </li>
        {/* <li><Link to="/">About</Link></li> */}
      </ul>
    </div>
  );
};

export default Navbar;
