import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Voluntarios.css';

class Voluntarios extends Component {
    render() {
        return (
            <div className='marcoVoluntarios'>
                <div className='tituloFutbol'>COLABORA CON NOSOTROS</div> 
                <div className='voluntariosParalax'></div>                
                {/* <div className='imagenesLocura' >        */}
                    {/* <div className='textVoluntarios' > */}
                        <div className='tituloVoluntario'>VOLUNTARI@S</div>
                        <div className='infoInicialVoluntario'>Si  quieres  colaborar  con  nosotros  ayudarnos  a  llevar    el  proyecto  de  fútbol   adaptado  con  productos  de  apoyo,  necesitamos  voluntari@s  que  nos  ayuden  a  llevar  la  actividad.  Tan  fácil  como  orientar  a  los  participantes  dentro  de  las  actividades,  controlar  que  no  se  despisten  y  ayudarles  cuando  se  vean  en  situaciones  complicadas.    ¡Con  la  ayuda  de  todos  conseguiremos  una  actividad  divertida,  en  la  que  podamos  disfrutar  de  este  deporte,  tanto  los  participantes  como  los  técnicos  y  vosotros!  Ponte  en  contacto  con  nosotros<br></br>email:  info.acontracorrentasociacion@gmail.com<br></br>teléfono:  687635043  /  687084621<br></br><div className='resaltar' >¡TE INFORMAREMOS DE de todo!</div></div>
                    {/* </div> */}
                {/* </div> */}
                {/* Socios
                Colaboradores */}
            </div>
        );
    }
};

export default Voluntarios;