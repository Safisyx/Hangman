import {GUESS} from './types'

export const guessLetter = (guess='.') => {
  //console.log(text)
  return {
    type: GUESS,
    payload: guess
  }
}
