
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
// import Header from "./Components/header";
import About from './Navbar/About';
import Navbar from './Navbar/Navbar';
import Service from './Navbar/Service';
import Contact from './Navbar/contact';



import Login from "./Form/Logging";

function App() {

	return (
    <>

    <div className="col col-lg-12 col-xl-12 col-sm-12">
    
    
        <BrowserRouter> 
        <Navbar /> 
        
        <Routes>
            
            <Route path="/Service" element={<Service />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>

        
        
        
        </BrowserRouter>
        
		<Login/>
        
        
	</div>
    </>

	);
}


export default App;