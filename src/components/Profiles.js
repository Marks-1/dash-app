import React from "react";


function Profiles(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.coverImg} alt="Profile"/>
            <p>{props.stats}</p>
            <p>{props.location}</p>
        </div>
    )
}

export default Profiles
