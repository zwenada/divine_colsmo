import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import AdminDash from "./admin/AdminDash";

const App = () => {
  return (
    <Router>
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
              <Footer />
            </>
          }
        />
        
        {/* Admin Dashboard Route */}
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    </Router>
  );
};

export default App;
