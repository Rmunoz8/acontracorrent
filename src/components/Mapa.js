import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import MyGreatPlace from '.'


const AnyReactComponent = ({ text }) => (
    <div style={{
        color: '#636363',
        background: '#c2e76b',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        // transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 39.5493121,
            lng: -0.3834209
        },
        zoom: 17
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDBLNxIZ5KchYhUqE7a3mvhYBG4dWoKdcE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={39.5493121}
                        lng={-0.3834209}
                        text={'Instalaciones CEU Esports Area'}
                        zoom={17}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;