import {GUESS, NEW_GAME, GIVE_UP} from '../actions/types'

const guess = []
export default (state = guess, action) => {
  switch (action.type) {
  case GUESS :
    return state.concat(action.payload)
  case NEW_GAME:
    return []
  case GIVE_UP:
    return state.concat('.', '/', ';', '[', ']', '-')
  default :
    return state
  }
}
