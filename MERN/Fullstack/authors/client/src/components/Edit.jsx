import React, { useState, useEffect } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState ("");
    const [error, setError] = useState("");
    const navigate= useNavigate();

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors/" + id)
    	.then((res)=>{
            console.log(res.data);
            setFirstName(res.data.firstName);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const updateAuthor = (e) =>{
        e.preventDefault();
        if(firstName.length <= 3){
            setError('Name should be more than 3');
            return;
        }

        if (/cake/i.test(firstName)){
                setError('Name cannot contain the string "cake" in any casing!');
                return;
            }

        axios.patch("http://localhost:8000/api/authors/edit/" + id, {
            firstName
        })
    	.then(res => {
            if ( res.data === "This user already exists") {
                setError(res.data)
            } else{
                navigate("/");
        }
                console.log("response"+JSON.stringify(res.data) );
        })
        .catch(err => console.log(err))
}

    return (
      <div>
        <h1>Favourite Authors</h1>
        <Link to={"/"}><p>Home</p></Link>
        <p>Edit this author:</p>
        <form onSubmit={updateAuthor}>
          <div class="form-group">
          {error ? <p className='text-danger'> {error }</p>  : ""}
            <label>Name:</label>
            <input type="text" class="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <Link to={"/"}><button class="btn btn-primary">Cancel</button></Link>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
}

export default Edit;