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
      data: []
    };
  }

  componentWillMount() {
    axios.get(AppConstants.SERVER_URL(this.props.source))
      .then((res) => {
        this.setState({data: res.data.data});
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