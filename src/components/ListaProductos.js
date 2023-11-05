import React, { useEffect, useState } from "react";
import Producto from "./Producto";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoAgregado, setProductoAgregado] = useState(null);
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProductos(data);
        } else {
          console.log("Los datos no son un arreglo válido");
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const agregar = (producto, indice) => {
    console.log("Agregado al carrito");
    console.log(producto , indice);
    setProductoAgregado(producto); // Actualiza el producto agregado
    
  };

  return (
    <div id="content" className="productos">
      <h2 className="subheader">Listado de Productos</h2>

      { productoAgregado ? (
        <p className="carrito-info">
        <strong>SE AGREGO AL CARRITO : </strong>
        <span>{productoAgregado ? productoAgregado.title : 'Ninguno'}</span>
      </p>
      ) : (
        <p className="carrito-info">
        <strong>NO HAY PRODUCTOS AGREGADOS EN EL CARRITO.</strong> 
        </p>
      )   
      }
      <div id="articles" className="productos">
        {loading ? (
          <div className="cargando">
            <div className="barra-progreso">
              <div className="avance">
                <p>Cargando...</p>
              </div>
            </div>
          </div>
        ) : (
          productos.map((producto, i) => (
            <Producto 
              key={i} 
              producto={producto} 
              indice = {i}
              agregarAlCarrito={agregar}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ListaProductos;
