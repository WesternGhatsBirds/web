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
    console.log('IN COMPONENT DID MOUNT', this.props);
    this.plot(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('IN COMPONENT WILL RECEIVE PROPS', nextProps);
    this.plot(nextProps);
  }

  plot(props) {
    let handle = props.handle,
      data = props.data,
      layout = props.layout;
    Plotly.plot(handle, data, layout);
  }

  render() {
    return (
      <div id={this.props.handle}>Plot</div>
    );
  }
}

export default Plot;