import React, { useState } from 'react'

function GifSearch(props) {
    //create state for controlled form input
    const [inputValue, setInputValue] = useState("")
    console.log(props)
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchFormSubmit(inputValue)
    }
    //render a controlled form with text input
    //invoke the callback prop when the form is submitted
    //pass the value of the form input to the callback
    //prevent default on form submit
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>What would you like to search for?</label>
                <input type="text" value={inputValue} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default GifSearch