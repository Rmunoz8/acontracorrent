import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Futbol.css';
import Mapa from './Mapa';
class Futbol extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    render() {
        return (
            <div className='marcoFutbol'>
                <div className='tituloFutbol'>FÚTBOL ADAPTADO</div>
                <div className='futbolParalax'><div className='futbolParalaxImg' ></div></div>                
                <div className='escudoFutbol'></div>
                <div className='diagonal'>
                    <div className='textoDiagonal'>
                        <div className='infoInicial diagonalRes'>El objetivo principal del fútbol adaptado con productos de apoyo es incentivar y fomentar la práctica de fútbol de una forma adaptada a las capacidades motoras de las niñas y niños entre los 6 y 15 años de edad, con una afectación motora que pueda limitar la práctica de este deporte. Principalmente va dirigido a niños/as con diversidad funcional con un nivel cognitivo que le permita participar en la actividad. Se  incluirán  inicialmente  los  niveles  de  afectación  motora  I,  II,  III,  IV  del  Sistema  de  Clasificación  de  la  Función  Motriz  (GMFCS)  o  afectaciones  similares  con  capacidad  de  usar  un  andador  posterior. ¡INFÓRMATE!</div>
                    </div>
                </div>

                <div className='zonaCuadroFutbol'>
                    <div className='zonaIz'>
                        <div className='tituloFutbol'>¿Qué es el fútbol adaptado?</div>
                        <div className='infoInicial'>El Frame Football o Fútbol adaptado con productos de apoyo, es una forma de juego adaptado de fútbol, en la que los participantes se apoyan mediante andadores posteriores para disfrutar de este deporte.</div>
                    </div>
                    <div className='zonaDer'>
                        <div className='tituloFutbol'>¿Cómo  se  juega?</div>
                        <div className='listaFutbol'>
                            El Frame Football se ha llevado a cabo mediante las siguientes adaptaciones claves:
                        <ul>
                                <li>Pueden participar niñ@s con hasta 5 años de diferencia.</li>
                                <li>El  portero  tiene  que  usar  un  andador  posterior.  </li>
                                <li>Se  juega  con  balones  de  iniciación.  </li>
                                <li>Los  saques  de  banda  y  de  portería  se  realizan  siempre  con  el  pie.  </li>
                                <li>El  balón  se  juega  con  ambos  pies  y  está  permitido golpearlo  con  el  andador. </li>
                                <li>Los equipos se compondrán de 5 participantes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='tituloFutbol'>Instalaciones</div>
                <div>Carrer de Caballers n.115 46015 Alfara del Patriarca-Valencia</div>
                <Mapa></Mapa>                
            </div>
        );
    }
};

export default Futbol;