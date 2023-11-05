import React, { Component } from "react";


class Producto extends Component {

  agregar = () => {
    this.props.agregarAlCarrito(this.props.producto , this.props.indice)
  }

render(){  
  
  const {image, title , price} = this.props.producto;

  return (

    <article className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <h5>{title}</h5>
      <samp className="price">
        Precio: $ {price}
      </samp>
      <a href="#">DESCRIPCION</a>

      <button onClick={this.agregar} className="button-comprar">
        AGREGAR AL CARRITO
      </button>
      <div className="clearfix"></div>
    </article>

  );
}
}
export default Producto;