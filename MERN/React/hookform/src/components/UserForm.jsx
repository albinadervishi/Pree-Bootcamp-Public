import React, { useState } from  'react';
    
const UserForm = (props) => {

    const  [user,setUser] = useState({ 
        firstname: "", 
        lastname: "", 
        email: "", 
        password: "",
        confirmPassword: ""
    });

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState(""); 
    // const [confirmPassword, setConfirmPassword] = useState("");  

    
//     const createUser = (e) => {
//         e.preventDefault();
    
//         const newUser = { firstname, lastname, email, password, confirmPassword };
//         console.log("Welcome", newUser);
//     	setFirstname("");
//     	setLastname("");
//     	setEmail("");
//     	setPassword("");
//     	setConfirmPassword("");
// }
       
        const HandleSubmit=(e)=>{
            e.preventDefault();
            console.log("Welcome", user)
            setUser({ 
                firstname: "", 
                lastname: "", 
                email: "", 
                password: "",
                confirmPassword: ""
            })
        };

        const HandleChange = (event) =>{
            console.log(event)
            setUser({...user,  [event.target.id] : event.target.value})
        }
    
    

    return(
        <form onSubmit={  HandleSubmit }>
            <div>
                <label>Firstname: </label> 
                <input type="text" id="firstname" value={user.firstname} onChange={ HandleChange } />
                
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" id="lastname" value={user.lastname} onChange={ HandleChange } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" id="email" value={user.email} onChange={ HandleChange } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" id="password" value={user.password} onChange={ HandleChange } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" id="confirmPassword" value={user.confirmPassword} onChange={ HandleChange } />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>Firstname : {user.firstname}</p>
                <p>Lastname : {user.lastname}</p>
                <p>Email : {user.email}</p>
                <p>Password : {user.password}</p>
                <p>Confirm Password : {user.confirmPassword}</p>
            </div>
        </form>
    );

};
    
export default UserForm;
