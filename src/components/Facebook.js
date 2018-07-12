import React, { Component } from 'react';
import '../css/Twitter.css';
import FacebookProvider, { Page } from 'react-facebook';

class Facebook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            social: 'face'
        }
        this.abrirTL = this.abrirTL.bind(this);
    }

    render() {

        return (
            <div className='zonaPage'>
                 <div className='martoTl'>
                     <FacebookProvider appId="2620828911475530">
                         <Page href="https://www.facebook.com/AcontracorrentEsportAdaptat/" tabs="timeline" />
                     </FacebookProvider> 
                 </div>
                <div data-tip="Facebook" onClick={() => {
                    this.abrirTL('face')
                }} className='flechaFacebook'><div className='iconoFace'></div></div>
            </div>
        );
    }

    abrirTL(red) {

        let tl = document.querySelector('.zonaPage');
        let flechaT = document.querySelector('.flechaFacebook');

        this.setState({ social: red });

        this.setState({ open: !this.state.open });
        if (this.state.open) {
            flechaT.style.left = 'calc(100% - 435px)';
            tl.style.left = 'calc(100% - 385px)';
            tl.style.zIndex = '5';
        } else {
            flechaT.style.left = 'calc(100% - 50px)';
            tl.style.left = "100%";
            tl.style.zIndex = '0';
        }

    }

};

export default Facebook;