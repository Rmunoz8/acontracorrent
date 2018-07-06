import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';

import '../css/SubirScroll.css';

class SubirScroll extends Component {

    constructor(props){
        super(props);
    }

    render() {
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