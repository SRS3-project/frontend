import React from 'react';
import styles from './button.module.css';

function Button(props) {
    return(
        <button class={styles.button} onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default Button;