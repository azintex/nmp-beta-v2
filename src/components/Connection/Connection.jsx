import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Evaluation from './Evaluation';
import DefaultLayout from '../DefaultLayout/DefaultLayot';
import SubscriberType from './SubscriberType';

function Content(props) {

    let {stageId} = useParams();

    return(
        <div className='col-9'>
            <div className='card'>
                <div className='card-header'>
                    <Evaluation label={'SUBSCRIBER'} />
                </div>
                <SubscriberType />
            </div>
        </div>
    )
}

export default function Connection(props) {
    return <DefaultLayout content={<Content />} {...props} />
}