import React from 'react'
import Person from './Person'

const Persons = (props) => {
  const personsToShow = props.newFilter === ''
    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase().indexOf(props.newFilter.toLowerCase()) !== -1)

  return (
    personsToShow.map(person => 
      <Person 
        key={person.name} 
        person={person} 
        persons={props.persons} 
        setPersons={props.setPersons} 
        setMessage={props.setMessage}
      />
    )
  )
}

export default Persons