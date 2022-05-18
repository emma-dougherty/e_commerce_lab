import React from 'react'

const Header = ({user, listsArray, handleSelectChange }) => {
    return (
        <div id='header'>
            <h3>Hi {user.name}</h3>
            <h1>Our Lovely Littl' Shop</h1>
            <div>
                <select onChange={handleSelectChange}>
                    <option key='0' value={listsArray[0]}>
                        All items
                    </option>
                    <option key='1' value={listsArray[1]}>
                        Here's yer basket, luv
                    </option>

                </select>
            </div>
        </div>
    )
} 

export default Header