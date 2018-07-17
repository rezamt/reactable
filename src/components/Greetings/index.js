import React from 'react'


const UserGreeting = (props) => {
    return <div>Welcome back {props.username}</div>
}


const GuestGreeting = () => {
    return <div>Please sign up.</div>
}


const Greeting = (props) => {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) return <UserGreeting username = {props.username}/>
    else return <GuestGreeting/>
}

// module.exports = {UserGreeting, GuestGreeting}

export default Greeting;