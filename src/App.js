import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import LeaveSubmissions from "./components/leaveSubmissions/leaveSubmissions";
import loginForm from "./components/users/loginForm";

function App() {
    return (
        <Router>
            <div className="container ">

                <Navbar/>


                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/admin' element={<About/>}/>
                </Routes>
            </div>

        </Router>
    );
}

function Home() {
    return <div className="text-white row col-sm-12"><LeaveSubmissions/></div>;
}

function About() {
    return <h2 className="text-white">Home</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;