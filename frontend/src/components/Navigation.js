import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";
import "../styles/components/Navigation.css";
import Register from "../views/registerPage/Register";

const Navigation = () => {
    // State variables
    const [click, setClick] = useState(false);
    
  return (
    <section className="header-container">
      <nav className="navigation-bar">

        <div className="logo-container">
            <div> <NavLink to="/" className="logo-text"> Lisa</NavLink></div>
            <div> <NavLink to="/"><img className="logo" src={logo} alt="Logo of LisaConsult" /> </NavLink></div>
            <div> <NavLink to="/" className="logo-text"> Restaurant </NavLink></div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <NavLink to="/" className="nav-links" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem", pointerEvents: isActive && "none"})}> Home </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/about" className="nav-links" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem",pointerEvents: isActive && "none"})}> About </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/service" className="nav-links" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem", pointerEvents: isActive && "none"})}> Service </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/contact" className="nav-links" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem", pointerEvents: isActive && "none"})}> Contact </NavLink>
            </li>

        </ul>
        
        
        <div className="login-register-container">

          <button className='login'>
            <NavLink to="/login" className="login-link" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem", pointerEvents: isActive && "none"})}> Login </NavLink>
          </button> |

          <button className='register'> 
            <NavLink to="/register" className="register-link" style={({ isActive }) => ({
                    color: isActive && "red", textDecoration: isActive && "underline", background: isActive && "#aee6fa", borderRadius: isActive && "0.3rem", pointerEvents: isActive && "none"})}> Register </NavLink> 
          </button>|

          <select name="language" className='language'>
            <option value=""> Language </option>
            <option value=""> English </option>
            <option value=""> Tigrigna </option>
            <option value=""> Deutsch </option>
          </select> 
          
        </div>
  
      </nav>
    
    </section>
  )
}

export default Navigation;