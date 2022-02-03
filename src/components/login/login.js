import axios from "axios";
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {logged} from "../actions";

function Login() {


    const [email, setEmail] = React.useState(undefined)
    const [password, setPassword] = React.useState(undefined)

    const login = useSelector(state=>state.logged)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        setEmail(event.target.email.value)
        setPassword(event.target.password.value)


        let config = {headers: {Accept: "application/json"}};
        let data = {

            email: email,
            password: password,

        }

        console.log(data);

        axios
            .post('http://localhost/api/login/', data, config)
            .then(function (response) {

                console.log(response.data)
                dispatch(logged(response.data))

            })
            .catch(function (errors) {
                console.log(errors.errors);

            });


    }

    return (
        <div className="p-5 mw-60">
        <form className="text-center" onSubmit={handleSubmit}>
            <h3 className={"text-white"}>Login {login.token}</h3>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"/>

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" minLength="8"  id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
export default  Login