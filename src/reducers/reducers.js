import {GUESS} from '../actions/types'

const guess = []
export default (state = guess, action) => {
  switch (action.type) {
  case GUESS :
   //console.log(state.concat(action.text))
   return state.concat(action.text)

   default :
   return state
  }
}
