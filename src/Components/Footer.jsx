import React from 'react'
import style from '../css/Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={style.parent}>
        <div className={style.child1}>
            <p className={style.heading}>Quick Links</p>

            <ul className={style.ullist}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/'}>Features</Link></li>
                <li><Link to={'/'}>Support</Link></li>
            </ul>
        </div>

        <div className={style.child2}>
           <p>© 2027 Exam Portal Inc. All rights reserved</p>
        </div>
        
    </div>
  )
}

export default Footer