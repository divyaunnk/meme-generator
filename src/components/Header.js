import React from "react";

export default function Header(props) {
    
    return (
        <header className="header">
            <img src={`../images/${props.imgName}`} alt="" className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project3</h4>
        </header>
    )
};