import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Details from './components/Details';
import Update from './components/Update';


const App = (props) => {
  const [user, setUser] = useState ([]);
  const [update, setUpdate] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<UserList user={user} setUser={setUser} update={update}  /> } path="/" default/>
        <Route element={<UserForm user={user} setUser={setUser} update={update}  setUpdate={ setUpdate}/>} path="/users/new"/>
        <Route element={<Details user={user} setUser={setUser} update={update}  setUpdate={ setUpdate}/>} path="/users/:id"></Route>
        <Route element={<Update user={user} setUser={setUser} update={update}  setUpdate={ setUpdate}/>} path="/users/edit/:id"></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
