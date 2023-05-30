import React from "react";
export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage : "https://i.imgflip.com/39t1o.jpg"
    });

    React.useEffect(()=> {
        console.log("Render ran")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMeme(data))
    },[])

    
    function handleChange(event){
        const {name,value} = event.target;
        setMeme((prevMeme) => ({...prevMeme,
            [name] : value})
        )
    }

    console.log("meme",meme)
    const [allMeme, setallMeme] = React.useState()
    console.log("allMeme",allMeme)
    function getMemeImage(ev){
        ev.preventDefault();
        const memesArray = allMeme.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        // const url = memesArray[randomNumber].url;
        // console.log("url", url);
        // setallMemeImages(memesArray[randomNumber].url);
        setMeme((prevMeme) => ({
            ...prevMeme, randomImage: memesArray[randomNumber].url
        }));

        console.log("random number",randomNumber )
        // console.log("memeImage", memeImage)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage}
                    className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt="" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
        </main>
    )
};