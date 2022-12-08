import React from 'react';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import MenuItem from '../MenuItem';
import {NavLink} from "react-router-dom";

const NavBar = () => (
  <header className="header title h1">
    <nav className="container-fluid navbar navbar-expand-sm navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
          <MenuItem itemName="Inicio" />

          <MenuItem itemName="Tazas" to="/category/tazas" />

          <MenuItem itemName="Agendas" to="/category/agendas" />
        </ul>

        <NavLink className="d-none d-md-block col-md-2 active" to="/">
          <img
            className="logo d-block mx-auto"
            src={logo}
            alt="Logo un caos organizado"
          />
        </NavLink>

        <ul className="navbar-nav col-12 col-md-5 justify-content-around">
        <MenuItem itemName='Stickers' to="/category/stickers" />

        <MenuItem itemName='Tattoos' to="/category/tattoos" />

          <button type="button" className="btn btn-dark position-relative">
            <img
              className="cart d-block mx-auto"
              src={cart}
              alt="Carrito de compras"
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black">
              99+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </ul>
      </div>
    </nav>

    <h1 className="visually-hidden">Un Caos Organizado - Inicio</h1>
  </header>
);

export default NavBar;
