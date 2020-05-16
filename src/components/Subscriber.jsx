import React from 'react';
import FullName from '../_addons/FullName';
import BirthDate from '../_addons/BirthDate';
import PhoneNumber from '../_addons/PhoneNumber';

export default function Subscriber() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-sm-6 col-lg-12'>
                    <form>
                        <FullName />
                        <BirthDate />
                        <PhoneNumber />
                    </form>
                </div>
            </div>
        </div>
    )
}