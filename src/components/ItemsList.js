import React from 'react'
import ListItem from './ListItem'



const ItemsList = ({items, onAddtoBasketClick}) => {

    const listOfItems = items.map ((item, index) => {
        return <ListItem item={item} key={index} onAddtoBasketClick={onAddtoBasketClick}/>
    })
    return (
        <>
        <ul>
            {listOfItems}
        </ul>
        </>
    )

}

export default ItemsList