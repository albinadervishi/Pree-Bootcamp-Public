import axios from 'axios';
import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const Search  =({setResults})=>{
    const [input, setInput] = useState("");
    const [selectPar, setSelectPar] = useState("people");
    const {select, id} = useParams();
    const navigate = useNavigate();



    const handleSearch = (value) => {
        setInput("");
        navigate(`/${selectPar}/${input}`);
      };

      const handleSelect = (e) => {
        setSelectPar(e.target.value);
      };

return(
    <>
     <p>Search for:</p>
    <select class="form-select" onChange={(e) => handleSelect(e)} aria-label="Default select example">
     <option value="people">People</option>
     <option value="planets">Planets</option>
   </select>
   
   <p>ID:</p>
   <div class="input-group mb-3">
     <input type="text" class="form-control"  value={input} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) =>setInput(e.target.value)}/>
     <div class="input-group-append">
     <button class="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
 </div>
 </div>
    </>
   
);
} 

export default Search;