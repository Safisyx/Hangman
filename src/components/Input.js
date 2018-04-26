import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {guessLetter} from '../actions/guessLetter'
import {letters} from '../data/data'
import './Input.css'

export class Input extends PureComponent {
  static propTypes = {
    guessLetter: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    let x = e.target.value.toLowerCase()
    //console.log(x)
    if (letters.includes(x))
      this.props.guessLetter(x)
    e.target.value=''
  }

  render() {
    return (
      <div className='Input'>
        Guess a letter: <input
          type ='text'
          id = 'guess'
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = ({guessLetter})

export default connect(null, mapDispatchToProps)(Input)
