import React from 'react'

const Slide = function({ children, style }) {
  return (
    <div className="slide" style={{left: '0', ...style}}>
      { children }
    </div>
  )
}

export default Slide