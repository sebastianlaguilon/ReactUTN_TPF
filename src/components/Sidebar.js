import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Sidebar extends Component {

    render() {

        return (
            <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item slider-small">
          <h3>Iniciar Seccion</h3>
          <NavLink to="login" className="btn btn-success">Acceder</NavLink>
        </div>
        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el Producto que Buscas</p>
          <form>
            <input type="text" name="search" />
            <input type="submit" name="submit" value="buscar" className="btn" />
          </form>
        </div>
      </aside>
        );
    }
}


export default Sidebar;