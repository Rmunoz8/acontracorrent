import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
            <div className='zonaAgradecimientos'>
                <div className='tituloAgradecimientos'>AGRADECIMIENTOS</div>
                <div className='zonaPatrocinadores'>
                    <div className='patro2'></div>
                    <div className='patro1'></div>
                    <div className='patro3'></div>
                </div>
            </div>
                <div className='zonaContacto'>
                    <div className='imgContacto'></div>
                    <div className='bloqueContacto'>
                        <div className='tituloContacto'>CONTACTANOS</div>
                        <div className='datosContacto'>
                            <div>Email: info.acontracorrentasociacion@gmail.com</div>
                            <div>Teléfono:  687635043  /  687084621</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;