import React from 'react'
import personService from '../services/persons'

const Person = (props) => {
  return (
    <p>
      {props.person.name} {props.person.number}
      <button onClick={() => {
        if (window.confirm(`Delete ${props.person.name}?`)) {
          personService
            .remove(props.person.id)
            .then(
              props.setPersons(props.persons.filter(p => p.id !== props.person.id))
            )
          console.log(`Success: Deleted ${props.person.name}`)
          props.setMessage(
            `Deleted ${props.person.name}`
          )
          setTimeout(() => {
            props.setMessage(null)
          }, 5000)
        }        
      }}>delete</button>
    </p>
  )
}

export default Person