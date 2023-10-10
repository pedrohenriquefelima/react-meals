import { useContext } from 'react';
import styles from './CardModalItem.module.css';
import CardContext from '../store/cardContext';

const CardModalItem = (props) => {
    const ctx = useContext(CardContext);

    const decrementAmount = () => {
        ctx.removeItem(props.item.id);
    }

    const incrementCount = () => {
        ctx.addItem({...props.item, amount: 1});
    };


    return (
        <div className={styles['container-item']}>
            <div className={styles.body}>
                <h3>{props.item.name}</h3>
                <div className={styles['sub-body']}>
                    <div>£{props.item.price}</div>
                    <div>qty: {props.item.amount}</div>
                </div>
            </div>
            <div className={styles['actions-buttons']}>
                <button type='button' onClick={decrementAmount}>-</button>
                <button type='button' onClick={incrementCount}>+</button>
            </div>
        </div>
    )
};

export default CardModalItem;