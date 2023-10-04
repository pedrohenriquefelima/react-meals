import React from "react";
import ProductItem from "./ProductItem";
import styles from './ProductList.module.css';

const menuData = [
    {
        id: 1,
        name: 'Mixed Seafood Starters',
        description: 'Squid ring, prawn toast, prawn katsu, butterfly prawn & prawn tempura',
        price: 6.99,
    },
    {
        id: 2,
        name: 'Spring Roll',
        description: 'Chicken, Vegetarian, Duck and others...',
        price: 4.99,
    },
    {
        id: 3,
        name: 'Battered Meal Balls',
        description: 'Choice of sauce: sweet & sour / curry sauce / bbq',
        price: 5.99,
    },
    {
        id: 4,
        name: 'Crispy Mongolian Lamb',
        description: 'Served with pancakes, hoisin sauce, hand-cut cucumber and spring onion',
        price: 12.99,
    },
    {
        id: 5,
        name: 'Mixed Seafood Starters',
        description: 'from £7.99',
        price: 8.99,
    }
]
const ProductList = () => {
    return (
        <div className={styles['product-list-container']}>
            {menuData.map(item => {
                return <ProductItem product={item} key={item.id}></ProductItem>
            })}
        </div>
    )
}

export default ProductList;