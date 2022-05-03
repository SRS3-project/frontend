import React from "react";
import styles from './itembox.module.css'
import { useNavigate } from "react-router-dom"


function ItemBox(props) {

    return (
        <div class={styles.div}>
            <label className={styles.topLabel}>{props.topLabel}</label>
            <img className={styles.img} src={props.image}/>
            <label className={styles.bottomLabel}>{props.bottomLabel}</label>
        </div>
    )
}

export default ItemBox;