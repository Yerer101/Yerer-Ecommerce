import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Sale } from "./pages/Sale";
import { Verifier } from "./pages/Verifier";
import { NotFound } from "./pages/NotFound";
import Layout from "../src/hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Routes>
            <Route path="/" component={<Home />} />
            <Route path="/buy" component={<Buy />} />
            <Route path="/sale" component={<Sale />} />
            <Route path="/verifier" component={<Verifier />} />
            <Route component={<NotFound />} />
          </Routes>
        </React.Fragment>
      </Layout>
    );
  }
}

export default App;
