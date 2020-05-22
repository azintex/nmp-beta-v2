import React, {useState} from 'react';
import {connect} from 'react-redux';
import DefaultLayout from '../DefaultLayout/DefaultLayot';
import Stages from './Stages';
import ChooseSusbcriberTypeStage from './ChooseSubscriberTypeStage';
import ChooseConnectionTypeStage from './ChooseConnectionTypeStage';
import Customer from './Customer';

function ConnectionBody(props) {

    let stage;

    if(props.stage.initial) {
        stage = <ChooseSusbcriberTypeStage />
    }

    if(props.stage.connection) {
        stage = <ChooseConnectionTypeStage />
    }

    if(props.stage.customer) {
        stage = <Customer />
    }


    return(
        <div className='col-9'>
            <div className='card'>                
                <Stages stage={'Subscriber'} />
                {stage}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        stage: state.stage
    }
}

const Content = connect(mapStateToProps, null)(ConnectionBody);

export default function Connection(props) {
    return <DefaultLayout content={<Content />} {...props} />
}