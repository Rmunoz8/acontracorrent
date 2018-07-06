import React, { Component } from 'react';
import '../css/Topbar.css';
import Carrusel from './Carousel';
import ReactTooltip from 'react-tooltip';
import Menu from './Menu';

class Torbar extends Component {

  constructor(props){
    super(props);
    this.state={
      seleccionado: '#op1',
      menu:1
    };

    this.accionMenu = this.accionMenu.bind(this);
    this.changeNav = this.changeNav.bind(this);
    try {
      // let padre = document.querySelector('#App');
      let ancho = window.offsetWidth;
      console.log(`Ancho->${ancho}`);
    } catch (error) {
      console.log(error);

    }

  }

  render() {

    try {
      let topBar = document.querySelector('#topBar');
      let tituloTopBar = document.querySelector('#tituloTopBar');
      let twitter = document.querySelector('#twitter');
      let facebook = document.querySelector('#facebook');
      let instagram = document.querySelector('#instagram');
      let marcoBotones = document.querySelector('#marcoBtnNav');
      let dropBox = document.querySelector('#dropBox');
      
      if (this.props.scroll >= 400) {
        topBar.classList.remove('topBar');
        topBar.classList.add('topBarN');

        tituloTopBar.classList.remove('tituloTopBar');
        tituloTopBar.classList.add('tituloTopBarN');

        marcoBotones.classList.remove('marcoBtnNav');
        marcoBotones.classList.add('marcoBtnNavN');

        dropBox.classList.remove('dropBox');
        dropBox.classList.add('dropBoxN')

      } else {
        topBar.classList.remove('topBarN');
        topBar.classList.add('topBar');

        tituloTopBar.classList.remove('tituloTopBarN');
        tituloTopBar.classList.add('tituloTopBar');

        marcoBotones.classList.remove('marcoBtnNavN');
        marcoBotones.classList.add('marcoBtnNav');

        dropBox.classList.remove('dropBoxN');
        dropBox.classList.add('dropBox')

      }
      
    } catch (error) {
      
    }

    

    return (
      <div>
        <ReactTooltip place="bottom" type="dark" effect="solid" />
        <div id='topBar' className="topBar">
          <div id='tituloTopBar' className='tituloTopBar' onClick={()=>{this.changeNav("#op1")}} ></div>
            {/* <div className='redesSociales'>
              <div onClick={this.toTwitter} data-tip="Twitter" id='twitter' className='twitter'></div>
              <div onClick={this.toFacebook} data-tip="Facebook" id='facebook' className='facebook'></div>
              <div onClick={this.toInstagram} data-tip="Instagram" id='instagram' className='instagram'></div>
            </div> */}

          <div id='marcoBtnNav' onClick={this.accionMenu} className='menuHamb'></div>       

            {/* <div id='marcoBtnNav' className='marcoBtnNav'>
              <div id='op1' onClick={()=>{this.changeNav("#op1")}} className='btnNavSelect'>INICIO</div>
              <div id='op2' className='btnNavDesplegable'>ACTIVIDADES
                <div id='dropBox' className='dropBox'>
                    <div className='marcoOptDropBox'>
                  <div className='optDropBox' id='futbol' onClick={() => { this.changeNav("#futbol") }}>Fútbol Adaptado</div>
                    </div>
              </div></div>
              <div id='op3' onClick={()=>{this.changeNav("#op3")}} className='btnNav'>CONTACTO</div>
            </div>        */}
        </div>
        <div className='zonaCarousel'><Carrusel /></div>   
        <Menu changeNav={(select)=>{
          this.changeNav(select)
        }} accionMenu={this.accionMenu} />
      </div>
    );
  }

  accionMenu(){

    let ancho = document.querySelector('.App').offsetWidth;

    console.log(`Ancho ${ancho}`);
    


    let menuApp = document.querySelector('.marcoMenu');
    let menuImg = document.querySelector('.imgMenu');

    if(ancho >= 1000){
      if (this.state.menu === 0) {
        this.setState({ menu: 1 });
        menuApp.style.left = '50%';
        menuImg.style.left = '0%';
      } else {
        this.setState({ menu: 0 });
        menuImg.style.left = '-50%';
        menuApp.style.left = '100%';
      }
    }else{
      if (this.state.menu === 0) {
        this.setState({ menu: 1 });
        menuApp.style.left = '0%';
      } else {
        this.setState({ menu: 0 });
        menuApp.style.left = '100%';
      }

    }


  }

  changeNav(selec){
        console.log(`Select!! Funcionas->${selec}`);
        
        // let anterior = document.querySelector(this.state.seleccionado);
        //     anterior.classList.remove('btnNavSelect');
        //     anterior.classList.add('btnNav');

        // let nuevo = document.querySelector(selec);
        //     nuevo.classList.remove('btnNav');
        //     nuevo.classList.add('btnNavSelect');

        // this.setState({seleccionado: selec});      
        this.props.contenido(selec);  
  }

}

export default Torbar;