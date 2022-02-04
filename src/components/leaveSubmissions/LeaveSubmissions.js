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

    function days_between(date1, date2) {

        return (Date.parse(date2) - Date.parse(date1)) / (24 * 3600 * 1000)

    }

    function convertSubmisionDate(dateSttring) {
        return new Date(dateSttring).toISOString().slice(0, 10)
    }

    const renderRow = (item, index) => {

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{convertSubmisionDate(item.created_at)}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{days_between(item.start, item.end)}</td>
                <td>{item.status}</td>
                <td>{item.reason}</td>

            </tr>)
    }


    return (<div>

            {login.token == undefined ?
                <div className="alert alert-warning" role="alert">
                    User is not logged in
                </div> : null
            }
            <Link className="btn btn-primary" to='/new-request'>New Request</Link>
            {
                submissions.length > 0 ?
                    <div className=" my-1">
                        <div className=" hx-1">
                            <div className="d-flex flex-row justify-content-evenly ">
                                <div className="col-sm-12">
                                    <table className="table table-borderless bg-white">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Requested</th>
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
                        User has No applications
                    </div>
            }

        </div>
    )

}


export default LeaveSubmissions