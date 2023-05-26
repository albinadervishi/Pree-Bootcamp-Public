import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                const updatedProduct = { ...product }; 
                delete updatedProduct[productId];
                setProduct(updatedProduct);
                navigate("/", { replace: true });
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{product.title}'s Info</h2>
            <p>Title: {product.title}</p>
            <p>Price: {product.price} $</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    );
}
export default Details;