import React, {useContext} from "react";
import styles from './NavigationBar.module.css';
import CardContext from "../../store/cardContext";

const NavigationBar = (props) => {
    const ctx = useContext(CardContext);

    //number will be different for every item and item will also be different
    //0 is the initial value for the reduce - but after the first run. It will be the result of the execution
    const numberOfCardItems = ctx.items.reduce((currentNumber, item ) => {
        return currentNumber + item.amount;
    }, 0);
    
    return (
        <div className={styles['nav-container']}>
            <div className={styles.logo}>FortuneCat</div>
            <div className={styles['card-container']} onClick={()=> {props.onShowCard()}}>
                <div>Your card</div>
                <div className={styles.widget}>{numberOfCardItems}</div>
            </div>
        </div>
    )
}

export default NavigationBar;