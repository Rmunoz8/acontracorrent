import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Menu.css';

class Menu extends Component {

    constructor(props){
        super(props)
    }

    render() {
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
                    <div className='zonaOpcionesMenu'>
                        <div className='optNav'><div className='optNavTitulo' >PRINCIPAL</div></div>
                        <div className='optNav'>
                            <div className='optNavTitulo'>ACTIVIDADES</div></div>
                        <div className='optNav'>
                            <div className='optNavTitulo'>COLABORA!</div></div>
                        <div className='optNav'><div className='optNavTitulo' >CONTÁCTANOS</div></div>
                    </div>
                    {/* <div className='zonaOptDropMenu'>
                        <div className='optDropActividades'><div className='franjaMenu'>VOLUNTARIADO</div></div>
                        <div className='optDropActividades'><div className='franjaMenu'>HAZTE SOCIO!</div></div>
                        <div className='optDropActividades'><div className='franjaMenu'>FÚTBOL</div></div>
                        <div className='optDropActividades'><div className='franjaMenu'>ESCALADA</div></div>
                        <div className='optDropActividades'><div className='franjaMenu'>JUDO</div></div>
                    </div> */}
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