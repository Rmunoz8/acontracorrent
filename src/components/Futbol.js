import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Futbol.css';

class Futbol extends Component {
    render() {
        return (
            <div className='marcoFutbol'>
                <div className='tituloFutbol'>FÚTBOL ADAPTADO</div>
                <div className='futbolParalax'></div>                
                <div className='escudoFutbol'></div>
                <div className='infoInicial'>El  objetivo  principal del fútbol con  productos  de  apoyo es  incentivar  y  fomentar  la  práctica  de  fútbol  de  una  forma  adaptada  a  las  capacidades  motoras  de  niñas  y  niños  que  abarcan  las  edades  entre  los  6  a  15  años,  con  una  afectación  motora  que  pueda  limitar  la  práctica  del  fútbol.En  su  mayoría  va  dirigido  a  niños/as  con  patología  neurológica  con  un  nivel  cognitivo  que  le  permita  seguir  la  participación  de  la  actividad.  Se  incluirán  inicialmente  los  niveles  de  afectación  motora  I,  II,  III,  IV  del  Sistema  de  Clasificación  de  la  Función  Motriz  (GMFCS)  o  afectaciones  similares  con  capacidad  de  usar  un  andador  posterior. INFORMATE</div>
            </div>
        );
    }
};

export default Futbol;