import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { slideLeft, slideRight } from '../actions'

const KEY_LEFT = 37
const KEY_RIGHT = 39
const KEY_SPACE = 32

class Deck extends Component {
  constructor(props) {
    super(props)
    this.registerEvents = this.registerEvents.bind(this)
  }
  componentWillMount() {
    window.addEventListener('keydown', this.registerEvents)
  }
  registerEvents(e) {
    switch(e.keyCode) {
      case KEY_LEFT:
        this.props.dispatch(slideLeft())
      break;
      case KEY_RIGHT:
      case KEY_SPACE:
        if (this.props.currentSlide < this.props.children.length - 1) {
          this.props.dispatch(slideRight())
        }
      break;
    }
  }
  componentWillUnmount() {
    window.removeEventListener(this.registerEvents)
  }
  render() {
    const { dispatch, currentSlide, children } = this.props
    return (
      <div>
        {React.Children.map(children, function(c, index) {
          return React.cloneElement(c, {
            key: index,
            style: {
              ...c.props.style,
              left: ((index - currentSlide) * 100) + 'vw'
            }
          })
        }, this)}
      </div>
    );
  }
}

Deck.propTypes = {
  currentSlide: PropTypes.number
}

function select(state) {
  return {
    currentSlide: state.currentSlide
  }
}

export default connect(select)(Deck)