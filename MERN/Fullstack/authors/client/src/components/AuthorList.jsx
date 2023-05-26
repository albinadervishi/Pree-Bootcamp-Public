import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const {setAuthor, author ,update} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/authors")
    	.then((res)=>{
            setAuthor(res.data.authors);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [update])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                setAuthor(author.filter(author => author._id != authorId)); 
            })
            .catch(err => console.log(err))
    }

    return (
      <div>
        <h2>Favorite Authors</h2>
        <Link to={"/authors/new"}><p>Add new author</p></Link>
        <br/>
        <p>We have quotes by:</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Authors:</th>
              <th scope="col">Actions:</th>
            </tr>
          </thead>
          <tbody>
            {
                author.map((author, index)=>{
                    return <tr>
                    <td><p key={index+1}>{author.firstName}</p></td>
                    <td><Link to={"/authors/edit/" + author._id }><button>Edit</button></Link> <button onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                  </tr>
                })
            }
            
          </tbody>
        </table>
      </div>
    );
}

export default AuthorList;