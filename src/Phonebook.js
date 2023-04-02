import React from 'react'
import { Person } from './Person';

export const Phonebook = ({persons, searchTerm}) => {
  return (
    <ul>
        {persons.filter(person => person.name.toLowerCase().includes(searchTerm)).map(person => {
        return <Person key={person.id} name={person.name} number={person.number}/>
      })}
    </ul>
  )
}
