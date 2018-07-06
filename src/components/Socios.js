import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Voluntarios.css';
import '../css/Socios.css';

class Voluntarios extends Component {
    render() {
        return (
            <div className='marcoVoluntarios'>
                <div className='tituloFutbol'>COLABORA CON NOSOTROS</div> 
                <div className='voluntariosParalax'></div>                
                <div className='tituloVoluntario'>SOCI@S</div>
                <div className='infoInicialVoluntario'>Hazte  socio  de  A  Contracorrent  Esport  Adaptat.  ¡Te  esperamos!  Forma  parte  de  este  magnífico  club <div className='resaltar' > ¡Disfruta  y  haz  deporte  con  nosotros!</div> </div>
                <div className='zonaMarcosSocios'>
                    <div className='valores'>
                        <div className='tituloMarcoVerde'>Socio  0#</div>
                        <div className='infoMarcoVerde'>(Si  quieres  colaborar  como  socio  pero  no  va  a  participar  en  las  actividades  que  se  ofrecen,  puedes  hacerte  socio  con  una  cuota  mínima)</div>
                        <div className='resaltarMarcoVerde'>cuota  mínima 8€/mes  </div>
                    </div>
                    <div className='resaltarInformateSocio'>¡INFORMATE!</div>
                    <div className='vision'>
                        <div className='tituloMarcoVerde'>Socio  Deportivo</div>
                        <div className='resaltarMarcoRosa'>15€!</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Voluntarios;