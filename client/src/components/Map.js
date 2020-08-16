import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.9908997,
      lng: 23.70332
    },
    zoom: 12
  };

  render() {
    return (
      <div style={{ height: '700px', width: '800px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD1ngvuac07TSdSVKpvctQS-wwHkwa4FO8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.9908997}
            lng={23.70332}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;