import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Carousel.css';

class Carrusel extends Component {

    constructor(props){
        super(props);
        this.state={
            slide:'.slide1',
            btn:'#btn1'
        }

        this.cambiarSlide = this.cambiarSlide.bind(this);
        this.anteriorSlide = this.anteriorSlide.bind(this);
        this.comenzarSetInterval = this.comenzarSetInterval.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.comenzarSetInterval();
    }

    render() {

        return (
            <div className='marcoCarusel'>
                <div className='imgMovil'></div>
                <div className='marcoSlider'>
                    <div id='slider' className = 'slide1'>
                        <div className='leftArrow' onClick={this.anteriorSlide} >
                            <div className='iconLeftArrow'></div>
                        </div>
                        < div className = 'rightArrow' onClick={this.nextSlide} >
                            <div className='iconRightArrow'></div>
                        </div>
                    </div>
                </div>               
                <div className='marcadores'>
                    <div onClick={() => { this.cambiarSlide('slide1', '#btn1') }} className='marcadorBtn'><div id='btn1' className='btnContenido select'></div></div>
                    <div onClick={() => { this.cambiarSlide('slide2', '#btn2') }} className='marcadorBtn'><div id='btn2' className='btnContenido'></div></div>
                    <div onClick={() => { this.cambiarSlide('slide3', '#btn3') }} className='marcadorBtn'><div id='btn3' className='btnContenido'></div></div>
                    <div onClick={() => { this.cambiarSlide('slide4', '#btn4') }} className='marcadorBtn'><div id='btn4' className='btnContenido'></div></div>
                </div>                 
            </div>
        );
    }

    comenzarSetInterval(){
        var ctx = this;
            setInterval(function () {
                let slider = ctx.state.slide;
                let contenido = document.querySelector('#slider');
                try {                    
                    switch (slider) {
                        case '.slide1':
                            ctx.setState({slide:'.slide2'});
                            contenido.classList.remove('slide1');
                            contenido.classList.add('slide2');
                            let btn1 = document.querySelector('#btn1');
                            let btnNuevo1 = document.querySelector('#btn2');

                                btnNuevo1.classList.add('select');
                                btn1.classList.remove('select');
                            
                            ctx.setState({btn: '#btn2'});

                            break;
                        case '.slide2':
                            ctx.setState({ slide: '.slide3' });   
                            contenido.classList.remove('slide2');
                            contenido.classList.add('slide3');  
                            let btn2 = document.querySelector('#btn2');
                            let btnNuevo2 = document.querySelector('#btn3');

                            btnNuevo2.classList.add('select');
                            btn2.classList.remove('select');        
                            
                            ctx.setState({ btn: '#btn3' });
                            
                            break;
                        case '.slide3':
                            ctx.setState({ slide: '.slide4' });   
                            contenido.classList.remove('slide3');
                            contenido.classList.add('slide4');   
                            
                            let btn3 = document.querySelector('#btn3');
                            let btnNuevo3 = document.querySelector('#btn4');

                            btnNuevo3.classList.add('select');
                            btn3.classList.remove('select');

                            ctx.setState({ btn: '#btn4' });
                            
                            break;
                        case '.slide4':
                            ctx.setState({ slide: '.slide1' });   
                            contenido.classList.remove('slide4');
                            contenido.classList.add('slide1');    
                            
                            let btn4 = document.querySelector('#btn4');
                            let btnNuevo4 = document.querySelector('#btn1');

                            btnNuevo4.classList.add('select');
                            btn4.classList.remove('select');

                            ctx.setState({ btn: '#btn1' });
                            

                            break;
                    
                        default:
                            break;
                    }
                } catch (error) {                    
                }
                }, 10000);                            

    }



