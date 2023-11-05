import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "./components/Error";
import ListaProductos from "./components/ListaProductos";
import Formulario from "./components/Formulario";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class Router extends Component {

    render() {
        return (

            <BrowserRouter >

                <Header />

                <Slider />

                <div className="center">


                    <Routes>

                        <Route exact path="/" Component={ListaProductos} />
                        <Route exact path="/formulario" Component={Formulario} />
                        <Route path="*" Component={Error} />
                        <Route exact path="/login" Component={Login} />
                        <Route exact path="/blog" Component={Blog} />

                    </Routes>

                    <Sidebar />

                    <div className="clearfix"></div>
                </div>
                <Footer />

            </BrowserRouter>

        );
    }
}

export default Router;