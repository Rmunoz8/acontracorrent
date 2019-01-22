import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Voluntarios.css';

class Voluntarios extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.changeNav = this.changeNav.bind(this);

    }
    render() {
        return (
            <div className='marcoVoluntarios'>
                <div className='tituloFutbol'>COLABORA CON NOSOTROS</div> 
                <div className='voluntariosParalax'></div>                
                        <div className='infoInicialVoluntario'>Si quieres colaborar con nosotros para ayudarnos a llevar a cabo nuestros proyectos de deporte adaptado, ¡NECESITAMOS VOLUNTARI@S!. Es tan fácil como orientar a los participantes dentro de las actividades, controlar que no se despisten y ayudarles cuando se vean en situaciones complicadas. ¡Con la ayuda de todos conseguiremos una actividad divertida en la que podamos disfrutar del deporte, tanto los niños como los técnicos y voluntarios! Ponte en contacto con  nosotros.
                            <div className='bloqueInfo'>
                                {/* <div className='zonaInfo'>
                                    <div>Correo: </div>
                                    <div>info@acontracorrent.es</div>      
                                </div>
                                <div className='zonaInfo'>
                                    <div>Teléfono: </div>
                                    <div>687635043/687084621</div>  
                                </div> */}
                        <div className='resaltar' onClick={() => { this.changeNav("#futbol", '#principal') }}>¡TE INFORMAREMOS DE TODO!</div>
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
};

export default Voluntarios;