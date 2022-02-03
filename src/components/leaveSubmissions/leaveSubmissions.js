import {Link} from "react-router-dom";
import axios from "axios";
import {logged} from "../actions";
import {useSelector} from "react-redux";
import React from "react";

function LeaveSubmissions() {
    const [submissions, setSubmissions] = React.useState([])

    const login = useSelector(state=>state.logged)




    React.useEffect(() => {
        if (login.token) {
            let config = {headers: {Accept: "application/json",Authorization: "Bearer "+login.token}};
            axios
                .get('http://localhost/api/my-applications', config)
                .then(function (response) {

                    console.log(response.data)
                    setSubmissions(response.data)

                })
                .catch(function (errors) {
                    console.log(errors.errors);

                });
        }

    }, []);





    return (<div>


        <Link className="btn btn-primary" to='/new-request'>New Request</Link>

        {submissions.map(item => {
            return (
                <div className="card my-1">
                    <div className="card-body hx-1">
                        <div className="d-flex flex-row justify-content-evenly ">
                            <h5 className=" mx-auto text-dark">{item.start}</h5>
                            <h5 className=" mx-auto text-dark">{item.end}</h5>
                            <h5 className=" mx-auto text-dark">{item.count}</h5>
                            <h5 className=" mx-auto text-dark">{item.status}</h5>
                            <h5 className=" mx-auto text-dark ">{item.reason}</h5>
                            <div/>
                        </div>
                    </div>
                </div>)
        })}</div>)

}


export default LeaveSubmissions