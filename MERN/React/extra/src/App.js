import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import UserInfo from './components/UserInfo';
import EditItem from './components/EditItem';
import DeleteItem from './components/DeleteItem';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  // to display the new created user in itemlist
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList users={users} />} />
          <Route path="/users/:id" element={<UserInfo  users={users} />} />
          <Route path="/create" element={<CreateItem addUser={addUser}/>} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/delete/:id" element={<DeleteItem users={users} setUsers={setUsers}/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
