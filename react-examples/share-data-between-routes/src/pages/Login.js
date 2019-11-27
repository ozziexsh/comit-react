import React from 'react';
import {
    useHistory
} from 'react-router-dom';

function Login(props) {
    let history = useHistory();
    
    let [password, setPassword] = React.useState('');

    function goToHome() {
        history.push('/home');
    }

    function handleUsernameChange(event) {
        props.setUsername(event.currentTarget.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.currentTarget.value);
    }

    return (
        <div>
            <h1>Login</h1>
            
            <div>
                <label>Username</label>
                <input value={props.username} onChange={handleUsernameChange} />
            </div>
            
            <div>
                <label>Password</label>
                <input value={password} onChange={handlePasswordChange} />
            </div>

            <button onClick={goToHome}>Login</button>
        </div>
    )
}

export default Login;
