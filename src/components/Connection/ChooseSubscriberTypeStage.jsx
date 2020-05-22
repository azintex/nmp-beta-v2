import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toStage} from '../../_actions/stage';

function Content(props) {

    const [subscriberType, setSubscriberType] = useState({private: false, company: false, value: ''});
    //console.log(props);

    return(
        <div>
            <div className='card-body'>
                <div className='card-title'>Choose subscriber type</div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={subscriberType.private} id="private" name="private" className="custom-control-input" value='private' onChange={(e) => setSubscriberType({private: !subscriberType.private, company: false, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="private">Fərdi şəxs</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={subscriberType.company} id="company" name="company" className="custom-control-input" value='company' onChange={(e) => setSubscriberType({private: false, company: !subscriberType.company, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="company">Şirkət</label>
                </div>
            </div>
            <div className='col-3'>
                <button type='button' className='btn btn-outline-primary' 
                    disabled={subscriberType.value !== '' ? false : true} onClick={() => props.toStage({connection: !props.stage.connection, initial: !props.stage.initial})}>Next</button>
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

const ChooseSubscriberTypeStage = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ChooseSubscriberTypeStage;