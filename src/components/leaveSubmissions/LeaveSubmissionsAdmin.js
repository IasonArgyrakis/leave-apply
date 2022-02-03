import {Link} from "react-router-dom";
import axios from "axios";
import {logged} from "../actions";
import {useSelector} from "react-redux";
import React from "react";

function LeaveSubmissionsAdmin() {

    function days_between(date1, date2) {

        return (Date.parse(date2) - Date.parse(date1)) / (24 * 3600 * 1000)

    }

    const [submissions, setSubmissions] = React.useState([])



    const login = useSelector(state => state.logged)

    const getCurrentApplications = () => {
        let config = {headers: {Accept: "application/json", Authorization: "Bearer " + login.token}};

        axios
            .get('http://localhost/api/all-applications', config)
            .then(function (response) {

                console.log(response.data)
                setSubmissions(response.data)

            })
            .catch(function (errors) {
                console.log(errors.errors);

            });

    }

    React.useEffect(() => {  getCurrentApplications() }, []);


    const handleApprove = (event) => {
        let id = event.target.id

        let config = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + login.token
            }
        };
        let data = {

            status: "approved"


        }
        axios
            .put('http://localhost/api/application/' + id, data, config)
            .then(function (response) {

                console.log(response.data)
                getCurrentApplications()


            })
            .catch(function (errors) {
                console.log(errors.errors);

            });


    }

    const handleDeny = (event) => {
        let id = event.target.id

        let config = {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + login.token
            }
        };
        let data = {

            status: "rejected"


        }
        axios
            .put('http://localhost/api/application/' + id, data, config)
            .then(function (response) {

                console.log(response.data)
                getCurrentApplications()


            })
            .catch(function (errors) {
                console.log(errors.errors);

            });


    }

    let renderRow = (item,index) => {

        return (
            <tr>
                <td>{index+1}</td>
                <td>{item.applicant}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{days_between(item.start, item.end)}</td>
                <td>{item.status}</td>
                <td>{item.reason}</td>
                <td>
                    <button type="button" id={item.id} onClick={handleApprove}
                            className="btn btn-success">Approve
                    </button>
                </td>
                <td>
                    <button type="button" id={item.id} onClick={handleDeny}
                            className="btn btn-danger">Deny
                    </button>
                </td>
            </tr>)
    }

    return (<div>

            {login.token == undefined ?
                <div className="alert alert-warning" role="alert">
                    User is not logged in
                </div> : null
            }

            {submissions.length > 0 ?
                <div className=" my-1">
                    <div className=" hx-1">
                        <div className="d-flex flex-row justify-content-evenly ">
                            <div className="col-sm-12">
                                <table className="table table-borderless bg-white">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Requested By</th>
                                        <th scope="col">Start</th>
                                        <th scope="col">End</th>
                                        <th scope="col"> Days</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Reason</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        submissions.map((item,index) => {
                                            return renderRow(item,index)
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>


                            <div/>
                        </div>
                    </div>
                </div>

                :
                <div className=" mt-2 alert alert-primary" role="alert">
                    There are no pending applications
                </div>
            }

        </div>
    )



}


export default LeaveSubmissionsAdmin