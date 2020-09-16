import React from 'react'

function GifList(props) {

    let gifArray = props.gifs.map((gifObj) => 
    <li><img src={gifObj.images.original.url} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )

    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(resp => resp.json())
    .then(data => this.setState({d: data}))
}

export default GifList