import React, { useState } from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
// import Challenges from "../Quizz/main";
import Header from '../Components/header';
import './Logging.css';
// Simulated function to send email (replace with actual API call)
const sendEmail = (data) => {
    console.log("Sending data to email:", data);
    // You can replace this with an actual email sending logic (e.g., using an API)
};

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (userData.email && userData.password) {
            // Simulating registration
            setIsRegistered(true);
            sendEmail(userData); // Simulate sending to email
            alert("Registration successful!");
        } else {
            setError("Please fill in all fields.");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (isRegistered && userData.email && userData.password) {
            // Simulating login
            setIsLoggedIn(true);
            alert("Login successful!");
        } else {
            setError("Please register first or fill in all fields.");
        }
    };

    return (
        <Router>
            <div className="App">
                <h1>Quiz App</h1>
                {!isLoggedIn ? (
                    <div>
                        <h2>{isRegistered ? "Login" : "Register"}</h2>
                        <form onSubmit={isRegistered ? handleLogin : handleRegister}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">
                                {isRegistered ? "Login" : "Register"}
                            </button>
                            <p>{error}</p>
                        <button className="Register" onClick={() => setIsRegistered(!isRegistered)}>
                            {isRegistered ? "Create an account" : "Already have an account?"}
                        </button>
                        </form>
                        
                    </div>
                ) : (
                    
                    <div>
                        <h2 >Welcome! You are logged in.</h2>
                        <Link to="/quiz">
                            <Header/>
                        </Link>
                    </div>
                    
                )}
                
            </div>
            
        </Router>
    );
};



export default Login;
