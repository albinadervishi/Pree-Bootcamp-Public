import React from 'react';
import axios from 'axios';
import {useParams, useNavigate } from "react-router-dom";

const DeleteItem =() => {
    const {id, users, setUsers} = useParams();
    
    const handleClick = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(() => {
            // {users.map((user, index) => ( console.log(user.username) ))};
        })
          .catch(error => console.log(error));
      }
    
      return (
        <>
        <p>Are you sure you want to delete this user?</p>
        <button onClick={handleClick}>Delete</button>
        </>
       
      );
}

export default DeleteItem;