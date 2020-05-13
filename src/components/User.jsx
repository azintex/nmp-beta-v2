import React from 'react';

export default function UserPage(props) {
    return(
        <div>
            <p>User page...</p>
            <button onClick={() => props.history.goBack()}>Back</button>
        </div>
    )
}