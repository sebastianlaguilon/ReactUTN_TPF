import React, { Component } from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const[email, setEmail] = useState('');
  const[tContacto, setTcontacto] = useState('');
  const[asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');


  const [error, setError] = useState(false)
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorApellido, setErrorApellido] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const[errorEmail, setErrorEmail] = useState(false);
  const[errorTContacto, setErrorTcontacto] = useState(false);
  const[errorAsunto, setErrorAsunto] = useState(false);
  const [ErrorMensaje, setErrorMensaje] = useState(false);
  const [Exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //validacion Formulario
    if ([nombre, apellido,telefono,email,tContacto,asunto,mensaje].includes('')) {

      if ([nombre].includes('')) {
        setErrorNombre(true)
      }
      if ([apellido].includes('')) {
        setErrorApellido(true);
      }
      if ([telefono].includes('')) {
        setErrorTelefono(true);
      }
      if ([email].includes('')) {
        setErrorEmail(true)
      }
      if ([tContacto].includes('')) {
        setErrorTcontacto(true)
      }
      if ([asunto].includes('')) {
        setErrorAsunto(true)
      }
      if ([mensaje].includes('')) {
        setErrorMensaje(true)
      }
      setError(true)

    } else {

      setExito(true);
      setErrorNombre(false)
      setErrorApellido(false)
      setErrorTelefono(false)
      setErrorEmail(false)
      setErrorTcontacto(false)
      setErrorAsunto(false)
      setErrorMensaje(false)
      setError(false)
    }

  }

  /*https://zoom-fepp.s3.amazonaws.com/85665270998/85665270998-meeting-907d1c4b-d636-4ebd-adc1-4ea66db89292.mp4    MINUTO 46*/

  return (

    <div className="center">
        <section id="content">
    <div className="container">
      <div className="row justify-content-center mt-5 pt-2">
        <div className="col-md-10">
          <h1 className="subheader" id="contacto">Contacto</h1>
         
            <p className="pb-0 mb-0">Te invitamos a contactarnos.</p>
            <p className="text-danger small pt-0 mt-0">*Todos los campos son obligatorios</p>
            <div className="alert alert-success d-none" id="mensajeExito">Mensaje enviado con éxito</div>
            {error &&
            <div className="alert alert-danger">
              <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
            </div>
            }
            {Exito &&
              <div className="alert alert-success">
                <p>¡Mensaje enviado con éxito!</p>
              </div>
            }

            <form name="form_registro"  onSubmit={handleSubmit}>
              <div className="row form-group mb-2">
                <label for="nombre" className="col-form-label col-md-4">Nombre:</label>
                <div className="col-md-8">
                  <input type="text" name="nombre" id="nombre" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                    { errorNombre && 
                    <div id="error_nombre" className="text-danger">EL NOMBRE ES OBLIGATORIO</div>
                    }
                </div>
              </div>
              <div className="row form-group mb-2">
                <label for="apellido" className="col-form-label col-md-4">Apellido:</label>
                <div className="col-md-8">
                  <input type="text" name="apellido" id="apellido" className="form-control" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                  { errorApellido && 
                    <div id="error_nombre" className="text-danger">EL APELLIDO ES OBLIGATORIO</div>
                    }
                </div>
              </div>
              <div className="row form-group mb-2">
                <label for="telefono" className="col-form-label col-md-4">Teléfono:</label>
                <div className="col-md-8">
                  <input type="text" name="telefono" id="telefono" className="form-control"value={telefono} onChange={(e)=>setTelefono(e.target.value)}  />
                  { errorTelefono && 
                    <div id="error_nombre" className="text-danger">EL TELEFONO ES OBLIGATORIO</div>
                    }
                </div>
              </div>
              <div className="row form-group mb-2">
                <label for="email" className="col-form-label col-md-4">E-mail:</label>
                <div class="col-md-8">
                  <input type="email" name="email" id="email" className="form-control"value={email} onChange={(e)=>setEmail(e.target.value)}  />
                  { errorEmail && 
                    <div id="error_nombre" className="text-danger">EL EMAIL ES OBLIGATORIO</div>
                    }
                </div>
              </div>

              <div className="row form-group mb-2">
                <label for="tipoContacto" className="col-form-label col-md-4">Tipo de Contacto:</label>
                <div className="col-md-8">
                <select
                  name="tipoContacto"
                  id="tipoContacto"
                  className="form-control"
                  value={tContacto}
                  onChange={(e) => setTcontacto(e.target.value)}
>
                  <option value="">Selecciona un tipo de contacto</option>
                  <option value="Soporte">Soporte</option>
                  <option value="Venta">Venta</option>
                </select>
                { errorTContacto && 
                    <div id="error_nombre" className="text-danger">EL TIPO DE CONTACTO ES OBLIGATORIO</div>
                    }
                </div>
              </div>

              <div className="row form-group mb-2">
                <label for="apellido" className="col-form-label col-md-4">Asunto:</label>
                <div className="col-md-8">
                  <input type="text" name="asunto" id="asunto" className="form-control"value={asunto} onChange={(e)=>setAsunto(e.target.value)} />
                  { errorAsunto && 
                    <div id="error_nombre" className="text-danger">EL ASUNTO ES OBLIGATORIO</div>
                    }
                </div>
              </div>

              <div class="row form-group mb-2">
                <label for="mensaje" className="col-form-label col-md-4">Mensaje:</label>
                <div className="col-md-8">
                  <textarea rows="3" className="form-control" id="mensaje" name="mensaje" value={mensaje} onChange={(e)=>setMensaje(e.target.value)} ></textarea>
                  { ErrorMensaje && 
                    <div id="error_nombre" className="text-danger">EL MENSAJE ES OBLIGATORIO</div>
                    }
                </div>
              </div>
              <div className="row form-group mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <button type="submit" className="btn btn-info py-2">Enviar</button>
                </div>

                <div id="mensaje"></div>
              </div>
            </form>
        </div>
      </div>
    </div>
</section>
</div>

  );

}

export default Formulario;

