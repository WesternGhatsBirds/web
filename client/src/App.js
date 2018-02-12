import React, {Component} from "react";
import "./App.css";
import BirdsMap from "./map/BirdsMap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {

    return (
      <div className="App">
        <p className="App-intro">

        </p>
        <div><BirdsMap/></div>
      </div>
    );
  }
}

export default App;
