import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const PlayerForm = (props) => {
    const {socket, setPlayer, player ,setUpdate,update} = props;
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState ("");
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [position, setPosition] = useState ("");
    const navigate= useNavigate();

    // for keeping the add button disabled
    const validateFirstName = (value) => {
        if (value.trim() === "") {
          return false;
        }
        if (value.length < 2 ) {
            return false;
          }
        return true;
      };

      const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
        setIsFirstNameValid(validateFirstName(value));
      };

    const onSubmitHandler = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', { 
            firstName,
            position
         })
            .then(res=>{
                console.log(res.data.errors);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                
                else{
                setUpdate(!update);
                navigate("/");
                socket.emit("toServer", res.data)
            }
            })
            .catch(err=>{
                console.log("erorrTEst:"+ JSON.stringify(err))
            })
            setFirstName("");
            setPosition("");
    }

    return (
        <div>
            <h3>Add Player</h3>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                {errors.firstName ?  <p className='text-danger'>{errors.firstName.message }</p>  : ""}
                <label>Player Name:</label>
                <input type="text" class="form-control" value={firstName} onInput = {(e)=>setFirstName(e.target.value)} onChange={(handleFirstNameChange)} />
                <label>Preferred Position:</label>
                <input type="text" class="form-control" value={position} onChange = {(e)=>setPosition(e.target.value)}/>
                </div>
            <button type="submit" class="btn btn-primary" disabled={!isFirstNameValid}>Add</button>
            </form>
        </div>
    )
}
export default PlayerForm;