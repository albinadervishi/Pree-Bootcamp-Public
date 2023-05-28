import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserList = (props) => {
    const {setUser, user ,update} = props;

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/users")
    	.then((res)=>{
            const sortedData = res.data.user.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        setUser(sortedData);
        console.log(res.data.user)
        setUser(res.data.user)
      })
    	.catch((err)=>{
            console.log(err);
    	})

    }, [update])

    const deleteUser = (userId) => {
        axios.delete('http://localhost:8000/api/users/' + userId)
            .then(res => {
                setUser(user.filter(user => user._id != userId)); 
            })
            .catch(err => console.log(err))
    }

    return (
      <div>
        <h2>All Users</h2>
        <Link to={"/users/new"}><p>Add new user</p></Link>
        <br/>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Users:</th>
              <th scope="col">Actions:</th>
            </tr>
          </thead>
          <tbody>
            {
                user.map((user, index)=>{
                    if (user.role === "Teacher"){
                        return (
                            <tr>
                            <td class="d-flex"><img width='70px' height='70px' src={user.imgURL} class="rounded-circle"></img>&nbsp; &nbsp;<h4 key={index+1}>{user.firstName}&nbsp;&nbsp;</h4><p class="p-2 mb-4 bg-secondary text-white">Teacher</p></td>
                            <td><Link to={"/users/" + user._id }><button class="btn btn-primary">View Profile</button></Link> <button class="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button></td>
                          </tr>
                        )
                    }
                    else{
                        return (
                            <tr>
                            <td class="d-flex"><img width='70px' height='70px' src={user.imgURL} class="rounded-circle"></img>&nbsp; &nbsp;<h4 key={index+1}>{user.firstName} </h4></td>
                            <td><Link to={"/users/" + user._id }><button class="btn btn-primary">View Profile</button></Link> <button class="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button></td>
                          </tr>
                        )
                    }
                })
            }
          </tbody>
        </table>
      </div>
    );
}

export default UserList;