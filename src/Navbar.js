import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ dogs }) => {
  const showHide = () => {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  };
  const dogLinks = dogs.map((dog) => {
    return (
      <div className="navbar-item">
        <NavLink activeClassName="active" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className="navbar is-dark mb-6">
      <div className="navbar-brand">
        <div className="navbar-item">
          <NavLink activeClassName="active" to={`/dogs`}>
            DogApp
          </NavLink>
        </div>
        <div
          onClick={showHide}
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu has-background-dark">
        <div className="navbar-start">{dogLinks}</div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
<nav className="navbar has-background-grey-darker mb-4">
      <div className="navbar-brand">
        <div className="navbar-item">DogApp</div>
      </div>
      <div className="navbar-item">
        <NavLink exact activeClassName="active" to="/dogs">
          Home
        </NavLink>
      </div>
      {dogs.map((dog) => (
        <div className="navbar-item">
          <NavLink activeClassName="active" to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        </div>
      ))}
    </nav>
    */
