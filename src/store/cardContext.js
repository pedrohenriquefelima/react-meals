import React, { useState } from "react";

const CardContext  = React.createContext({
    quantity: 0,
    total: 0.00,
    cardData: [],
    addItem: (product, quantity) => {},
    decreaseQuantity: () => {},
    increaseHandler: (productId) => {}
});

export const CardContextProvider = (props) => {
    const [totalAmount, setTotal ] = useState(0.00);
    const [ cardData, setCardData ] = useState([]);

    function addItem(product, quantity) {
        const existingIndex = cardData.findIndex((item) => item.id === product.id);

        if(existingIndex !== -1) {
            setCardData((prevData)=>{
                const updatedData = [...prevData];
                updatedData[existingIndex].quantity += quantity;
                return updatedData;
            })
        } else {
            setCardData((prevData)=>{
                const updatedProduct = { ...product, quantity };
                return [...prevData, updatedProduct];
            })
        }
        //multiply quantity * price then plus amount
        setTotal((prev)=>{ return prev + (quantity * product.price)});
    }

    function decreaseHandler(product) {
        const existingIndex = cardData.findIndex((item) => item.id === product.id);
        setCardData((prevData) => {
            // If the product already exists, update its quantity
            const updatedData = [...prevData];
            updatedData[existingIndex].quantity = updatedData[existingIndex].quantity - 1;
            if(updatedData[existingIndex].quantity === 0){
                //remove it from the array
                updatedData.splice(existingIndex, 1);
            }
            return updatedData;
        });
        setTotal((prev)=> {
            return prev - cardData[existingIndex].price;
        })
    }

    function increaseHandler(productId) {
        console.log('increase in auth being called');
        const existingIndex = cardData.findIndex((item) => item.id === productId);
        setCardData((prevData)=> {
            const updatedData = [...prevData];
            updatedData[existingIndex].quantity += 1;
            return updatedData;
        });
        setTotal((prev)=> {
            return prev + cardData[existingIndex].price;
        })
    }

    return <CardContext.Provider value={{
        quantity: cardData.length,
        total: totalAmount,
        cardData: cardData,
        increaseQuantity: addItem,
        decreaseQuantity: decreaseHandler,
        increaseHandler: increaseHandler
      }}>{props.children}</CardContext.Provider>
}

export default CardContext;