import { useState, useEffect } from 'react'
import SearchFilter from './SearchFilter';
import { Form } from './Form';
import { Phonebook } from './Phonebook';

import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const promise = axios.get('http://localhost:3000/persons')
  
  useEffect(() => {
    if (!persons.length) {
      promise.then(resp => {
        setPersons(resp.data)
      })
    }
  }, [persons, promise])
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter setSearchTerm={setSearchTerm} />
      <Form persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
      <h2>Numbers</h2>
      {persons.length && <Phonebook persons={persons} searchTerm={searchTerm} />}
    </div>
  )
}

export default App