import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './troop.builder.css'
import { useState } from 'react'

const TroopBuilder = ({item, setToBuild, handleSubmmit}) => {
  
  const [val,setVal] = useState('');
  const id = item.id;
  return (
    <form className='buildForm' onSubmit={handleSubmmit}>
        <label htmlFor='buildItem' style={{display: "none"}}> Add Item</label>
        <input
            className='input'
            autoFocus
            id='itemBuild'
            type='text'
            placeholder={item.name}
            required
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              setToBuild({
                "type": `${item.id}`,
                "amount": e.target.value		
              });
            }} 
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