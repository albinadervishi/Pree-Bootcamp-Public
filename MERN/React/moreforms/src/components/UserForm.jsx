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

// MENYRA2
// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPw, setConfirmPw] = useState("");
//   return (
//     <div className="App">
//       <>
//         <form onSubmit={() => {}}>
//           <div>
//             <label htmlFor="">First Name</label>
//             <input type="text" onChange={(e) => setFirstName(e.target.value)} />
//           </div>
//           {firstName.length < 2 && firstName.length > 0 ? (
//             <p>First Name must be at least 2 characters</p>
//           ) : null}
//           <div>
//             <label htmlFor="">Last Name</label>
//             <input type="text" onChange={(e) => setLastName(e.target.value)} />
//           </div>
//           {lastName.length < 2 && lastName.length > 0 ? (
//             <p>Last Name must be at least 2 characters</p>
//           ) : null}
//           <div>
//             <label htmlFor="">Email</label>
//             <input type="text" onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
//           <div>
//             <label htmlFor="">Password</label>
//             <input type="text" onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           {password.length < 8 ? (
//             <p>Password must be at least 8 characters</p>
//           ) : null}
//           <div>
//             <label htmlFor="">Confirm Password</label>
//             <input type="text" onChange={(e) => setConfirmPw(e.target.value)} />
//           </div>
//           {confirmPw !== password ? <p>Passwords must match</p> : null}
//         </form>
