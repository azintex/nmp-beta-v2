import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

export default function BirthDate(props) {
    return(
        <div className='form-group'>
            <label htmlFor='birthDate'>Doğulma tarixi</label>
            <Cleave className='form-control' name='birthDate' id='birthDate' options={{date: true}} placeholder='Birth date' />
        </div>
    )
}