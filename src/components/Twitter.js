import React, { Component } from 'react';
import '../css/Twitter.css';
import { Timeline, Follow, Mention } from 'react-twitter-widgets';

class Twitter extends Component {

    constructor(props){
        super(props);
        this.state={
            open: true,
            social: 'face'
        }
        this.abrirTL = this.abrirTL.bind(this);
    }

    render() {

        return (
                <div className='zonaTL'>
                    <div className='marcoTl'>
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'AContraEspAdap'
                            }}
                            options={{
                                username: '@AContraEspAdap',
                                height: '400',
                                width: '360'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                        <Follow username='AContraEspAdap' />
                        <Mention
                            username='@AContraEspAdap'
                            options={{ size: "large" }}
                        />
                    </div>
                    <div data-tip="Twitter" onClick={()=>{
                        this.abrirTL('twitter');
                    }} className='flechaTwitter'><div className='iconoTL'></div></div>
                </div>
        );
    }

    abrirTL(red){

        let tl = document.querySelector('.zonaTL');
        let flechaT = document.querySelector('.flechaTwitter');

        this.setState({social: red});

        this.setState({open: !this.state.open});
        if(this.state.open){
            flechaT.style.left = 'calc(100% - 435px)';
            tl.style.left = 'calc(100% - 385px)';
            tl.style.zIndex = '5';
        }else{
            flechaT.style.left = 'calc(100% - 50px)';
            tl.style.left = "100%";
            tl.style.zIndex = '0';
        }

    }

};

export default Twitter;