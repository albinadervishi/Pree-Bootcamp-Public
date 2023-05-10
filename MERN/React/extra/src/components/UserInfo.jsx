import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
        setUser({
            name: response.data.name,
            userName: response.data.username,
            email: response.data.email,
        })
    })
  }, []);

     const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    navigate(`/delete/${id}`);
  };
   
   return(
<>
        <h2>{user.name}</h2>
          <ul>
            <li>Emri:{user.name}</li>
            <li>Username:{user.userName}</li>
            <li>Email:{user.email}</li>
          </ul>
          <button onClick={handleEdit}>Edit User</button>
          <button onClick={handleDelete }>Delete User</button>

</>
    );
}

export default UserInfo;
