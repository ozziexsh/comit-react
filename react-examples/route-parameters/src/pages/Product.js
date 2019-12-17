import React from 'react';
import {Link, useParams} from 'react-router-dom'

function Product(props) {
    let params = useParams();

    let product = props.products.find(function(product) {
        return product.id === params.id;
    })

    return (
        <div>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default Product;