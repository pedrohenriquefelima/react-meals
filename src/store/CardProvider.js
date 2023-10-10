import { useReducer } from "react";
import CardContext from "./cardContext";


const defaultCardState = {
    items: [],
    totalAmount: 0
};
//the action is what gets dispatched
//state is the last state of the component
const cardReducer = (state, action) => {

    if(action.type === 'ADD') {

        console.log(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCardItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCardItem = state.items[existingCardItemIndex];

        let updatedItems;
        if(existingCardItem) {
            const updatedItem = {
                ...existingCardItem,
                amount: existingCardItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCardItemIndex] = updatedItem;
        }else {
            updatedItems = state.items.concat(action.item);
        }
        
        return { items: updatedItems, totalAmount: updatedTotalAmount }

    } else if (action.type === 'REMOVE') {

        const existingCardItemIndex = state.items.findIndex((item) => item.id === action.itemId);
        const existingCardItem = state.items[existingCardItemIndex];

        let updatedItems;
        if(existingCardItem) {

            const updatedTotalAmount = state.totalAmount - existingCardItem.price;

            if(existingCardItem.amount > 1) {
                const updatedItem = {
                    ...existingCardItem,
                    amount: existingCardItem.amount - 1
                };
                updatedItems = [...state.items];
                updatedItems[existingCardItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.filter(item => item.id !== action.itemId);
            }
            
            return { items: updatedItems, totalAmount: updatedTotalAmount}
        }

    }

    return defaultCardState;
};

const CardProvider = props => {

    const [currentState, dispatchEvent] = useReducer(cardReducer, defaultCardState);

    const addItemToCardHandler = (item) => {
        dispatchEvent({type: 'ADD', item: item});
    }

    const removeItemFromCardHandler = (id) => {
        dispatchEvent({type: 'REMOVE', itemId: id});
    }

    const cardContextValue = {
        items: currentState.items, 
        totalAmount: currentState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCardHandler
    }

    return <CardContext.Provider value={cardContextValue}>
        {props.children}
    </CardContext.Provider>
};

export default CardProvider;