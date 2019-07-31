import React from "react";

const Menu = (props) => {
  return (
    <div className="nav-list">
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Bookshelf</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
