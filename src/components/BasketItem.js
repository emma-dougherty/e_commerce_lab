import React from 'react'


const BasketItem = ({item}) => {

    // const handleAddtoBasketClick = () => {
    //     onAddtoBasketClick(item)

    return (
        <>
            <li>
                {item.name}
                <br/>
                {item.price}
                <br/>
                {item.description}
                <br/>
                <img src={item.image}/>
            </li>
        </>
    )
}

export default BasketItem