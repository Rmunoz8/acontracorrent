import React, { Component } from 'react';
import '../css/Principal.css';
import Carrusel from './Carousel';
import YouTube from 'react-youtube';

class Principal extends Component {
  constructor(props){
    super(props);
    this.state={

    }

    this.changeNav = this.changeNav.bind(this);

  }
  render() {
    return (
      <div className="marcoPrincipal">
        <div className='infoInicial'>A Contracorrent Esport Adaptat es una asociación sin ánimo de lucro, que nace con el objetivo de promover la práctica del deporte, el desarrollo personal, la calidad de vida e inclusión social de niñ@s con diversidad funcional o con riesgo de tenerla. Incentivamos y fomentamos la práctica deportiva de una forma adaptada al deportista de manera que invertimos los beneficios de la actividad física en la promoción de la salud de las niñas y niños.</div>
        <YouTube
          videoId={'Enhd9U4Eu8c'}                  // defaults -> null
          className={'videoPresentacion'}                // defaults -> null
        />
        <div className='tituloFutbol'>¡BENEFICIOS DEL DEPORTE ADAPTADO!</div>
        <div className='infoInicial'>El deporte adaptado para niñ@s tiene un gran impacto en las habilidades motoras, sociales, en la comunicación y en la confianza en sí mismos. Al jugar en un ambiente dónde los participantes tienen similares capacidades pueden disfrutar de un juego divertido y estimulante. Se fomentan la sociabilización y la inclusión deportiva mediante el trabajo en equipo y la cooperación. Además el deporte adaptado les proporciona nuevos desafíos y les hace sentirse parte de un equipo.</div>
        <div className='zonaVista'>
          <div className='marcoVision' ontouchstart="this.classList.toggle('hover');" >
            <div className='vision'>
              <div className='frontVision'>
                <div className='misionTitulo'>Visión!</div>
                <div className='misionText'>Queremos llegar al máximo número de niños/as con diversidad funcional de manera que puedan disfrutar de la práctica deportiva.</div>
              </div>
              <div className='backVision'>
              </div>
            </div>
          </div>
          <div className='marcoVision' ontouchstart="this.classList.toggle('hover');" >
            <div className='vision'>
              <div className='frontValores'>
                <div className='misionTitulo'>Valores!</div>
                <div className='misionText'>Los  valores  que  nos  caracterizan  son:  la  inclusión  en  el  deporte,  trabajo  en  equipo,  responsabilidad y humildad.</div>
              </div>
              <div className='backValores'>
                <div className='resaltarValores'>A Contracorrent Esport Adaptat</div>
              </div>
            </div>
          </div>
          <div className='marcoVision' ontouchstart="this.classList.toggle('hover');" >
            <div className='vision'>
              <div className='frontMision'>
                <div className='misionTitulo'>Misión!</div>
                <div className='misionText'>Nuestro objetivo es promover la  práctica  del  deporte  y  realizar  actividades  deportivas  adaptadas  a  las  capacidades  de  los  participantes.</div>
              </div>
              <div className='backMision'>
              </div>
            </div>
          </div>
        </div>
        <div className='zonaPosts'>
          <div className='tituloZonaPost'><div className='hr'></div>NOVEDADES<div className='hr' ></div></div>
          <div className='marcoPosts'>
            <div onClick={() => { this.changeNav('#voluntario', '#op1')}} className='post'>
              <div className='overlayPost'>
                <div className='tituloPost'>COLABORA CON NOSOTROS</div>
                <div className='bloqueInfoPost'>Buscamos personas maravillosas ¿Quieres unirte a nuestro proyecto?</div>
              </div>
            </div>
            <div onClick={() => { this.changeNav("#futbol", '#principal') }} className='post2'>
              <div className='overlayPost'>
              </div>
            </div>

            <div onClick={() => { window.open('https://acontracorrent701203868.wordpress.com/2019/01/13/por-fin-empezamos-la-temporada/') }} className='post5'>
              <div className='overlayPost'>
                <div className='tituloPost'>¡POR FIN EMPEZAMOS LA TEMPORADA!</div>
                <div className='bloqueInfoPost'>Después de un largo año trabajando en el proyecto y la asociación, ya podemos ¡Empezar a rodar el balón!</div>
              </div>
            </div>
            
            <div onClick={() => { window.open('https://acontracorrent701203868.wordpress.com/2019/01/12/vii-congreso-sefip/'); }} className='post4'>
              <div className='overlayPost'>
                <div className='tituloPost'>VII Congreso SEFIP</div>
                <div className='bloqueInfoPost'>VII CONGRESO SEFIP “ACTIVIDAD Y PARTICIPACIÓN PARA NIÑOS Y JÓVENES CON DISCAPACIDAD”</div>
              </div>
            </div>

            <div onClick={() => { window.open('https://acontracorrent701203868.wordpress.com/2019/01/12/primera-entrada-del-blog/');}} className='post3'>
              <div className='overlayPost'>
                <div className='tituloPost'>PRIMERA ACTIVIDAD</div>
                <div className='bloqueInfoPost'>Primera actividad de fútbol adaptado</div>
              </div>
            </div>

            <div onClick={() => { }} className='post6'>
              <div className=''>
                <div className='tituloPost'></div>
                <div className='bloqueInfoPost'></div>
              </div>
            </div>
          </div>
        </div>                             
      </div>
    );
  }

  changeNav(selec, actual) {
    try {
      this.setState({ seleccionado: selec });
      this.props.contenido(selec);
    } catch (error) {
    }
  }

}

export default Principal;