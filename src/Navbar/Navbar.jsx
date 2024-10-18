import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/loginForm";
// import Login from '../Form/Logging';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const loginHandled = () => {
    setShowLogin(!showLogin);
  };

  const myStyle = {
    borderRadius: "2px",
    height: "55px",
    margin:"5px",
    padding:"5px",
    width:"100%",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./images/LogoQuiz.png" alt="logo.png" style={myStyle} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <button className="btn " onClick={<Login/>}>
                  Login
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {showLogin && (
        <>
          <div className="login-overlay" onClick={loginHandled}></div>
          <div className="login-form-container">
            <LoginForm />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
