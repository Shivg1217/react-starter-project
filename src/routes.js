import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import Landing from "./pages/landing";

const AppRoute = () => {
  return (
    <Fragment>
      <Loader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
