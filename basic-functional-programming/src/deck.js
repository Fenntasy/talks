import React, { Component } from 'react'
import Deck from './components/Deck'
import Slide from './components/Slide'

export default class MyDeck extends Component {
  render() {
    return (
      <Deck>
        <Slide style={{background: 'yellow'}}>
          slide 1
        </Slide>
        <Slide style={{background: 'green'}}>2</Slide>
        <Slide style={{background: 'red'}}>slide 3</Slide>
      </Deck>
    )
  }
}