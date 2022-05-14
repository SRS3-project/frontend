import React from 'react';
import styles from './button.module.css';

function Button(props) {
    return(
        <button className={styles.button} onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default Button;