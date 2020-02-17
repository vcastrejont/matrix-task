import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Vehicle from "./pages/Vehicle";
import Returning from "./pages/Returning";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/vehicle">
          <Vehicle />
        </Route>
        <Route path="/returning">
          <Returning />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
