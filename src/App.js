import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Menu from "./layout/Menu";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main-body">
          <Home />
        </div>
        
        <Menu />
      </div>
    );
  }
}

export default App;
