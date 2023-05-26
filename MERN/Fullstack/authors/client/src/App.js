import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import Edit from './components/Edit';

const App = (props) => {
  const [author, setAuthor] = useState ([]);
  const [update, setUpdate] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<AuthorList author={author} setAuthor={setAuthor} update={update}  /> } path="/" default/>
        <Route element={<AuthorForm author={author} setAuthor={setAuthor} update={update}  setUpdate={ setUpdate}/>} path="/authors/new"/>
        <Route element={<Edit />} path="/authors/edit/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
