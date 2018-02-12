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
        <BirdsMap source={'/map/data'}/>
      </div>
    );
  }
}

export default App;
