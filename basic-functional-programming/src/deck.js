import React, { Component } from 'react'
import Deck from './components/Deck'
import Slide from './components/Slide'

export default class MyDeck extends Component {
  render() {
    return (
      <Deck>
        <Slide>
          <h1>Introduction à la programmation fonctionnelle</h1>
          <h2>en javascript (si si)</h2>
        </Slide>
        <Slide>
            <h1>Vincent Billey aka Fenn</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div><img src="/img/axiome.png" /></div>
                <div><img src="/img/metod.png" /></div>
            </div>
        </Slide>
        <Slide>
            <div className="title">Pourquoi javascript ?</div>
            <q>Imitation is the sincerest form of flattery</q>
        </Slide>
        <Slide>
            <a className="title" href="http://www.w3.org/TR/html-design-principles/">HTML Design Principles - 3.2. Priority of Constituencies</a>
            <q style={{fontSize: '1.2rem', textAlign: 'left'}}>
                In case of conflict, <b>consider users over authors over implementors over specifiers over theoretical purity</b>.
                In other words costs or difficulties to the user should be given more weight than costs to authors;
                which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors
                of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone.
                Of course, it is preferred to make things better for multiple constituencies at once.</q>
        </Slide>
      </Deck>
    )
  }
}