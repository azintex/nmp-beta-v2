import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DefaultLayout from '../DefaultLayout/DefaultLayot';
import Stagebar from './Stagebar';
import ChooseSusbcriberTypeStage from './ChooseSubscriberTypeStage';
import ChooseConnectionTypeStage from './ChooseConnectionTypeStage';
import {Customer2} from './Customer2';

function ConnectionBody(props) {

    //const [stageLabels, setLabel] = useState(['New Connection']);

    let currentStage;
    let stageLabels = props.stage.initial ? ['New connection', 'Subscriber'] : ['New connection', 'Subscriber', 'Connection']

    if(props.stage.initial) {
        currentStage = <ChooseSusbcriberTypeStage />;
        //setLabel('Subscriber');
    }

    if(props.stage.connection) {
        currentStage = <ChooseConnectionTypeStage />;
        //setLabel([...stageLabels, 'Connection']);
    }

    if(props.stage.customer) {
        currentStage = <Customer2 />;
        //setLabel([...stageLabels, 'Customer']);
    }


    return(
        <div className='col-9'>
            <div className='card'>                
                <Stagebar stageLabels={stageLabels} />
                {currentStage}
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