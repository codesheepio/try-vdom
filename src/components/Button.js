import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    let {color, label} = this.props
    return (
      <button
        className={`button button-${color}`}
        onClick={this.clickHandler}
      >
        <b>{`label was clicked ${this.state.counter} times`}</b>
      </button>
    )
  }
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
}

Button.defaultProps = {
  label: 'OK',
}

export default Button
