import React, {Component} from "react";
import "./App.css";
import BirdsMap from "./map/BirdsMap";
import BirdsMapG from "./map/BirdsMapG";
import { Navbar, NavbarBrand } from 'reactstrap';

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
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Birds Of the Western Ghats</NavbarBrand>
        </Navbar>
        <BirdsMapG source={'/map/data'}/>
        {/*<BirdsMap source={'/map/data'}/>*/}
      </div>
    );
  }
}

export default App;
