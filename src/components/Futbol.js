import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Futbol.css';

class Futbol extends Component {
    render() {
        return (
            <div className='marcoFutbol'>
                <div className='tituloFutbol'>FRAME FOOTBALL</div>
                <div className='futbolParalax'><div className='futbolParalaxImg' ></div></div>                
                <div className='escudoFutbol'></div>
                <div className='diagonal'>
                    <div className='textoDiagonal'>
                        <div className='infoInicial'>El  objetivo  principal del fútbol con  productos  de  apoyo es  incentivar  y  fomentar  la  práctica  de  fútbol  de  una  forma  adaptada  a  las  capacidades  motoras  de  niñas  y  niños  que  abarcan  las  edades  entre  los  6  a  15  años,  con  una  afectación  motora  que  pueda  limitar  la  práctica  del  fútbol.En  su  mayoría  va  dirigido  a  niños/as  con  patología  neurológica  con  un  nivel  cognitivo  que  le  permita  seguir  la  participación  de  la  actividad.  Se  incluirán  inicialmente  los  niveles  de  afectación  motora  I,  II,  III,  IV  del  Sistema  de  Clasificación  de  la  Función  Motriz  (GMFCS)  o  afectaciones  similares  con  capacidad  de  usar  un  andador  posterior. INFORMATE</div>
                    </div>
                </div>

                <div className='zonaCuadroFutbol'>
                    <div className='zonaIz'>
                        <div className='tituloFutbol'>¿Qué  es  Frame  Football?</div>
                        <div className='infoInicial'>Frame  Footbal  ha  sido  desarrollado  como  una  forma  de  juego  adaptado  de  fútbol,  dando  apoyo  a  los  participantes  mediante  andadores  posteriores  para  disfrutar  de  este  deporte. </div>
                    </div>
                    <div className='zonaDer'>
                        <div className='tituloFutbol'>¿Cómo  se  juega?</div>
                        <div className='listaFutbol'>
                            Se  ha  llevado  a  cabo mediante las siguientes adaptaciones  claves:
                        <ul>
                                <li>Pueden participar niñ@s con hasta 5 años de diferencia</li>
                                <li>El  portero  tiene  que  usar  un  andador  posterior.  </li>
                                <li>Se  juega  con  balones  de  iniciación.  </li>
                                <li>Los  saques  de  banda  y  de  portería  se  realizan  siempre  con  el  pie.  </li>
                                <li>El  balón  se  juega  con  ambos  pies  y  está  permitido  el  uso  de  golpearlo  con  el  andador. </li>
                                <li>Los equipos se compondrán de 5 participantes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className='tituloFutbol'>¿Beneficios? </div>
                    <div className='infoInicial'>Para  todos  los  jugadores  que  participen  en  Frame  Football,  tiene  un  gran  impacto  en  las  habilidades  motoras,  sociales,  en  la  comunicación  y  en  la  confianza  en  sí  mismos.  Al  jugar  en  un  ambiente  donde  los  jugadores  tienen  similares  limitaciones,  pueden  disfrutar  de  un  juego  nivelado.  Los  participantes  más  experimentados  tienen  la  oportunidad  de  apoyar  a  los  participantes  más  nuevos  o  con  más  limitaciones  que  el  resto,  proporcionándoles  nuevas  habilidades  que  anteriormente  no  habían  tenido,  y  fomentando  la  sociabilización  y  la  inclusión  deportiva.  La  modalidad  Frame  Football  ofrece  a  los  participantes  la  oportunidad  de  disfrutar  de  la  experiencia  de  la  práctica  del  fútbol  adaptado  a  sus  necesidades  individuales,  proporcionándoles  nuevos  desafíos  y    haciéndoles  sentir  parte  de  un  equipo.   </div>
                </div>
        );
    }
};

export default Futbol;