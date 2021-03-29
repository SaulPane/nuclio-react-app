import React from 'react'

function Error(props) {

    
        return (
            props.value && <p className="error">Your task cannot be empty</p>
        )
    

    
};

export default Error;

