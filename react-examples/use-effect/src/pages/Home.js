import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome Home</h1>
            <Link to="/fruits">Go to fruits</Link>
        </div>
    )
}

export default Home;
