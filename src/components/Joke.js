import React from 'react'

function Joke(props) {
    return (
        <div>
            <h2>{props.item.pun}</h2>
            <p>{props.item.set}</p>
            <hr/>
        </div>
    )
}

export default Joke
