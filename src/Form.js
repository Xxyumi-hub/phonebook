import React from 'react'

export const Form = ({persons, setPersons, newName, setNewName, setPhoneNumber, phoneNumber}) => {
  const people = persons.filter(person => person.name === newName)
  return (
  <form>
    <div>
      name: <input onChange={(e) => setNewName(e.target.value)}/>
    </div>
    <div>
      number: <input onChange={(e) => setPhoneNumber(e.target.value)}/>
    </div>
    <div>
      <button type="submit" onClick={(e) => {
        e.preventDefault();
        if (people.length) {
          console.log('yes')
          alert(`${newName} is already added to phone book`)
        } else {
          console.log('no')
          setPersons([...persons, {name: newName, number: phoneNumber}])
        }
        }}>add</button>
    </div>
  </form>
  )
}
