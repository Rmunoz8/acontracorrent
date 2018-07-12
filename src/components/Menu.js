import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Menu.css';

class Menu extends Component {

    constructor(props){
        super(props)
        this.state = {
            dropMenu: 'actividades',
            dropBoxSeleccionado: false
        }

        this.optSeleccionada = this.optSeleccionada.bind(this);
        this.dropBoxAction = this.dropBoxAction.bind(this);
    }

    render() {
        
        let contenidoDropBox;

        switch (this.state.dropMenu) {
            case 'actividades':
                
                contenidoDropBox = <div className='zonaOptDropMenu'>
                                         <div className='optDropActividades' onClick={()=>{
                                            this.optSeleccionada('futbol');
                                            }} >
                                            <div className='franjaMenu'>FRAME.FOOTBALL</div></div>
                                         {/* <div className='optDropActividades'><div className='franjaMenu'>ESCALADA</div></div>
                                         <div className='optDropActividades'><div className='franjaMenu'>JUDO</div></div> */}
                                    </div>

                break;
            case 'colabora':
                
                contenidoDropBox = <div className='zonaOptDropMenu'>
                                        <div className='optDropActividades' onClick={() => {
                                            this.optSeleccionada('voluntario');
                                        }} ><div className='franjaMenu'>VOLUNTARIADO</div></div>
                                        <div className='optDropActividades'
                                            onClick={() => {
                                                this.optSeleccionada('socio');
                                            }}
                                        ><div className='franjaMenu'>HAZTE.SOCIO!</div></div>
                                    </div>

                break;
        
            default:
                break;
        }

        return (
            <div className='marcoMenu'>
                <div className='cerrarMenu'>
                    <div className='marcoLogoMenu'>
                        <div className='logoManu'></div>
                    </div>
                    <div className='iconoCerrar' onClick={()=>{
                        this.props.accionMenu();
                    }} ></div>
                </div>
                <div className='navegacion'>
                    <div className='selectLineMenu'><div className='identSelectMenu'></div></div>
                    <div className='zonaOpcionesMenu'>
                        <div className='optNav'><div className='optNavTitulo' onClick={()=>{
                            this.optSeleccionada('principal')
                        }} >PRINCIPAL</div></div>
                        <div className='optNav'>
                            <div className='optNavTitulo' onClick={()=>{
                                this.dropBoxAction('actividades');
                                this.optSeleccionada('actividades');
                            }} >ACTIVIDADES</div></div>
                        <div className='optNav'>
                            <div className='optNavTitulo' onClick={()=>{
                                this.dropBoxAction('colabora');
                                this.optSeleccionada('colabora');
                            }} >COLABORA!</div></div>
                        <div className='optNav' onClick={()=>{
                            this.optSeleccionada('contactanos');
                        }} ><div className='optNavTitulo' >CONTÁCTANOS</div></div>
                    </div>
                    {contenidoDropBox}
                </div>
                <div className='redesSociales'>
                    <div onClick={this.toTwitter} data-tip="Twitter" id='twitter' className='twitter'></div>
                    <div onClick={this.toFacebook} data-tip="Facebook" id='facebook' className='facebook'></div>
                    <div onClick={this.toInstagram} data-tip="Instagram" id='instagram' className='instagram'></div>
                </div>
                <div className='imgMenu'>
                </div>
            </div>
        );
    }

    optSeleccionada(select){

        let seleccionador = document.querySelector('.identSelectMenu');
        this.props.changeNav(`#${select}`);
        switch (select) {
            case 'principal':
                seleccionador.style.marginTop = '0px';
                var dropBox = document.querySelector('.zonaOptDropMenu').style.opacity = '0';
                setTimeout(() => {
                    this.props.accionMenu();
                }, 500);
                break;
            case 'actividades':
                seleccionador.style.marginTop = '61px';
                var dropBox = document.querySelector('.zonaOptDropMenu').style.opacity = '1';

                break;
            case 'colabora':
                seleccionador.style.marginTop = '122px';
                var dropBox = document.querySelector('.zonaOptDropMenu').style.opacity = '1';
                
                break;
            case 'contactanos':
                seleccionador.style.marginTop = '183px';
                var dropBox = document.querySelector('.zonaOptDropMenu').style.opacity = '0';
                setTimeout(() => {
                    this.props.accionMenu();
                }, 500);
                
                break;
        
            default:
                setTimeout(() => {
                    this.props.accionMenu();
                }, 500);
                var dropBox = document.querySelector('.zonaOptDropMenu').style.opacity = '0';
                break;
        }

    }

    dropBoxAction(select){
        this.setState({dropMenu: select});
    }

    toTwitter() {
        window.open('https://twitter.com/@AContraEspAdap');
    }

    toFacebook() {
        window.open('https://t.co/njmwiDwViu?ssr=true');
    }

    toInstagram() {
        window.open('https://t.co/xjS7FjNviN?ssr=true');
    }
};

export default Menu;