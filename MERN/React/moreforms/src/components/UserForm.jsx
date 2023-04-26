import React, {useState} from "react";

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { firstname, lastname, email, password, confirmPassword };
        console.log("Welcome", newUser);
    	setFirstname("");
    	setLastname("");
    	setEmail("");
    	setPassword("");
    	setConfirmPassword("");
    };

    const HandleFirstname =(e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1 || e.target.value.length > 2) {
            setFirstnameError("");
        } else  {
            setFirstnameError("FirstName must be 2 characters or longer!");
        } 
    }

    const HandleLastname =(e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1 || e.target.value.length > 2) {
            setLastnameError("");
        } else  {
            setLastnameError("LastName must be 2 characters or longer!");
        } 
    }

    const HandleEmail =(e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1 || e.target.value.length > 5) {
            setEmailError("");
        } else  {
            setEmailError("Email must be 5 characters or longer!");
        } 
    }

    const HandlePassword =(e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1 || e.target.value.length > 8) {
            setPasswordError("");
        } else  {
            setPasswordError("Password must be 8 characters or longer!");
        } 
    }

    const HandleConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
        console.log("password"+ password);
        console.log("confirmpassword"+ confirmPassword);
        if(e.target.value === password) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Password must match");
        } 
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" value={firstname} onChange={ HandleFirstname } />
                {
                    firstnameError ?
                    <p>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" value={lastname} onChange={ HandleLastname } />
                {
                    lastnameError ?
                    <p>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ HandleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ HandlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ HandleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
            {/* <div>
                <p>Firstname : {firstname}</p>
                <p>Lastname : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            </div> */}
        </form>
    );

};
    
export default UserForm;
