import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";

import LeaveSubmissions from "./components/leaveSubmissions/leaveSubmissions";

import LeaveSubmissionForm from "./components/leaveSubmissions/LeaveSubmissionForm";

function App() {
    return (
        <Router>
            <div className="container ">

                <Navbar/>


                <Routes>
                    <Route path='/all-requests' element={<Home/>}/>
                    <Route path='/new-request' element={<NewRequest/>}/>
                </Routes>
            </div>

        </Router>
    );
}

function Home() {
    return <div className="text-white row col-sm-12"><LeaveSubmissions/></div>;
}

function NewRequest() {
    return <div className="text-white row col-sm-12"><LeaveSubmissionForm/></div>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;