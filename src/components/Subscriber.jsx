import React from 'react';
import FullName from '../_addons/FullName';
import BirthDate from '../_addons/BirthDate';
import PhoneNumber from '../_addons/PhoneNumber';
import DefaultLayout from './DefaultLayout/DefaultLayot';

function Content() {
    return(
        <div className='col-9'>
            <form>
                <FullName />
                <BirthDate />
                <PhoneNumber />
            </form>
        </div>
    )
}

export default function Subscriber(props) {
    return(
        <DefaultLayout content={<Content />} {...props} />
    )
}