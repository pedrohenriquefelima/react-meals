import { useState } from "react";
import Button from "./Button";
import styles from './AddQuantity.module.css'

const AddQuantity = (props) => {
    const [qnt, setQnt] = useState(0);

    function quantityOnChangeHandler(event){
        props.addingItem(qnt);
    }

    return (
        <div className={styles["add-container"]}>
            <div className={styles["amount-container"]}>
                <h3>Amount</h3>
                <input type='number' min='0' onChange={(event) => {setQnt(+event.target.value)}}></input>
            </div>
            <Button onClick={quantityOnChangeHandler}>+ Add</Button>
        </div>
    )
}

export default AddQuantity;