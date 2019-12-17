import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {props.products.map(function (product) {
                    return (
                        <li>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;