import React from 'react'
import Logo from '../assets/LogoTodo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
        <header className={styles.header} >
          <img src={Logo} alt="Todo App Logo" srcSet="" />
        </header>  )
}

export default Header