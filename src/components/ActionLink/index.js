import React from 'react'

const ActionLink = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Clicked on the Link")
    }

    return (
        <a href="https://google.com" onClick={handleClick}>Click me</a>
    )

}

export default ActionLink;