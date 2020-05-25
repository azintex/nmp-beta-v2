import React, {useState} from 'react';
import {connect} from 'react-redux';
import {toStage} from '../../_actions/stage';

import FullName from '../../_addons/FullName';
import IdAzeOld from '../../_addons/IdAzeOld';
import BirthDate from '../../_addons/BirthDate';
import PhoneNumber from '../../_addons/PhoneNumber';

function Content(props) {

    const [phoneNumbersCounter, incrementPhoneNumberInputCount] = useState(2);
    const [phoneNumbers, setPhoneNumber] = useState([]);
    
    function addPhoneNumber() {
        if(phoneNumbersCounter <= 5) {
            incrementPhoneNumberInputCount(phoneNumbersCounter + 1);
            setPhoneNumber([...phoneNumbers, phoneNumbersCounter]);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    return(
        <div>
            <div className='card-body'>
                <form>
                    <div className='card-title'>Personal information</div>            
                        <IdAzeOld />
                        <BirthDate />
                        <hr></hr>
                    <div className='card-title'>Contacts information</div>
                        <div className='input-group mb-3'>
                            <PhoneNumber name={`phoneNumber1`} />
                            <div className='input-group-append'>
                                <button type='button' className='btn btn-outline-primary' onClick={addPhoneNumber}>+</button>
                            </div>
                        </div>
                        {phoneNumbers.map(k => {
                            return <div className='form-group' key={k}><PhoneNumber name={`phoneNumber${k}`} /></div>
                        })}            
                </form>
            </div>
            <div className='col-3'>
                <button type='button' className='btn btn-outline-secondary mr-2' onClick={() => props.toStage({connection: !props.stage.connection, customer: !props.stage.customer})}>Back</button>
                <button type='submit' className='btn btn-outline-primary' onClick={handleSubmit}>Add</button>
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

const Customer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default Customer;