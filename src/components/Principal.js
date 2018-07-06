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
        
        <div className='zonaPosts'>
          <div className='tituloZonaPost'><div className='hr' ></div>NOVEDADES<div className='hr' ></div></div>
          <div className='marcoPosts'>
            <div onClick={()=>{this.changeNav('#voluntarios', '#op1')}} className='post'>
              <div className='overlayPost'>
                <div className='tituloPost'>COLABORA CON NOSOTROS</div>
                <div className='bloqueInfoPost'>Buscamos personas maravillosas ¿Quieres unirte a nuestro proyecto?</div>
              </div>
            </div>
            <div onClick={() => { this.changeNav("#futbol", '#op1') }} className='post2'>
              <div className='overlayPost'>
              </div>
            </div>
          </div>
        </div>                             
      </div>
    );
  }

  changeNav(selec, actual) {
    console.log(`Hola`);
    
    let anterior = document.querySelector(actual);
    anterior.classList.remove('btnNavSelect');
    anterior.classList.add('btnNav');

    let nuevo = document.querySelector(selec);
    nuevo.classList.remove('btnNav');
    nuevo.classList.add('btnNavSelect');

    this.setState({ seleccionado: selec });
    this.props.contenido(selec);
  }

}

export default Principal;