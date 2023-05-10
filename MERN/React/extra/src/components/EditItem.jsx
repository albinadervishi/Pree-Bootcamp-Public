import axios from 'axios';
import React, { useState,useEffect } from "react";
import {useParams, useNavigate } from "react-router-dom";

const EditItem = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    // so the user previous info could display in the editing form before you edit
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            setName(response.data.name)
            setUsername(response.data.username)
            setEmail(response.data.email)
        })
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const updatedUser = { id: user.id, name: name, username: username, email: email };
        
        axios
          .put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
          });
      };

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
            <button type="submit">Update</button>
          </form>
        </>
      );
    };



export default EditItem;