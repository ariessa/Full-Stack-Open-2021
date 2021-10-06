import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some(e => e.name === newName)) {
      
      if (window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber}
  
        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
            console.log(`Success: Replaced ${newName}'s number`)
            setMessage(`Replaced ${newName}'s number`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            console.log(`Error: Information of ${newName} has already been removed from server`)
            setMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.name !== newName))
          })
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          console.log(`Success: Added ${newName}`)
          setMessage(`Added ${newName}`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter 
        newFilter={newFilter} 
        handleFilterChange={handleFilterChange} 
      />
      
      <h3>add a new</h3>

      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons 
        persons={persons} 
        newFilter={newFilter}
        setPersons={setPersons}
        setMessage={setMessage}
      />
    </div>
  )
}

export default App