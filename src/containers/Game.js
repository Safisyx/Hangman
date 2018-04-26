// src/containers/Game.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Game.css'
import Input from '../components/Input'
import Button from '../components/Button'
import Letters from '../components/Letters'
import {createGame} from '../actions/createGame'
import {isWinner, wrongGuessCount, showGuess} from '../lib/game'
//const word = words[Math.floor(Math.random()*words.length)]

export class Game extends PureComponent {
  static propTypes = {
    guess: PropTypes.arrayOf(PropTypes.string),
    word: PropTypes.string
  }

  componentWillMount() {
    this.props.createGame();
  }
  render() {

    if (isWinner(this.props.word,this.props.guess)) {
      return (
        <div id="win" className='image'>
          <p>YOU WON!!!</p>
          <div className='centralbutton'>
             <Button label='New game'/>
          </div>
        </div>
      )
    }

    if (wrongGuessCount(this.props.word,this.props.guess)>=6)
    {
      return (
        <div className="Game">
          <div className='image'>
            <div className='leftbutton'>
               <Button label='New game'/>
            </div>
            <div className='im'id={`img-6`}></div>
            <div className='rightbutton'>
               <Button label='New game'/>
            </div>
          </div>
          <div id="lose">
            <p>YOU LOSE!!!</p>
            <h3>{`The word was "${this.props.word.toUpperCase()}"`}</h3>
          </div>
        </div>
      )
    }


    return (
      <div className="Game">
        <div className='image'>
          <div className='leftbutton'>
             <Button label='Give up'/>
          </div>
          <div className='im' id={`img-${wrongGuessCount(this.props.word,this.props.guess)}`}></div>
          <div className='rightbutton'>
             <Button label='Give up'/>
          </div>
        </div>
        <div className='guessed'>
          <h2>
            {showGuess(this.props.word,this.props.guess)}
          </h2>
        </div>
        <div className="input">
          <Input/>
        </div>
        <div className='letters'>
          <Letters/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    guess: state.guess,
    word: state.word
  }
}

export default connect(mapStateToProps, {createGame})(Game)
