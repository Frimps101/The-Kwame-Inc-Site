import React from 'react'
import { Link } from 'react-router-dom'
import './FrameStyles.css'

const FrameStyles = () => {
  return (
    <div className='wall'>
        <h3>Picture frame styles</h3>
        <p>Choose from a wide range of frame designs and styles.</p>
        <button className='button'>
          <Link to="/gallery">
            Have a look 👀
          </Link>
          </button>
    </div>
  )
}

export default FrameStyles