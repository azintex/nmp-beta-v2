import React from 'react';

export default function Evaluation(props) {
    return(
        <div className="progress">
            <div className="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar" style={{width: '66%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${props.label}>`}</div>
        </div>
    )
}