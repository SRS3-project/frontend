import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './troop.builder.css'

const TroopBuilder = ({toBuild}) => {
  return (
    <form className='buildForm'>
        <label htmlFor='buildItem' style={{display: "none"}}> Add Item</label>
        <input
            className='input'
            autoFocus
            id='itemBuild'
            type='text'
            placeholder={toBuild.name}
            required
        />
        <button
            type='submit'
            aria-label='Build'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default TroopBuilder