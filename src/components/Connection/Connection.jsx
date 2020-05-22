import React, {useState} from 'react';
import {connect, useStore} from 'react-redux';
import {toStage, fromStage} from '../../_actions/connection';

import DefaultLayout from '../DefaultLayout/DefaultLayot';

import Stages from './Stages';
import ChooseSusbcriberTypeStage from './ChooseSubscriberTypeStage';
import ChooseConnectionTypeStage from './ChooseConnectionTypeStage';

function ConnectionBody(props) {

    //console.log(useStore().getState().connection);

    return(
        <div className='col-9'>
            <div className='card'>                
                <Stages stage={'Subscriber'} />
                {props.stage.initial ? <ChooseSusbcriberTypeStage /> : null}
                {props.stage.current == 'connection' ? <ChooseConnectionTypeStage /> : null}
                {props.stage.current == 'customer' ? <h3>Customer</h3> : null}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        stage: state.connection.stage
    }
}

const Content = connect(mapStateToProps, null)(ConnectionBody);

export default function Connection(props) {
    return <DefaultLayout content={<Content />} {...props} />
}