import React from 'react'
import style from 'styled-components'

const Image = style.img`
    max-width: 15em;
    margin: 2em;
    align-self: center;
`;

const LiStyle = style.li`
    justify-content: center;
    padding: 3em;
    list-style-type: none;
`;

const Button = style.button`
    margin: 1em;
`;

const Info = style.p`
    text-align: center;
`;


const ListItem = ({item, onAddtoBasketClick}) => {

    const handleAddtoBasketClick = () => {
        onAddtoBasketClick(item)
    }

    return (
        <>
            <LiStyle>
                <Image src={item.image}/>
                <br/>
                <Info>{item.title}</Info>
                <br/>
                <Info>£{item.price}</Info>
                <br/>
                <Info>{item.description}</Info>
                <br/>
            <Button value={item} onClick={handleAddtoBasketClick}>Add to basket</Button>
            </LiStyle>
        </>
    )
}

export default ListItem