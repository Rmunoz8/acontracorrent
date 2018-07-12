import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Contacto.css';
import { Timeline, Follow, Mention } from 'react-twitter-widgets';
import InstagramEmbed from 'react-instagram-embed';

class Contacto extends Component {
    render() {

        let inst = '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Bk5VrSHBg83/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:37.4537037037037% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/Bk5VrSHBg83/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">No hay que ponerse límites a nada, y eso es lo que hacemos, soñar, y seguir trabajando para poder llegar hacer esto realidad. ¡SÍGUENOS! #futboladaptado #deporteadaptado #campeones #acontracorrentesportadaptat #inclusion #inclusiondeporteadaptado #disability #diversidadfuncional #framefootball #acontracorrentframefootball</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Una publicación compartida de <a href="https://www.instagram.com/acontracorrentesportadaptat/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Acontracorrent</a> (@acontracorrentesportadaptat) el <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-07-06T15:52:33+00:00">6 Jul, 2018 a las 8:52 PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>'
        
        return (
            <div className='marcoContacto'>
                <div className='contactoParalax'></div>  
                <div className='zonaTextContacto'>
                    <div className='zonaCorreo'>Email: info.acontracorrentasociacion@gmail.com</div>
                    <div className='zonaTel'>Teléfono: 687635043 / 687084621</div>
                </div>
                {/* <div className='zonaTL'>
                    <div className='marcoTl'>
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'AContraEspAdap'
                            }}
                            options={{
                                username: '@AContraEspAdap',
                                height: '600',
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
                    <div className='flechaTwitter'><div className='iconoTL'></div></div>
                </div> */}
            </div>
        );
    }
};

export default Contacto;