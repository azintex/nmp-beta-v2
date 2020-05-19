import React, {useState} from 'react';
import DefaultLayout from '../DefaultLayout/DefaultLayot';
import Evaluation from '../Connection/Evaluation';

function InitStep() {
    return(
        <div className='col-9'>
            <div className='card'>
                <div className='card-header'>
                    <Evaluation currentStage={'CONNECTION'} />
                </div>
                <div className='card-body'>
                    <div className='form-group col-3'>
                        <label htmlFor='connectionType'>Choose connection type</label>
                        <select className='form-control' name='connectionType' id='connectionType'>
                            <option>---</option>
                            <option value='pppoe'>PPPoE</option>
                            <option value='ipoe'>IPoE</option>
                            <option value='staticIp'>Static IP</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Content() {
    return(
        <InitStep />
    )
}

export default function NewConnection(props) {
    return(
        <DefaultLayout content={<Content />} {...props} />
    )
}