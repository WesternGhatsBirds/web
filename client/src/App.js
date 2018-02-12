import React, {Component} from "react";
import "./App.css";
import BirdsMap from "./map/BirdsMap";
import BirdsMapG from "./map/BirdsMapG";

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
        <BirdsMapG source={'/map/data'}/>
        <BirdsMap source={'/map/data'}/>
      </div>
    );
  }
}

export default App;
