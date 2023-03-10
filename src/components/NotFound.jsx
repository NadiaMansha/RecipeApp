import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div
    className='NotFound'
    >
      <h2>404</h2>
      <h4>The page your are looking for doesn't exist</h4>
      <button className="link-button">
        <Link to="/"
        style={
         { color:"white",
          textDecoration:"none"
        }}
        >  Go to Home</Link>
      </button>
    </div>
   
  )
}

export default NotFound