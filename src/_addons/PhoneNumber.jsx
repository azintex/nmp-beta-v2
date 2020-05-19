import React, {useState} from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/src/addons/phone-type-formatter.az';

export default function PhoneNumber(props) {
    return <Cleave className='form-control' name={props.name} id='phoneNumber' 
        options={{phone: true, phoneRegionCode: 'AZ'}} placeholder='Phone number' required />
}