import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserForm= (props) => {
    const {user, setUser, update, setUpdate} = props;
    const [errors,setErrors] = useState([])
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [role, setRole] = useState("");
    const [belt, setBelt] = useState(false);
    const [degree, setDegree] = useState(false);
    const navigate=useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // if (firstName.length <= 3 ) {
        //     setErrors('Name should be longer than 3!');
        //     return ;
        //   }

        axios.post('http://localhost:8000/api/users/new', {
            firstName,
            email,    
            imgURL,
            role,
            belt,
            degree      
        })
            .then(res=>{
                console.log(res.data.errors);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else{
                setUpdate(!update);
                console.log("sapo nisa nje request tek server")
                navigate("/");
                }
        })
        .catch(err=>{
            console.log("erorrTEst:"+ JSON.stringify(err))
        })
            setFirstName("");
            setEmail("");
            setImgURL("");
            setRole("");
            setBelt("");
            setDegree("");
    }

    return (
        <div>
            <h2>Add a new user</h2>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                <label>Firstname:</label>
                <input type="text" class="form-control" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                {errors.firstName ?  <p className='text-danger'>{errors.firstName.message }</p>  : ""}
                </div>
                <div class="form-group">
                <label >Email</label>
                <input type="text" class="form-control" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                {errors.email ?  <p className='text-danger'>{errors.email.message }</p>  : ""}
                </div>
                <div class="form-group">
                <label >Image</label>
                <input type="text" class="form-control" value={imgURL} onChange = {(e)=>setImgURL(e.target.value)}/>
                {errors.imgURL ?  <p className='text-danger'>{errors.imgURL.message }</p>  : ""}
                </div>
                <div class="form-group">
                <label>Role</label><br/>
                <select onChange = {(e)=>setRole(e.target.value)}>
                    <option value={"Teacher"}>Teacher</option>
                    <option value={"Student"}>Student</option>
                    <option value={"Intern"}>Intern</option>
                </select>
                {errors.role ?  <p className='text-danger'>{errors.role.message }</p>  : ""}
                <div class="form-group">
                    <label>BetaPlan Belt</label><br/>
                    <input type="checkbox" onChange = {(e)=>setBelt(!belt)}/>
                </div>
                <div class="form-group">
                    <label>College Degree</label><br/>
                    <input type="checkbox" onChange = {(e)=>setDegree(!degree)}/>
                </div>
                </div>
            <button type="submit" class="btn btn-primary" >Create</button>
            </form>
        </div>
    )

}
export default UserForm;

