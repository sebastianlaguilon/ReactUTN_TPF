import React, { Component } from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



const Login = () => {

  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');



  const [error, setError] = useState(false)
  const[errorEmail, setErrorEmail] = useState(false);
  const[errorpass, setErrorPass] = useState(false);
  const [Exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //validacion Formulario
    if ([email,pass].includes('')) {

      
      
      if ([email].includes('')) {
        setErrorEmail(true)
      }
      if ([pass].includes('')) {
        setErrorPass(true)
      }
     
      setError(true)

    } else {

      setExito(true);
      setError(false)
      setErrorEmail(false)
      setErrorPass(false)
    }

  }

  return (

    <div className="center">
        <section id="content">
    <div className="container">
      <div className="row justify-content-center mt-5 pt-2">
        <div className="col-md-10">
          <h1 className="subheader" id="contacto">Login</h1>
         
            <p className="pb-0 mb-0">Ingresa correo & contraseña</p>
            <p className="text-danger small pt-0 mt-0">*Todos los campos son obligatorios</p>
            <div className="alert alert-success d-none" id="mensajeExito">Mensaje enviado con éxito</div>
            {error &&
            <div className="alert alert-danger">
              <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>
            </div>
            }
            {Exito &&
              <div className="alert alert-success">
                <p>¡Acceso éxito!</p>
              </div>
            }

            <form name="form_registro"  onSubmit={handleSubmit}>
            
            
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
                <label for="contraseña" className="col-form-label col-md-4">Contraseña:</label>
                <div className="col-md-8">
                  <input type="password" name="pass" id="pass" className="form-control"value={pass} onChange={(e)=>setPass(e.target.value)} />
                  { errorpass && 
                    <div id="error_pass" className="text-danger">LA CONTRASEÑA ES OBLIGATORIA</div>
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

export default Login;

