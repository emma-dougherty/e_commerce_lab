import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basketItems}) => {
    const listOfBasketItems = basketItems.map((item, index) => {
        return <BasketItem item={item} key={index}/>
    })

    return (
        <>
        <h3>How do. Here be yer list o' stuff</h3> 
        {listOfBasketItems}
        </>
        
    )
}

export default Basket