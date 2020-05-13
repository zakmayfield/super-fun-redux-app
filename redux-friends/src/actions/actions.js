export const ADD_FRIEND = 'ADD_FRIEND'
export const HATE_U = 'HATE_U'

export const addFriend = friend => {
  return { type: ADD_FRIEND, payload: friend }
}

export const removeFriend = id => {
  return { type: HATE_U, payload: id }
}
