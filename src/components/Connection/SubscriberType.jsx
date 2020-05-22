import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function SubscriberType(props) {

    const [subscriberType, setSubscriberType] = useState({private: false, company: false, value: ''});

    return(
        <div className='col-9'>
            <div className='card-body'>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={subscriberType.private} id="private" name="private" className="custom-control-input" value='private' onChange={(e) => setSubscriberType({private: !subscriberType.private, company: false, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="private">PPPoE</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" checked={subscriberType.company} id="company" name="company" className="custom-control-input" value='company' onChange={(e) => setSubscriberType({private: false, company: !subscriberType.company, value: e.target.value})} />
                    <label className="custom-control-label" htmlFor="company">IPoE</label>
                </div>
            </div>
            <div className='col-3'>
                <button type='button' className='btn btn-outline-success' disabled={subscriberType.value !== '' ? false : true}><Link to='/connection/2'>Next</Link></button>
            </div>
        </div>
    )
}