import React, { Component, PropTypes } from 'react'

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
  componentDidMount() {
    console.log(this.props.params)
    if (this.props.params.slide === undefined) {
      this.props.history.replaceState(null, '/1')
    }
  }
  registerEvents(e) {
    const { children, params, history} = this.props
    let slide = parseInt(params.slide)
    switch(e.keyCode) {
      case KEY_LEFT:
        if (slide > 1) {
          history.pushState(null, '/' + (slide - 1))
        }
      break;
      case KEY_RIGHT:
      case KEY_SPACE:
        if (slide < children.length) {
          history.pushState(null, '/' + (slide + 1))
        }
      break;
    }
  }
  componentWillUnmount() {
    window.removeEventListener(this.registerEvents)
  }
  render() {
    const { currentSlide, children, params } = this.props
    let slide = parseInt(params.slide) - 1
    const renderChildren = function(c, index) {
      return React.cloneElement(c, {
        key: index,
        style: {
          ...c.props.style,
          left: ((index - slide) * 100) + 'vw'
        }
      })
    }

    return (
      <div className="deck">
        {children.map(renderChildren, this)}
      </div>
    );
  }
}

Deck.propTypes = {
  currentSlide: PropTypes.number
}

export default Deck