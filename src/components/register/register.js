import React from "react";
import axios from "axios";

const Register = () => {
    const [UserToken, setUserToken] = React.useState(undefined)


    const [firstName, setfirstName] = React.useState(undefined)
    const [lastName, setlastName] = React.useState(undefined)
    const [email, setEmail] = React.useState(undefined)
    const [password, setPassword] = React.useState(undefined)
    const [confirm_password, setConfirm_password] = React.useState(undefined)
    const [type, setType] = React.useState(undefined)

    const [backendErrors, setBackendErrors] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        setfirstName(event.target.firstName.value)
        setlastName(event.target.lastName.value)
        setEmail(event.target.email.value)
        setPassword(event.target.password.value)
        setConfirm_password(event.target.password_confirmation.value)
        setType(event.target.type.value)

        let config = {headers: {Accept: "application/json"}};
        let data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirm_password: confirm_password,
                type: type
            }
            console.log(data);

        if(data.password===data.confirm_password) {

            axios
                .post('http://localhost/api/register/', data, config)
                .then(function (response) {

                    console.log(response.data)

                })
                .catch(function (errors) {
                    console.log(errors.errors);

                });
        }
        else {
            console.log("passwords dont match")
        }


    }



    return (

        <div className="row  centered-form">
            <div className=" mx-auto col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-4">
                <div className="panel mb-2 card p-1 panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register</h3>

                    </div>
                    <div className="panel-body">
                        <form role="form" onSubmit={handleSubmit}>
                            <div className="row mb-1">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="first_name" id="firstName"
                                               className="form-control input-sm" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="last_name" id="lastName"
                                               className="form-control input-sm" placeholder="Last Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-1">
                                <input type="email" name="email" id="email" className="form-control input-sm"
                                       placeholder="Email Address"/>
                            </div>

                            <div className="row mb-1">
                                <div className="col-xs-6 col-sm-6 col-md-6 mb-1">
                                    <div className="form-group">
                                        <input type="password" name="password" id="password"
                                               className="form-control input-sm"   minlength="8" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 mb-1">
                                    <div className="form-group">
                                        <input type="password" name="password_confirmation"
                                               id="password_confirmation"  minlength="8"  className="form-control input-sm"
                                               placeholder="Confirm Password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="exampleFormControlSelect1">User Type</label>
                                <select className="form-control" id="type">
                                    <option value="admin">Administrator</option>
                                    <option value="employee">Employee</option>

                                </select>
                            </div>

                            <input type="submit" value="Register" className="btn btn-info btn-block"/>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Register