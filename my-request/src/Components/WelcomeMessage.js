import React from 'react';

const WelcomeMessage = (props) => {
    if (!props.name) {
        return <div>...</div>
    }
    return (
        <h1>Welcome Solver! {props.name}</h1>
    )
}
export default WelcomeMessage;