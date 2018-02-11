import React, {Component} from "react";
import "./App.css";
import Plot from './chart/PlotlyComponent'
const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {
        data: [],
        layout: {}
      }
    };
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT OF APP");
    axios.get('http://localhost:3001/map/data')
      .then((res) => {
        // if (err) {
        //   console.log(err);
        //   return err;
        // }
        console.log(res);
        this.setState({ map: { data: res.data.data, layout: res.data.layout } });
        console.log("THE REQUEST")
      });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <code>Birds</code>
        </p>
        <div>
          <Plot handle="map" data={this.state.map.data} layout={this.state.map.layout}/>
        </div>
      </div>
    );
  }
}

export default App;
