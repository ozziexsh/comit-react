import React from 'react';
import './App.css';
import Input from './Input';

function App() {
  let [name, setName] = React.useState('');
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [bio, setBio] = React.useState('');
  let [location, setLocation] = React.useState('');
  let [gender, setGender] = React.useState('');
  let [agreed, setAgreed] = React.useState(false);

  function handleBioChange(event) {
    setBio(event.currentTarget.value);
  }

  function handleLocationChange(event) {
    setLocation(event.currentTarget.value);
  }
  
  function handleGenderChange(event) {
    setGender(event.currentTarget.value);
  }

  function handleAgreeChange(event) {
    setAgreed(event.currentTarget.checked);
  }

  return (
    <div>
      <form>
        <h1>Register</h1>
        <div className="input-container">
          <label>Your Name:</label>
          <Input 
            type="text"
            value={name}
            onChange={setName}
          />
        </div>

        <div className="input-container">
          <label>Email:</label>
          <Input 
            type="email"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className="input-container">
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>

        <div className="input-container">
          <label>Bio</label>
          <textarea 
            value={bio} 
            onChange={handleBioChange}></textarea>
        </div>

        <div className="input-container">
          <label>Location</label>
          <select value={location} onChange={handleLocationChange}>
            <option value="saskatoon">
              Saskatoon
            </option>
            <option value="regina">
              Regina
            </option>
            <option value="elbow">
              Elbow
            </option>
            <option value="">
              None
            </option>
          </select>
        </div>

        <div>
          <label>Gender</label>
          <input 
            type="radio" 
            name="gender" 
            value="m" 
            checked={gender === 'm'}  
            onChange={handleGenderChange} /> M
          <input 
            type="radio" 
            name="gender" 
            value="f"
            checked={gender === 'f'}  
            onChange={handleGenderChange} /> F
          <input 
            type="radio" 
            name="gender" 
            value="o" 
            checked={gender === 'o'}  
            onChange={handleGenderChange} /> O
        </div>

        <div>
          <label>Do you agree to our terms of service</label>
          <input 
            type="checkbox"
            
            checked={agreed === true}
            onChange={handleAgreeChange}
          />
        </div>

        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default App;
