import React from 'react';
import Brand from "../assets/img/navbar.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light shadow">
      <div className="container justify-content-center">
        <span className="navbar-brand mb-0 h1">
          <img src={ Brand } alt="Logo-brand" width={"200px"} />
        </span>
      </div>
    </nav>
  )
}

export default Navbar

