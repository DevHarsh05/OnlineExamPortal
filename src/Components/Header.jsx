import React from 'react'
import Logo from '../assets/react.svg'
import styles from '../css/Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className={styles.NavBar}>

      <h2 className={styles.logo}>
        Online <img src={Logo} alt="logo" /> Exam Portal
      </h2>

      <ul className={styles.ulList}>
        <li className={styles.ulItem}>
          <Link to="/">Home</Link>
        </li>

        <li className={styles.ulItem}>
          <Link to="/contacts">Contacts</Link>
        </li>

        <li className={styles.ulItem}>
          <Link to="/services">Services</Link>
        </li>

        <li className={styles.ulItem}>
          <Link to="/about">About</Link>
        </li>

        <li className={styles.ulItem}>
          <Link to="/logintype">Login</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Header