import React from 'react';
import { Link } from 'react-router-dom';

function Fruits() {
    let [fruit, setFruit] = React.useState(0);
    let [veg, setVeg] = React.useState(0);

    function incFruit() {
        setFruit(fruit + 1);
    }

    function incVeg() {
        setVeg(veg + 1);
    }

    React.useEffect(function() {
        alert('Welcome');
    }, []);

    React.useEffect(function() {
        if (fruit === 5) {
            alert('Slow down!')
        }
    }, [fruit]);

    return (
        <div>
            <Link to="/home">Go home</Link>
            <h1>Total Fruits: {fruit}</h1>
            <h1>Total Veg: {veg}</h1>

            <button onClick={incFruit}>
                Increment Fruits
            </button>

            <button onClick={incVeg}>
                Increment Veg
            </button>
        </div>
    );
}

export default Fruits;
