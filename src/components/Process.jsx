import React from 'react'
import "./Process.css"
import { motion, useSpring } from 'framer-motion';

const Process = () => {
  return (
    <section className='process'>
        <motion.div 
            className="process_text"
            initial={{ x: -650, opacity: 0}}  
            animate={{ x: -10, opacity: 1}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120}}
        >
            <h2>Custom framing made simple</h2>
            <div className="process_item">
                <h3>1</h3>
                <p>Send picture as document via Whatsapp or via <span>maxkonadu8@gmail.com</span></p>
            </div>
            <div className="process_item">
                <h3>2</h3>
                <p>Make half/full payment</p>
            </div>
            <div className="process_item">
                <h3>3</h3>
                <p>Frame is built and brought to you</p>
            </div>
        </motion.div>
        <div className="process_img">
            <motion.img 
                src="/images/whatsapp_order.png" alt="whatsapp" 
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{ duration: 1}}
            />
            <motion.span 
                class="dot"
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{ duration: .2}}
            >

            </motion.span>
        </div>
    </section>
  )
}

export default Process