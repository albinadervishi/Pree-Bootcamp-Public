import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update= (props) => {
    const [update,setUpdate]=useState(true)
    const [errors,setErrors] = useState({})
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [role, setRole] = useState("");
    const [belt, setBelt] = useState(false);
    const [degree, setDegree] = useState(false);
    const navigate=useNavigate();
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                console.log(res.data.role);
                setFirstName(res.data.firstName);
                setEmail(res.data.email);
                setImgURL(res.data.imgURL);
                setRole(res.data.role);
                setBelt(res.data.belt);
                setDegree(res.data.degree);
            })
            .catch(err => console.log(err))
    }, [update])

    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(errors);
        if (firstName.length <= 3) {
            setErrors({ firstName: { message: 'Name should be more than 3' } });
            return;
          }
      

        axios.patch('http://localhost:8000/api/users/edit/' + id, {
            firstName,
            email,    
            imgURL,
            role,
            belt,
            degree      
        })
            .then(res=>{
                if(res.data.errors) {
                    console.log(errors);
                    setErrors(res.data.errors)
                }else{
                
                navigate("/");
                }
        })
        .catch(err=>{ setErrors(err.response.data.errors ) })
    }

    return (
        <div>
            <h2>Edit this user</h2>
            <form onSubmit={onSubmitHandler}>
            <img width='70px' height='70px' src={imgURL} class="rounded-circle"></img>
            <hr/>
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
                <select value={role} onChange = {(e)=>setRole(e.target.value)}>
                    <option value={"Teacher"}>Teacher</option>
                    <option value={"Student"}>Student</option>
                    <option value={"Intern"}>Intern</option>
                </select>
                {errors.role ?  <p className='text-danger'>{errors.role.message }</p>  : ""}
                <div class="form-group">
                    <label>BetaPlan Belt</label><br/>
                    <input type="checkbox" checked={belt} value={belt} onChange = {(e)=>setBelt(!belt)}/>
                </div>
                <div class="form-group">
                    <label>College Degree</label><br/>
                    <input type="checkbox" checked={degree} value={degree} onChange = {(e)=>setDegree(!degree)}/>
                </div>
                </div>
            <button type="submit" class="btn btn-primary" >Update</button>
            </form>
        </div>
    )

}
export default Update;


