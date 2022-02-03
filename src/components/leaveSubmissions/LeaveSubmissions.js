import {Link} from "react-router-dom";
import axios from "axios";
import {logged} from "../actions";
import {useSelector} from "react-redux";
import React from "react";

function LeaveSubmissions() {
    const [submissions, setSubmissions] = React.useState([])


    const login = useSelector(state => state.logged)


    React.useEffect(() => {
        console.log(login)

        let config = {headers: {Accept: "application/json", Authorization: "Bearer " + login.token}};
        axios
            .get('http://localhost/api/my-applications', config)
            .then(function (response) {

                console.log(response.data)
                setSubmissions(response.data)

            })
            .catch(function (errors) {
                console.log(errors.errors);

            });


    }, []);


    return (<div>

            {login.token == undefined ?
                <div className="alert alert-warning" role="alert">
                    User is not logged in
                </div> : null
            }
            <Link className="btn btn-primary" to='/new-request'>New Request</Link>
            {
                submissions.length > 0 ?
                    submissions.map(item => {
                        function days_between(date1, date2) {

                            return (Date.parse(date2) - Date.parse(date1)) / (24 * 3600 * 1000)

                        }

                        return (
                            <div className="card my-1">
                                <div className="card-body hx-1">
                                    <div className="d-flex flex-row justify-content-evenly ">
                                        <h5 className=" mx-auto text-dark">{item.start}</h5>
                                        <h5 className=" mx-auto text-dark">{item.end}</h5>
                                        <h5 className=" mx-auto text-dark">{days_between(item.start, item.end)}</h5>
                                        <h5 className=" mx-auto text-dark">{item.status}</h5>
                                        <h5 className=" mx-auto text-dark ">{item.reason}</h5>
                                        <div/>
                                    </div>
                                </div>
                            </div>)
                    }) : <div className=" mt-2 alert alert-primary" role="alert">
                        User has no applications
                    </div>
            }

        </div>
    )

}


export default LeaveSubmissions