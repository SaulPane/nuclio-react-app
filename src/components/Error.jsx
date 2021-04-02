import React from 'react'

function Error(props) {

    
        return (
            props.value && <p className="error m-1 p-2">Your task cannot be empty</p>
        )
    

    
};

export default Error;

