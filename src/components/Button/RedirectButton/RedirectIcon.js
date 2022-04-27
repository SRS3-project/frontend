import React from "react";
import { useNavigate } from "react-router-dom"
import styles from './redirecticon.module.css'

function RedirectIcon(props) {

    const navigate = useNavigate()

    function routerChange(path) {
        navigate(path)
    }

    return (
        <div class={styles.div} onClick={() => routerChange(props.path)}>
            <label className={styles.topLabel}>{props.topLabel}</label>
            <img className={styles.img}src={props.image}/>
            <label className={styles.bottomLabel}>{props.bottomLabel}</label>
        </div>
    )
}

export default RedirectIcon;