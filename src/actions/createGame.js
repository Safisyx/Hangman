import {NEW_GAME} from './types'
import {words} from '../data/data'

export const createGame = () => {
  //console.log(text)
  return {
    type: NEW_GAME,
    payload: {
      word: words[Math.floor(Math.random()*words.length)]
    }
  }
}
