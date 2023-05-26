import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="App">
        <Link to="/players">Manage Players</Link>&nbsp; &nbsp;|&nbsp; &nbsp;
        <Link to="/players/game">Manage Player Status</Link>
    </div>
  );
}

export default Navbar;
