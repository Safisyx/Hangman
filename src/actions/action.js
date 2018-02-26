import {GUESS} from './types'

export const guessLetter = (text='.') => {
  //console.log(text)
  return {
    type: GUESS,
    text
  }
}
