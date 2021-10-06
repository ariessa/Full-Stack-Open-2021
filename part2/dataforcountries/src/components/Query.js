import React from 'react'

const Query = (props) => {
    return (
        <div>
            find countries <input 
            value={props.query}
            onChange={props.handleQueryChange} />
        </div>
    )
}

export default Query