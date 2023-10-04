import { useContext } from 'react';
import styles from './CardModalItem.module.css';
import CardContext from '../store/cardContext';

const CardModalItem = (props) => {
    const ctx = useContext(CardContext)
    return (
        <div className={styles['container-item']}>
            <div className={styles.body}>
                <h3>{props.item.name}</h3>
                <div className={styles['sub-body']}>
                    <div>£{props.item.price}</div>
                    <div>qty: {props.item.quantity}</div>
                </div>
            </div>
            <div className={styles['actions-buttons']}>
                <button type='button' onClick={()=> {ctx.decreaseQuantity(props.item)}}>-</button>
                <button type='button' onClick={()=> {ctx.increaseHandler(props.item.id)}}>+</button>
            </div>
        </div>
    )
};

export default CardModalItem;