import React from "react";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import PropTypes from "prop-types";
import AppConstants from "./../AppConstants.js";
const axios = require('axios');

const coords = {
  lat: 12.976135,
  lng: 77.592775
};

const params = {v: '3.exp', key: 'AIzaSyBG36q3XSaDuCnh91Nckhjzos8vyd1NNb8'};

class BirdsMapG extends React.Component {

  static propTypes = {
    source: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      points: []
    };
  }

  componentWillMount() {
    axios.get(AppConstants.SERVER_URL(this.props.source))
      .then((res) => {
        this.setState({points: res.data.points});
      });
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={8}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {this.state.points.map((item, index) => {
          return(<Marker
            lat={item.lat}
            lng={item.lon}
            draggable={true}
            onDragEnd={this.onDragEnd} />)
        })}
        {/*<InfoWindow*/}
          {/*lat={coords.lat}*/}
          {/*lng={coords.lng}*/}
          {/*content={'Hello, React :)'}*/}
          {/*onCloseClick={this.onCloseClick} />*/}
        {/*<Circle*/}
          {/*lat={coords.lat}*/}
          {/*lng={coords.lng}*/}
          {/*radius={500}*/}
          {/*onClick={this.onClick} />*/}
      </Gmaps>
    );
  }
}

export default BirdsMapG;