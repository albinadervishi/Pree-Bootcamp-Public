import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PlayerList = (props) => {
    const {setPlayer, player ,update} = props;

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/players")
    	.then((res)=>{
            const sortedData = res.data.players.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
            );
        setPlayer(sortedData);
      })
    	.catch((err)=>{
            console.log(err);
    	})

    }, [update])

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                setPlayer(player.filter(player => player._id != playerId)); 
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link className="h3" to={'/players'}>List</Link>&nbsp; &nbsp;|&nbsp; &nbsp;
            <Link className="h3" to={'/players/new'}>Add Player</Link>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Team Name:</th>
                <th scope="col">Preferred Position:</th>
                <th scope="col">Actions:</th>
              </tr>
            </thead>
            <tbody>
              {
                  player.map((player, index)=>{
                      return <tr>
                      <td><p key={index}>{player.firstName}</p></td>
                      <td><p key={index}>{player.position}</p></td>
                      <td><button onClick={() => deletePlayer(player._id)}>Delete</button></td>
                    </tr>
                  })
              }
              
            </tbody>
          </table>
        </div>
      );
}

export default PlayerList;