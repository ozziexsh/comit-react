import React from 'react';
import {
    useHistory
} from 'react-router-dom';

function Login() {
    let [email, setEmail] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [isInvalid, setIsInvalid] = React.useState(false);
    let history = useHistory();

    function handleEmail(event) {
        setEmail(event.currentTarget.value);
    }

    function handlePassword(event) {
        setPassword(event.currentTarget.value);
    }

    function handleLogin(event) {
        event.preventDefault();

        if (email === 'oz@neher.com' && password === '1234') {
            // take them home
            history.push('/home');
        } else {
            // show an error
            setIsInvalid(true);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            
            {isInvalid && (
                <p style={{color: 'red'}}>
                    Your credentials are incorrect
                </p>
            )}

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={handleEmail} />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePassword} 
                        required
                        minLength="4"
                        maxLength="8"
                    />
                </div>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
