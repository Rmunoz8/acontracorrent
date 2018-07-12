import React, { Component } from 'react';
import '../css/Twitter.css';
import InstagramEmbed from 'react-instagram-embed';

class Instagram extends Component {

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
            <div className='zonaInsta'>
                <div className='martoTl'>
                    <InstagramEmbed
                        url='https://www.instagram.com/p/BkvWMGQh14c/?utm_source=ig_web_copy_link'
                        maxWidth={320}
                        hideCaption
                        containerTagName='div'
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onFailure={() => { }}
                    />
                </div>
                <div data-tip="Instagram" onClick={() => {
                    this.abrirTL('face')
                }} className='flechaInsta'><div className='iconoInsta'></div></div>
            </div>
        );
    }

    abrirTL(red) {

        let tl = document.querySelector('.zonaInsta');
        let flechaT = document.querySelector('.flechaInsta');

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

export default Instagram;