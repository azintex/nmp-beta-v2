import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

export default function BirthDate(props) {
    return(
        <div className='form-group'>
            
            <Cleave className='form-control' name='birthDate' id='birthDate' options={{date: true}} placeholder='Birth date' />
            <p className='text-danger'>* <small className='form-tex text-muted'>Doğulma tarixi</small></p>
        </div>
    )
}