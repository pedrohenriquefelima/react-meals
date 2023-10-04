import React, {useContext} from "react";
import styles from './NavigationBar.module.css';
import CardContext from "../../store/cardContext";
import HomePage from "../../pages/home/HomePage";

const NavigationBar = (props) => {
    const ctx = useContext(CardContext);
    
    return (
        <div className={styles['nav-container']}>
            <div className={styles.logo}>FortuneCat</div>
            <div className={styles['card-container']} onClick={()=> {props.onShowCard()}}>
                <div>Your card</div>
                <div className={styles.widget}>{ctx.quantity}</div>
            </div>
        </div>
    )
}

export default NavigationBar;