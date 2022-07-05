import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Sale } from "./pages/Sale";
import { PageNotFound } from "./pages/PageNotFound";
import Layout from "../src/hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Routes>
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      </Layout>
    );
  }
}

export default App;
