import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {letters} from '../data/data'
import PropTypes from 'prop-types'
import './Letters.css'

export class Game extends PureComponent {
  static propTypes = {
    guess: PropTypes.arrayOf(PropTypes.string)
  }

  isGuessed = (letter) => (this.props.guess.includes(letter))
  render() {

    return(
      <div className='Letters'>
        {
          letters.map(l => (
            <div key={l} className={`square ${this.isGuessed(l)}`}>
              <p>{l}</p>
            </div>
          ))
        }
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
