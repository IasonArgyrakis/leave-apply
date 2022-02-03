import React from "react";
import {logged} from "../actions";
import axios from "axios";
import { useSelector} from "react-redux";


function LeaveSubmissionForm() {
    const login = useSelector(state => state.logged)

    const [startDate, setStartDate] = React.useState(undefined)
    const [endDate, setEndDate] = React.useState(undefined)
    const [reason, setReason] = React.useState(undefined)



    const handleChange = (event) => {
        event.preventDefault()

        switch (event.target.type) {
            case 'startDate':

                setStartDate(event.target.value)
                break;
            case 'endDate':
                setEndDate(event.target.value)
                break;
            case 'reason':
                setReason(event.target.value)
                break;

        }
        console.log(reason)

    }

    const handleSubmit = (event) => {
        event.preventDefault()




        let config = {headers: {Accept: "application/json", Authorization: "Bearer " + login.token}};
        let data = {

            start: event.target.startDate.value,
            end: event.target.endDate.value,
            reason:event.target.reason.value

        }

        console.log(data);

        axios
            .post('http://localhost/api/my-applications/new', data, config)
            .then(function (response) {

                console.log(response.data)


            })
            .catch(function (error) {


                console.log(error)

            });


    }

    return (
        <div className="row p-2">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="startDate" className="text-white form-label"> {reason} Start Date</label>
                    <input required type="date" onChange={handleChange}   className="form-control" id="startDate" aria-describedby="startDate"/>

                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input  required type="date" onChange={handleChange} className="form-control" id="endDate" aria-describedby="endDate"/>
                </div>
                <div className="mb-3">
                    <textarea required  id="reason" onChange={handleChange} name="Reason" cols="40" placeholder="reason" rows="5"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
}

export default LeaveSubmissionForm