import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");  

    
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
    

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>Firstname : {firstname}</p>
                <p>Lastname : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmPassword}</p>
            </div>
        </form>
    );

};
    
export default UserForm;
