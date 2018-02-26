// src/containers/Game.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Game.css'
import Input from '../components/Input'
import {words} from '../data/data'
const word = words[Math.floor(Math.random()*words.length)]

function showGuess(word, guesses) {
  return word
    .split('')
    .map(char => {
      if (guesses.includes(char)) return char;
      return '_';
    })
    .join(' ')
}

function isWinner(word, guesses) {
    let newWord = showGuess(word, guesses)
      if (newWord.indexOf("_") === -1 ) return true;
      return false;

}

function wrongGuessCount(word, guesses) {
  let uniqueArray = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }
  let guess=uniqueArray(guesses)
  return guess
    .filter(g => word.indexOf(g)===-1)
    .length
}

export class Game extends PureComponent {
  static propTypes = {
    guess: PropTypes.arrayOf(PropTypes.string)
  }


  render() {
    if (isWinner(word,this.props.guess)) {
      return (
        <div id="win">
          <p>YOU WON!!!</p>
        </div>
      )
    }
    if (wrongGuessCount(word,this.props.guess)>=6)
    {
      return (
        <div className="Game">
          <div className='image'>
            <div className='im'id={`img-${wrongGuessCount(word,this.props.guess)}`}></div>
          </div>
          <div id="lose">
            <p>YOU LOSE!!!</p>
            <h3>The word was "{word.toUpperCase()}"</h3>
          </div>
        </div>
      )
    }


    return (
      <div className="Game">
        <div className='image'>
          <div className='im' id={`img-${wrongGuessCount(word,this.props.guess)}`}></div>
        </div>
        <div className='guessed'>
          <h2>
          {showGuess(word,this.props.guess)}
          </h2>
        </div>
        <div className="input">
          <Input/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    guess: state.guess
  }
}

export default connect(mapStateToProps)(Game)
