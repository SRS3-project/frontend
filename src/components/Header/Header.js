import React from 'react'
import styles from './header.module.css'
import ResourcePanel from '../ElementPanels/ResourcePanel'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={require('../../images/logo.png')}/>
      <div className={styles.resources}>
        <ResourcePanel/>
      </div>
    </header>
  )
}

export default Header