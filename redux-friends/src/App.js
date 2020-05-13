import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import ListOfPeople from './components/ListOfPeople'
import MyFriendsList from './components/MyFriendsList'

function App (props) {
  return (
    <div className='App'>
      <h2>Sup</h2>
      <ListOfPeople />
      <MyFriendsList />
    </div>
  )
}

const mapStateToProps = state => {
  console.log({ state })
  return {
    state
  }
}

export default connect(mapStateToProps, {})(App)
