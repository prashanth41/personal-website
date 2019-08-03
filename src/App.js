import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Bookshelf from "./components/Bookshelf";
import People from "./components/People";
import Error from "./components/Error";
import Navbar from "./layout/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="main">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/people" component={People} />
              <Route exact path="/bookshelf" component={Bookshelf} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
