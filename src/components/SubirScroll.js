import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import '../css/SubirScroll.css';

class SubirScroll extends Component {

    constructor(props){
        super(props);
    }

    render() {

        try {
            let boton = document.querySelector('.marcoScroll');
            console.log(`Scroll->${this.props.scroll}`);
            
            if (this.props.scroll >= 400) {
                boton.style.right = '50px';
            } else {
                boton.style.right = '-55px';
            }

        } catch (error) {

        }

        return (
            <div className='marcoScroll' data-tip="Volver al principio" onClick={()=>{
                this.props.subirScroll();
            }} >
                <div className='scroll'>
                </div>
                <ReactTooltip place="bottom" type="dark" effect="solid" />
            </div>
        );
    }
};

export default SubirScroll;