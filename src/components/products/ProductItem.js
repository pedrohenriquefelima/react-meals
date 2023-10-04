import React, { useContext } from "react";
import styles from './ProductItem.module.css';
import AddQuantity from "../UI/AddQuantity";
import CardContext from "../../store/cardContext";

const ProductItem = (props) => {
    const ctx = useContext(CardContext);

    function addingItemHandler(qnt) {
        console.log(qnt);
        ctx.increaseQuantity(props.product, qnt);
    }

    return <div className={styles['product-container']}>
        <div>
            <h1>{props.product.name}</h1>
            <h4>{props.product.description}</h4>
            <h1>£{props.product.price}</h1>
        </div>
        <AddQuantity addingItem={addingItemHandler}/>
    </div>
}

export default ProductItem;