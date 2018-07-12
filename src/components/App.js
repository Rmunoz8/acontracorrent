import React, { Component } from 'react';
import '../css/App.css';
import Topbar from './Topbar';
import Principal from './Principal';
import Footer from './Footer';
import Futbol from './Futbol';
import Voluntarios from './Voluntarios';
import SubirScroll from './SubirScroll';
import Socios from './Socios';
import Contacto from './Contacto';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';

window.onscroll = function (e) {
} 
class App extends Component {

  constructor(){
    super();
    this.state={
      seleccionado:'#principal',
      scroll:0
    }

    this.mostrarContacto = this.mostrarContacto.bind(this);
    this.mostrarSocios = this.mostrarSocios.bind(this);
    this.cambioPantalla = this.cambioPantalla.bind(this);
    this.subirScroll = this.subirScroll.bind(this);
    this.mostrarVoluntarios = this.mostrarVoluntarios.bind(this);
    this.montarFutbol = this.montarFutbol.bind(this);
    this.eventScroll = this.eventScroll.bind(this);
    this.montarPrincipal = this.montarPrincipal.bind(this);
    this.changeContenido = this.changeContenido.bind(this);

  }

  render() {

    let contenido;
    
    switch (this.state.seleccionado) {
      case '#principal':
        contenido = this.montarPrincipal();
        break;
      case '#futbol':
        contenido = this.montarFutbol();
        break;
      case '#voluntario':
        contenido = this.mostrarVoluntarios();
        break;
      case '#socio':
        contenido = this.mostrarSocios();
        break;

      case '#contactanos':
        contenido = this.mostrarContacto();
        break;
    
      default:
        contenido = this.montarPrincipal();
        break;
    }    

    return (
      <div onResize={this.cambioPantalla} className="App" onScroll={this.eventScroll} >
        <Topbar scroll={this.state.scroll} contenido={this.changeContenido}/>
        {contenido}
        <SubirScroll scroll={this.state.scroll} subirScroll={this.subirScroll}/>
        <Footer/>
        <div id='voluntarios' ></div>
        <Twitter/>
        <Facebook/>
        <Instagram/>
      </div>
    );
  }

  cambioPantalla(){
      console.log('Prueba');
      
  }

  subirScroll(){
    let padre = document.querySelector('.App');
    padre.scroll(0,0);
    this.setState({scroll: 0});
  }

  changeContenido(valor){  
    console.log(`Contenido${valor}`);
     
    this.subirScroll(); 
    this.setState({seleccionado:valor});
  }

  montarPrincipal(){
    return <Principal contenido={this.changeContenido}/>
  }
  montarFutbol(){
    return <Futbol/>
  }

  mostrarVoluntarios(){
    return <Voluntarios/>
  }

  mostrarContacto(){
    return <Contacto/>
  }

  mostrarSocios(){
    return <Socios/>
  }

  eventScroll(){
    let padre = document.querySelector('.App');
    let valorScroll = padre.scrollTop;

    this.setState({scroll: valorScroll});    
  }

}

export default App;
