import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/homePage/Home";
import About from "./views/aboutPage/About";
import Service from "./views/servicePage/Service";
import Contact from "./views/contactPage/Contact";
import Register from "./views/registerPage/Register";
import Login from "./views/loginPage/Login";
import NotFound from "./views/notFoundPage/NotFound";
import Order from "./views/orderPage/Order";


const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </div>
  );
};

export default App;
