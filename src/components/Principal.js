import React, { Component } from 'react';
import '../css/Principal.css';
import Carrusel from './Carousel';

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
        <div className='infoInicial'> A Contracorrent Esport Adaptat somos una asociación sin ánimo de lucro, que nace con el objetivo de promover la práctica del deporte, el desarrollo personal, la calidad de vida e inclusión social de personas con diversidad funcional o con riesgo de tenerla, a través de incentivary fomentar la práctica deportiva de una forma adaptada al deportista, y aprovechar los beneficios de la actividad física en la rehabilitación de niños con daño cerebral y otros problemas neurológicos.</div>
        <div className='zonaVista'>

          <div className='marcoVision' ontouchstart="this.classList.toggle('hover');" >
            <div className='vision'>
              <div className='frontVision'>
                <div className='misionTitulo'>Visión!</div>
                <div className='misionText'> Llegar  al  máximo  número  de  personas  con  alguna  alteración  motora  pueda  disfrutar  de  la  práctica  deportiva.</div>
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
                <div className='resaltar'>A Contracorrent Esport Adaptat</div>
              </div>
            </div>
          </div>
          <div className='marcoVision' ontouchstart="this.classList.toggle('hover');" >
            <div className='vision'>
              <div className='frontMision'>
                <div className='misionTitulo'>MISIÓN!</div>
                <div className='misionText'>Promover  la  práctica  del  deporte  y  realizar  actividades  deportivas  adaptadas  a  las  capacidades  de  los  participantes.</div>
              </div>
              <div className='backMision'>
              </div>
            </div>
          </div>
        </div>
        <div className='zonaPosts'>
          <div className='tituloZonaPost'><div className='hr' ></div>NOVEDADES<div className='hr' ></div></div>
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
      console.log(error);
    }
  }

}

export default Principal;