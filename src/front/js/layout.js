import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Hotels } from "./pages/hotels";
import { Flights } from "./pages/flights";
import { Restaurants } from "./pages/restaurants";
import { Trip } from "./pages/trip";
import { Userview } from "./pages/user view";
import { Demo } from "./pages/demo";
import { Resetpass } from "./pages/resetpass";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Modal } from "./component/Modal.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Flights />} path="/flights" />
            <Route element={<Hotels />} path="/hotels" />
            <Route element={<Restaurants />} path="/restaurants" />
            <Route element={<Trip />} path="/trip" />
            <Route element={<Userview />} path="/userview" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Resetpass />} path="/resetpass" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
