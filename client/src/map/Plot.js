import PropTypes from "prop-types";
import Plotly from "plotly.js";
import React from "react";

class Plot extends React.Component {
  static propTypes = {
    handle: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    layout: PropTypes.object
  };

  componentDidMount() {
    this.plot(this.props);
  }

  componentDidUpdate(){
    this.plot(this.props);
  }

  plot(props) {
    let handle = props.handle,
      data = props.data,
      layout = props.layout;
    Plotly.plot(handle, data, layout);
  }

  render() {
    return (
      <div id={this.props.handle}/>
    );
  }
}

export default Plot;