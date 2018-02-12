import React from "react";
import Plot from './Plot'
import PropTypes from "prop-types";
import AppConstants from "./../AppConstants.js";
import BirdsMapConstants from "./BirdsMapConstants"
const axios = require('axios');

class BirdsMap extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          lat: [],
          lon: [],
          text: [],
          type: 'scattergeo',
          mode: 'markers+text',
        }
      ]
    };
  }

  componentWillMount() {
    axios.get(AppConstants.SERVER_URL(this.props.source))
      .then((res) => {
        let currentData = this.state.data;
        let coordinatePoints = res.data.points;
        let lats = [];
        let lons = [];
        let tags = [];
        while (coordinatePoints.length > 0) {
          let coordinate = coordinatePoints.pop();
          lats.push(coordinate.lat);
          lons.push(coordinate.lon);
          tags.push(coordinate.tag);
        }
        currentData[0].lat = lats;
        currentData[0].lon = lons;
        currentData[0].text = tags;
        this.setState({data: currentData});
      });
  }

  render() {
    return (
      <div>
        <Plot handle="map" data={this.state.data} layout={BirdsMapConstants.LAYOUT}/>
      </div>
    );
  }
}

export default BirdsMap;