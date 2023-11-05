import React, { Component } from "react";
import logo from '../assets/images/react.svg'
import { NavLink } from "react-router-dom";

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img src={logo}  className="app-logo" alt="Logotipo" />
                        <span id="brand"> <strong>Programador Web</strong> UTN </span>
                    </div>

                    {/* Menu */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="formulario">Contacto</NavLink>
                            </li>
                        
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}


export default Header;