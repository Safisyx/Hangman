import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createGame } from '../actions/createGame'
import { giveUp } from '../actions/giveUp'
import './Button.css'

export class Button extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    if (this.props.label==='New game')
      this.props.createGame()
    if (this.props.label==='Give up')
      this.props.giveUp()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="Button"
      >
        {this.props.label}
      </button>
    )
  }
}

export default connect(null,{createGame, giveUp})(Button)
