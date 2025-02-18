import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import AdminDash from "./admin/AdminDash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div id="home">
                  <Header />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="about">
                  <AboutUs />
                </div>
                <div id="contact">
                  <Contact />
                </div>
              </>
            }
          />

          <Route
            path="/admin"
            element={
              <>
                <AdminDash />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
