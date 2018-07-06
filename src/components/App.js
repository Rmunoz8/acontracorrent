import React, { Component } from 'react';
import '../css/App.css';
import Topbar from './Topbar';
import Principal from './Principal';
import Footer from './Footer';
import Futbol from './Futbol';
import Voluntarios from './Voluntarios';
import SubirScroll from './SubirScroll';

window.onscroll = function (e) {
} 
class App extends Component {

  constructor(){
    super();
    this.state={
      seleccionado:'#principal',
      scroll:0
    }

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
      case '#colabora':
        contenido = this.mostrarVoluntarios();
        break;
    
      default:
        break;
    }    

    return (
      <div onResize={this.cambioPantalla} className="App" onScroll={this.eventScroll} >
        <Topbar scroll={this.state.scroll} contenido={this.changeContenido}/>
        {contenido}
        <SubirScroll subirScroll={this.subirScroll}/>
        <Footer/>
        <div id='voluntarios' ></div>
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

  eventScroll(){
    let padre = document.querySelector('.App');
    let valorScroll = padre.scrollTop;

    this.setState({scroll: valorScroll});    
  }

}

export default App;
