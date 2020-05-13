import React from 'react';
import FullName from '../_addons/FullName';
import BirthDate from '../_addons/BirthDate';
import PhoneNumber from '../_addons/PhoneNumber';

export default function Subscriber() {
    return(
        <form>
            <FullName />
            <BirthDate />
            <PhoneNumber />
        </form>
    )
}