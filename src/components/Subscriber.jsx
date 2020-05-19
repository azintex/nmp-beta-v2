import React, {useState} from 'react';
import FullName from '../_addons/FullName';
import BirthDate from '../_addons/BirthDate';
import PhoneNumber from '../_addons/PhoneNumber';
import DefaultLayout from './DefaultLayout/DefaultLayot';

function Content() {

    const [phoneNumbersCounter, incrementPhoneNumberInputCount] = useState(2);
    const [phoneNumbers, setPhoneNumber] = useState([]);
    
    function addPhoneNumber() {
        if(phoneNumbersCounter <= 5) {
            incrementPhoneNumberInputCount(phoneNumbersCounter + 1);
            setPhoneNumber([...phoneNumbers, phoneNumbersCounter]);
        }
    }

    return(
        <div className='col-9'>
            <div className='card'>
                <div className='card-body'>
                    <form>
                        <h6 className='card-title'>PERSONAL INFORMATION</h6>
                        <FullName />
                        <BirthDate />
                        <h6 className='card-title'>CONTACTS</h6>
                        <div className='input-group mb-3'>
                            <PhoneNumber name={`phoneNumber1`} />
                            <div className='input-group-append'>
                                <button type='button' className='btn btn-outline-primary' onClick={addPhoneNumber}>+</button>
                            </div>
                        </div>
                        {phoneNumbers.map(k => {
                            return <div className='form-group' key={k}>
                                <PhoneNumber name={`phoneNumber${k}`} />
                            </div>
                        })}            
                    </form>
                </div>
            </div>
        </div>
    )
}


export default function Subscriber(props) {
    return(
        <DefaultLayout content={<Content />} {...props} />
    )
}