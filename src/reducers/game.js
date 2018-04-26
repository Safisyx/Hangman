import {NEW_GAME} from '../actions/types'

//const guess = []
export default (state = '', action) => {
  switch (action.type) {
  case NEW_GAME :
    return action.payload.word

  default :
    return state
  }
}
