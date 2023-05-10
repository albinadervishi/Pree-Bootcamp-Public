import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateItem = ({ addUser })=> {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            username: username,
            email: email,
          };
    
          axios.post(`https://jsonplaceholder.typicode.com/users`, data)
          .then((response) => {
            console.log(response.data);
            addUser(response.data);
            // setUsers((prevUsers) => [...prevUsers, response.data]);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
          });
    }

      
      return (
        <>
        <form onSubmit={handleSubmit}>
           <label>
            Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br />
            <label>
            Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br />
            <label>
            Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
        <button type="submit">Submit</button>
        </form>
        </>
      );
    
    
}

export default CreateItem;