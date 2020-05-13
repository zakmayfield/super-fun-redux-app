import { ADD_FRIEND, HATE_U } from "../actions/actions"

export const initialState = {
    user: {
      name: "Zak",
      age: 99,
      friends: []
    },
    people: [
      { id: randomNum(), name: 'Rick Sanchez', age: 57 },
      { id: randomNum(), name: 'Summer', age: 25 },
      { id: randomNum(), name: 'Jerry', age: 40 }
    ]
  }

  function randomNum () {
    return Math.floor(Math.random() * 1000000000000)
  }

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                user: {
                    ...state.user,
                    friends: [...state.user.friends, action.payload]
                }
            }

        case HATE_U:
            return {
              ...state,
              user: {
                ...state.user,
                friends: state.user.friends.filter(person => person.id !== action.payload)
              }
            }

        default:
            return state
    }
}