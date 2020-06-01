import React from 'react';
import Cleave from 'cleave.js/react';

export function IdOldCleave({field, form, ...props}) {
    return <Cleave options={{numericOnly: true, blocks: [11], prefix: 'AZE'}} className='form-control' {...field} {...props} />;
}