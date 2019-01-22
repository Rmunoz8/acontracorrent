import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Voluntarios.css';
import '../css/Socios.css';

class Voluntarios extends Component {
    render() {
        return (
            <div className='marcoVoluntarios'>
                <div className='tituloFutbol'>COLABORA CON NOSOTROS</div> 
                <div className='socioParalax'></div>                
                <div className='infoInicialVoluntario'>Hazte socio de A Contracorrent Esport Adaptat. Forma parte de este magnífico club, ¡Te esperamos!<div className='resaltarSocio'> ¡Disfruta  y  haz  deporte  con  nosotros!</div> </div>
                <div className='resaltarInformateSocio'>¡INFÓRMATE!</div>
                <div className='zonaMarcosSocios'>
                    <div className='marcoVerde'>
                        <div className='tituloMarcoVerde'>Socio  0#</div>
                        <div className='infoMarcoVerde'>Si quieres colaborar como socio pero no puedes participar en las actividades que ofrecemos, ¡hazte socio!</div>
                        <div className='resaltarMarcoVerde'>Cuota  mínima 8€/mes  </div>
                    </div>
                    <div className='marcoRosa'>
                        <div className='tituloMarcoRosa'>Socio  Deportivo</div>
                        <div className='resaltarMarcoRosa'>15€/mes!</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Voluntarios;