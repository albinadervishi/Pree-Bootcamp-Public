import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import Navbar from './components/Navbar';
import Game from './components/Game';


const App = (props) => {
  const [player, setPlayer] = useState ([]);
  const [update, setUpdate] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='styling'>
        <Routes>
          <Route path="/" element={<Navigate to="/players" />} />
          <Route path={'/players'} element={<PlayerList player={player} setPlayer={setPlayer} update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/players/new'} element={<PlayerForm update={update} setUpdate={setUpdate}/>}/>
          <Route path={'/players/game'} element={<Game player={player} setPlayer={setPlayer} update={update} setUpdate={setUpdate}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
