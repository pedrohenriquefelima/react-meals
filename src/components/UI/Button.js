import React from "react";
import styles from './Button.module.css'

const Button = (props) => {
    console.log(props.customClass);
    return <button className={[`${styles.button} ${props?.customClass !== null ?  styles.close: ''}`]} onClick={props.onClick}>{props.children}</button>
}

export default Button;

