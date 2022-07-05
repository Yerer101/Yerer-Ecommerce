import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Sale } from "./pages/Sale";
import { Verifier } from "./pages/Verifier";
import { PageNotFound } from "./pages/PageNotFound";
import Layout from "../src/hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/verifier" element={<Verifier />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      </Layout>
    );
  }
}

export default App;
