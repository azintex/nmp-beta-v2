import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toStage} from '../../_actions/stage';

function Content(props) {

    const [connectionType, setConnectionType] = useState({pppoe: false, ipoe: false, staticIp: false, value: ''});
    let params = {
        connection: !props.stage.connection,
        customer: !props.stage.customer,
        labels: [...props.stage.labels, 'Connection type']
    }

    return(
        <div>
            <div className='card-body'>
                <div className='card-title'>Choose connection type</div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={connectionType.pppoe} id="pppoe" name="pppoe" className="custom-control-input" value='pppoe' onChange={(e) => setConnectionType({pppoe: !connectionType.pppoe, ipoe: false, staticIp: false, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="pppoe">PPPoE</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={connectionType.ipoe} id="ipoe" name="ipoe" className="custom-control-input" value='ipoe' onChange={(e) => setConnectionType({pppoe: false, ipoe: !connectionType.ipoe, staticIp: false, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="ipoe">IPoE</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={connectionType.staticIp} id="staticIp" name="staticIp" className="custom-control-input" value='staticIp' onChange={(e) => setConnectionType({pppoe: false, ipoe: false, staticIp: !connectionType.staticIp, value: e.target.value}) } />
                    <label className="custom-control-label" htmlFor="staticIp">Static IP</label> 
                </div>
            </div>
                <div className='col-3'>
                    <button type='button' className='btn btn-outline-secondary mr-2' onClick={() => props.toStage({connection: !props.stage.connection, initial: !props.stage.initial})}>Back</button>
                    <button type='button' className='btn btn-outline-primary' disabled={connectionType.value !== '' ? false : true} onClick={() => props.toStage(params)}>Next</button>
                </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        stage: state.stage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toStage: stage => dispatch(toStage(stage))
    }
}

const ChooseConnectionTypeStage = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ChooseConnectionTypeStage;