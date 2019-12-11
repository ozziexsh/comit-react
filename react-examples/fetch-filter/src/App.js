import React from 'react';
import './App.css';

function App() {
  let [search, setSearch] = React.useState('');
  let [people, setPeople] = React.useState([]);

  function handleSearchChange(event) {
    setSearch(event.currentTarget.value)
  }

  React.useEffect(function() {
    // fetch all people using star wars api
    fetch('https://swapi.co/api/people')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      setPeople(response.results);
    })
    .catch(function() {
      alert('Uh oh something went wrong');
    })
    // set our people array to that result
  }, []);

  let filteredPeople =
    people.filter(function(person) {
      if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })

  return (
    <div className="App">
      <header className="App-header">
        <label>Search:</label>
        <input type="text" value={search} onChange={handleSearchChange} />
        <ul>
          {filteredPeople.map(function(person) {
            return <li>{person.name}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