    nextSlide(){
        let slider = this.state.slide;
        let contenido = document.querySelector('#slider');
        try {
            switch (slider) {
                case '.slide1':
                    this.setState({ slide: '.slide2' });
                    contenido.classList.remove('slide1');
                    contenido.classList.add('slide2');
                    let btn1 = document.querySelector('#btn1');
                    let btnNuevo1 = document.querySelector('#btn2');

                    btnNuevo1.classList.add('select');
                    btn1.classList.remove('select');

                    this.setState({ btn: '#btn2' });

                    break;
                case '.slide2':
                    this.setState({ slide: '.slide3' });
                    contenido.classList.remove('slide2');
                    contenido.classList.add('slide3');
                    let btn2 = document.querySelector('#btn2');
                    let btnNuevo2 = document.querySelector('#btn3');

                    btnNuevo2.classList.add('select');
                    btn2.classList.remove('select');

                    this.setState({ btn: '#btn3' });

                    break;
                case '.slide3':
                    this.setState({ slide: '.slide4' });
                    contenido.classList.remove('slide3');
                    contenido.classList.add('slide4');

                    let btn3 = document.querySelector('#btn3');
                    let btnNuevo3 = document.querySelector('#btn4');

                    btnNuevo3.classList.add('select');
                    btn3.classList.remove('select');

                    this.setState({ btn: '#btn4' });

                    break;
                case '.slide4':
                    this.setState({ slide: '.slide1' });
                    contenido.classList.remove('slide4');
                    contenido.classList.add('slide1');

                    let btn4 = document.querySelector('#btn4');
                    let btnNuevo4 = document.querySelector('#btn1');

                    btnNuevo4.classList.add('select');
                    btn4.classList.remove('select');

                    this.setState({ btn: '#btn1' });


                    break;

                default:
                    break;
            }
        } catch (error) {
        }
    }
    anteriorSlide(){
        let slider = this.state.slide;
        let contenido = document.querySelector('#slider');
        try {
            switch (slider) {
                case '.slide1':
                    this.setState({ slide: '.slide4' });
                    contenido.classList.remove('slide1');
                    contenido.classList.add('slide4');
                    let btn1 = document.querySelector('#btn1');
                    let btnNuevo1 = document.querySelector('#btn4');

                    btnNuevo1.classList.add('select');
                    btn1.classList.remove('select');

                    this.setState({ btn: '#btn4' });

                    break;
                case '.slide2':
                    this.setState({ slide: '.slide1' });
                    contenido.classList.remove('slide2');
                    contenido.classList.add('slide1');
                    let btn2 = document.querySelector('#btn2');
                    let btnNuevo2 = document.querySelector('#btn1');

                    btnNuevo2.classList.add('select');
                    btn2.classList.remove('select');

                    this.setState({ btn: '#btn1' });

                    break;
                case '.slide3':
                    this.setState({ slide: '.slide2' });
                    contenido.classList.remove('slide3');
                    contenido.classList.add('slide2');

                    let btn3 = document.querySelector('#btn3');
                    let btnNuevo3 = document.querySelector('#btn2');

                    btnNuevo3.classList.add('select');
                    btn3.classList.remove('select');

                    this.setState({ btn: '#btn2' });

                    break;
                case '.slide4':
                    this.setState({ slide: '.slide3' });
                    contenido.classList.remove('slide4');
                    contenido.classList.add('slide3');

                    let btn4 = document.querySelector('#btn4');
                    let btnNuevo4 = document.querySelector('#btn3');

                    btnNuevo4.classList.add('select');
                    btn4.classList.remove('select');

                    this.setState({ btn: '#btn3' });


                    break;

                default:
                    break;
            }
        } catch (error) {
        }
    }

    cambiarSlide(nuevoSlider, nuevoBtn){        

        let slider = this.state.slide;
        let sliderDelete;

        switch (slider) {
            case '.slide1':
                sliderDelete = 'slide1'
                break;
            case '.slide2':
                sliderDelete = 'slide2'
                break;
            case '.slide3':
                sliderDelete = 'slide3'
                break;
            case '.slide4':
                sliderDelete = 'slide4'
                break;
        
            default:
                break;
        }

        let contenido = document.querySelector('#slider');
        let btnS = document.querySelector(this.state.btn);
        let nuevo = document.querySelector(nuevoBtn);

        this.setState({ slide: `.${nuevoSlider}`});
        this.setState({ btn: nuevoBtn});

        contenido.classList.remove(sliderDelete);
        contenido.classList.add(nuevoSlider);

        btnS.classList.remove('select');
        nuevo.classList.add('select');

    }

};

export default Carrusel;
 