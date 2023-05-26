import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorForm= (props) => {
    const {setAuthor, author ,setUpdate,update} = props;
    const [errors,setErrors] = useState([])
    const [firstName, setFirstName] = useState ("");
    const navigate= useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // if (/cake/i.test(firstName)){
        //     setErrors('Name cannot contain the string "cake" in any casing!');
        //     return;
        // }

        axios.post('http://localhost:8000/api/authors/new', { firstName })
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
    }

    return (
        <div>
            <h1>Favourite Authors</h1>
            <Link to={"/"}><p>Home</p></Link>
            <p>Add a new author:</p>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                {errors.firstName ?  <p className='text-danger'>{errors.firstName.message }</p>  : ""}
                <label>Name:</label>
                <input type="text" class="form-control" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
                </div>
            <Link to={"/"}><button class="btn btn-primary">Cancel</button></Link>
            <button type="submit" class="btn btn-primary" >Create</button>
            </form>
        </div>
    )
}
export default AuthorForm;