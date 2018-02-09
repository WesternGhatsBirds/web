import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const http = require('http')

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openingMessage: "Unchanged message"
    };
  }

  componentDidMount() {
    var body = "";
    let x = this;
    http.get({ hostname: 'localhost', port: 3001, path: '/openingMessage', agent: false }, 
      (res) => {
        res.on('readable', function() {
            body += res.read();
        });
        res.on('end', function() {
          console.log(body);
          console.log(body);
          x.setState({openingMessage:body})
        }); 
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <code>{this.state.openingMessage}</code>
        </p>
      </div>
    );
  }
}

export default App;
