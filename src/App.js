import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Buy } from "./pages/Buy";
import { Sale } from "./pages/Sale";
import { Verifier } from "./pages/Verifier";
import { PageNotFound } from "./pages/PageNotFound";
import Layout from "../src/hoc/Layout/Layout";
// import ProtectedRoutes from "./ProtectedRoutes";

class App extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Routes>
            {/* <Route element={<ProtectedRoutes />}></Route> */}
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Verifier" element={<Verifier />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      </Layout>
    );
  }
}

export default App;
