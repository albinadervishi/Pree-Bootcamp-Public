import React, {useEffect, useState} from "react";
import axios from "axios";

const Game = (props) => {
    const {player, setPlayer, update, setUpdate} = props
    const [game,setGame]= useState("gameOne");

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res) => {
            setPlayer(res.data.players)
        })
        .catch((err) => console.log(err))
    }, [update, setPlayer])

    const HandleStatus = (e) => {
        setGame(e.target.id);
        setUpdate(!update)
    }
    
    const ChangeStatus = (e) => {
        const id = e.target.id
        const status = e.target.value
        axios.patch(`http://localhost:8000/api/players/${id}/${game}`, {
            status: status
        }).then(e=>setUpdate(!update))
        
    }

    return(
        <div>
            <h3>Player Status </h3>
            <br/>
            <button id="gameOne" onClick={HandleStatus} >Game 1</button>&nbsp; &nbsp;|&nbsp; &nbsp;
            <button id="gameTwo" onClick={HandleStatus}>Game 2</button>&nbsp; &nbsp;|&nbsp; &nbsp;
            <button id="gameThree" onClick={HandleStatus}>Game 3</button>
        <div className='row'>
                {
                    <table className="table col-sm-6 table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Player Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {player.map((player, index) => (
                                <tr key={index}>
                                    <td>{player.firstName}</td>
                                    <td className="d-flex justify-content-around">
                                        <button id={player._id} style={{ backgroundColor: player[`${game}`] =='Playing' ? "#28a745" : "white" }} className="btn" onClick={ChangeStatus} value="Playing">Playing</button>
                                        <button id={player._id} style={{ backgroundColor: player[`${game}`] ==='Not Playing'  ? "#dc3545" : "white" }} onClick={ChangeStatus} className="btn" value="Not Playing" >Not Playing</button>
                                        <button id={player._id} style={{ backgroundColor: player[`${game}`] ==='Undecided' ? "#ffc107" : "white" }}  onClick={ChangeStatus} className="btn" value="Undecided" >Undecided</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
            </div>
    )
}

export default Game;