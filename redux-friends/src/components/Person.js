import React from 'react'
import { connect } from 'react-redux'
import { addFriend, removeFriend } from '../actions/actions'

const Person = props => {
  return (
    <div>
      <p>{props.person.name}</p>
      <button onClick={() => props.addFriend(props.person)}>Add</button>
      <button onClick={() => props.removeFriend(props.person.id)}>GTFO</button>
    </div>
  )
}

export default connect(null, {addFriend, removeFriend})(Person)
