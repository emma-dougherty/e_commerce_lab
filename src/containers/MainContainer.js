import React, { useEffect, useState } from 'react'
import ItemsList from '../components/ItemsList'
import Header from '../components/Header'
import Basket from '../components/Basket'


const MainContainer = () => {


    const [items, setItems] = useState ([])
    const [user, setUser] = useState ({name: 'Dick Van Dyke'})
    const [basketItems, setBasketItems] = useState ([])
    const listsArray = [items, basketItems]
    const [selectedList, setSelectedList] = useState([])

    useEffect(() => {
        getItems()
    }, [selectedList])

    const handleSelectChange = function (event) {
        setSelectedList(event.target.value)
    }

    const onAddtoBasketClick = (item) => {
        const copyList = [...basketItems]
        copyList.push(item)
        setBasketItems(copyList)
    }

    const getItems = async () => {
        const apiResponse = await fetch('https://fakestoreapi.com/products')
        const itemsData = await apiResponse.json()
        setItems(itemsData)
    }

    return (
        <>
        <Header user={user} listsArray={listsArray} handleSelectChange={handleSelectChange}/>

        <div>
            {selectedList==basketItems ? <Basket basketItems={basketItems}/> : <ItemsList items={items} onAddtoBasketClick={onAddtoBasketClick}/>}
            
        
        </div>
        
        </>
    )
}

export default MainContainer