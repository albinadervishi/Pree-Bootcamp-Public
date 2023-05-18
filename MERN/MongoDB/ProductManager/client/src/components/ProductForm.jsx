import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductForm= () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,    
            description      
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch(err=>console.log(err))
            setTitle("");
            setPrice("");
            setDescription("");
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                </div>
                <div class="form-group">
                <label >Price</label>
                <input type="text" class="form-control" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                </div>
                <div class="form-group">
                <label >Description</label>
                <input type="text" class="form-control" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                </div>
            <button type="submit" class="btn btn-primary" >Create</button>
            </form>
        </div>
    )

}
export default ProductForm;

