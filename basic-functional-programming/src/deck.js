import React, { Component } from 'react'
import Deck from './components/Deck'
import Slide from './components/Slide'
import CodeBlock from './components/CodeBlock'

export default class MyDeck extends Component {
  render() {
    return (
      <Deck {...this.props}>
        <Slide>
          <h1>Intro to functional programming</h1>
          <h2>with javascript</h2>
          <h3>(you heard that right)</h3>
        </Slide>
        <Slide>
            <h1>Vincent Billey aka Fenn</h1>
            <a href="http://www.twitter.com/Fenntasy">@Fenntasy</a>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div><a href="http://www.axiome.io" target="_blank"><img src="/static/axiome.png" /></a></div>
                <div><a href="http://www.metod.io" target="_blank"><img src="/static/metod.png" /></a></div>
            </div>
        </Slide>
        <Slide>
            <div className="title">Why javascript?</div>
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
        <Slide>
          <div className="title">Why functional programming?</div>
          <div>
            Many reasons!<br/>But first, you have to need it!
            <br/><br />
            <q style={{fontSize: '1.4rem', textAlign: 'left'}}>You need to see the locked door before you encounter the key</q>
            <a style={{fontSize: '1.4rem'}} href="http://mkremins.github.io/blog/doors-headaches-intellectual-need/">Max Kreminski</a>
          </div>
        </Slide>
        <Slide>
          <div className="title">Maybe you want to mimic SQL</div>
          <CodeBlock>{`
const library = [
  {title: "SICP", isbn: "0262010771", ed: 1},
  {title: "SICP", isbn: "0262510871", ed: 2},
  {title: "Joy of Clojure", isbn: "1935182641", ed: 1}
]

function select(table, keys) {
  return table.map(function(obj) {
    return _.pick(obj, keys)
  })
}

select(library, ['title'])
// [{title: "SICP"}, {title: "SICP"}, {title: "Joy of Clojure"}]
`}
          </CodeBlock>
        </Slide>
        <Slide>
          <div className="title">Select is good but what about where?</div>
          <CodeBlock>{`
function restrict(table, predicate) {
    return table.reduce(function(newTable, obj) {
        if (predicate(obj)) {
            return newTable
        } else {
            return _.without(newTable, obj)
        }
    }, table)
}

// SELECT * FROM library WHERE ed > 1
restrict(library, function(book) {
    return book.ed > 1
})
// [{title: "SICP", isbn: "0262510871", ed: 2}]
`}
          </CodeBlock>
        </Slide>
        <Slide>
          <div className="title">But you forgot the select!</div>
          <CodeBlock>{`

// SELECT title FROM library WHERE ed > 1
restrict(
    select(library, ['title', 'ed']),
    function(book) {
        return book.ed > 1
    }
)
// [{title: "SICP", ed: 2}]
`}
          </CodeBlock>
        </Slide>
      </Deck>
    )
  }
}