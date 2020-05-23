import React from 'react';

export default function Stagebar(props) {

    //let stages = ['Connection', 'Subcriber', 'Customer'];

    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.stageLabels.map((label, k) => {
                    return <li key={k} className="breadcrumb-item">{label}</li>
                })}

            </ol>
        </nav>
    )
}