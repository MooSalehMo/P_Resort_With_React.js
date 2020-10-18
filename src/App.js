import React, { Component, Fragment } from "react";
import { Route, Switch} from "react-router-dom";
import "./App.sass";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/room/:slug" component={SingleRoom} />
            <Route component={Error} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

// Ended at mument 46 