import React from 'react';

export default function Stages(props) {
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" >New connection</li>
                <li className="breadcrumb-item active" >{`${props.stage}`}</li>
            </ol>
        </nav>
    )
}

/*
        <div className="progress">
            <div className="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar" style={{width: '66%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${props.label}>`}</div>
        </div>
*/