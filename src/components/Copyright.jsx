import React from 'react'
import { Link } from "react-router-dom";
import "./Copyright.css"

const Copyright = () => {
  return (
    <div className='copyright_wrapper'>
        <section className='copyright'>
            <div className="c_statement">
                <p>&copy; The Kwame Inc</p>
            </div>
            <div className="c_others">
                <Link to="/tos">Terms of Service</Link>
                <Link to="/tos">Privacy policy</Link>
            </div>
        </section>
    </div>
  )
}

export default Copyright