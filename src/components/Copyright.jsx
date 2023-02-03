import React from 'react'
import "./Copyright.css"

const Copyright = () => {
  return (
    <div className='copyright_wrapper'>
        <section className='copyright'>
            <div className="c_statement">
                <p>&copy; The Kwame Inc</p>
            </div>
            <div className="c_others">
                <a href="3">Terms of Service</a>
                <a href="#">Privacy policy</a>
            </div>
        </section>
    </div>
  )
}

export default Copyright