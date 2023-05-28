import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Navbar from './components/Navbar';
import Game from './components/Game';

const socket=io('http://localhost:8000', {transports: ['websocket', 'polling', 'flashsocket']})


const App = (props) => {
  const [player, setPlayer] = useState ([]);
  const [update, setUpdate] = useState(false);

  // useEffect(() => {
  //   console.log('Is this running?');
  //   socket.on('Welcome', data => console.log(data));
  //   return () => socket.off("Welcome");
  // }, [socket]);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='styling'>
        <Routes>
          <Route path="/" element={<Navigate to="/players" />} />
          <Route path={'/players'} element={<PlayerList socket={socket} player={player} setPlayer={setPlayer} update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/players/new'} element={<PlayerForm socket={socket} update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/players/game'} element={<Game player={player} setPlayer={setPlayer} update={update} setUpdate={setUpdate}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
