import React, {useState} from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/src/addons/phone-type-formatter.az';

export default function PhoneNumber(props) {
    return(
        <div className='form-group'>
            <label htmlFor='phoneNumber'>Doğulma tarixi</label>
            <Cleave className='form-control' name='phoneNumber' id='phoneNumber' options={{phone: true, phoneRegionCode: 'AZ'}} placeholder='Phone number' required />
        </div>
    )
}