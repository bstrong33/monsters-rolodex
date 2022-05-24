import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  function onSearchChange(event) {
    let searchFieldInput = event.target.value.toLowerCase()
    setSearchField(searchFieldInput)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
