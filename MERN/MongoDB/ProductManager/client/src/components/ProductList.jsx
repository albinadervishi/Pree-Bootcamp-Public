import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {removeFromDom, product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
            setProduct(res.data.products);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])

    const deleteProduct = (personId) => {
        axios.delete('http://localhost:8000/api/product/' + product._id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
             <table class="table col-sm-6">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                  </tr>
                </thead>
                <tbody>
            {
                product.map((product, index)=>{
                return <tr>
                    <th scope="row">{index +1}</th>
                    <td><Link to={`/product/${product._id}`}><p key={index}>{product.title}</p></Link></td>
                    <Link to={"/product/edit/" + product._id}>Edit</Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </tr>
                })
            }
            </tbody>
            </table>
        </div>
    )
}
export default ProductList;