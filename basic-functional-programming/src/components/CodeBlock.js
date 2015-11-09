import React from 'react'
import hl from 'highlight.js'

const CodeBlock = function({ children, style }) {
  const createMarkup = function() {
    const code = hl.highlight('javascript', children)
    return {
      __html: code.value
    }
  }
  return (
    <pre style={{fontSize: '1rem', textAlign: 'left', padding: '0 1rem'}}>
      <code className="hljs"
        dangerouslySetInnerHTML={createMarkup()} />
    </pre>
  )
}

export default CodeBlock