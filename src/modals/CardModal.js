import { Fragment, useContext } from "react"
import ReactDOM from 'react-dom';
import CardContext from "../store/cardContext";
import CardModalItem from "./CardModalItem";
import Button from "../components/UI/Button";
import styles from './CardModal.module.css';

const CardModal = (propsParent) => {
    const ctx = useContext(CardContext);
    //import context and go through array

    //3 - backdrop calls the event passed on click
    const Backdrop = props => {
        return <div className={styles.backdrop} onClick={props.onClose}></div>
    };

    const ModalOverlay = props => {
        return <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    };
    const portalElement = document.getElementById('overlays');
    
    //2 - modal passes the event to backdrop
    const Modal = (props) => {
        return (
            <Fragment>
                {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
                {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
            </Fragment>
        )
    }

    //1 - the onHideCard is being passed to modal
    return (
    <Modal onClose={propsParent.onHideCard}>
        <h2>Summary</h2>
        <div>
            {ctx.cardData.map((item) => {
                return <CardModalItem item={item} key={item.id}/>
            })}
        </div>
        <div className={styles.totals}>
            <h2>Total</h2>
            <h3>{Math.round(ctx.total * 100) / 100}</h3>
        </div>
        <div className={styles['actions-modal']}>
            <Button type="button">Save</Button>
            <Button type="button" onClick={propsParent.onHideCard} customClass='close'>Close</Button>
        </div>
    </Modal>
    )
}

export default CardModal;