import React from 'react'

const ListItem = ({item, onAddtoBasketClick}) => {

    const handleAddtoBasketClick = () => {
        onAddtoBasketClick(item)

    }
    
    return (
        <>
        <li>
            {item.title}
            <br/>
            {item.price}
            <br/>
            {item.description}
            <br/>
            <img src={item.image}/>
        </li>
        <button value={item} onClick={handleAddtoBasketClick}>Add to basket</button>
        </>
    )
}

export default ListItem