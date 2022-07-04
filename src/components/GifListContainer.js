import React, { useState, useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    //Create state to store first 3 elements
    const [gifs, setGifs] = useState([]);
    const [userSearch, setUserSearch] = useState("dolphin")
    //Fetch the data
    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q${userSearch}=&api_key=dc6zaTOxFJmzC&rating=g")
            .then(resp => {
                return resp.json()
            })
            .then(({ data }) => {
                const newData = data.slice(0, 3).map(gif => {
                    return { url: gif.images.original.url }
                })
                setGifs(newData)
            })
    }, [])


    //Pass the data

    //Pass the 3 elements down to the GifList component

    //Render the GifList component
    //Create a handler function to pass to GifSearch

    const onSearchFormSubmit = (userInput) => {
       setUserSearch(userInput)
    };


    return (
        <div>
            <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
            <GifList theGifs={gifs} />
        </div>
    );
}
export default GifListContainer