import React, {useState, useEffect} from 'react';

export default function FullName(props) {
    
    const [fullName, setFullName] = useState({name: '', lastName: '', patronymic: ''});
    const [firstLetter, setFirstLetter] = useState('');

    // Pattern mask /^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/gi
    const pattern = /^[A-ZÜİÖĞIƏÇŞ][a-züöğıəçş\s-]*$/g

   function handleChange(evnt) {

        if(evnt.target.value.match(pattern)) {
            setFullName(Object.assign({}, fullName, {[evnt.target.name]: evnt.target.value}));
        }            
        
        if( fullName[evnt.target.name].length == 1 && evnt.target.value.length == 0) {
            setFullName(Object.assign({}, fullName, {[evnt.target.name]: ''}));
        }
    }

    return (
        <>
            <div className='form-group'>
                          
                <input className='form-control' type='text' name='name' id='name' area-discrebedby='name' value={fullName.name} onChange={e => handleChange(e)}  required />
                <p className='text-danger'>* <small className='form-tex text-muted'>Ad</small></p>
            </div>
            <div className='form-group'>
                
                <input className='form-control' type='text' name='lastName' id='name' value={fullName.lastName} onChange={e => handleChange(e)} required />
                <p className='text-danger'>* <small className='form-tex text-muted'>Soyadı</small></p>
            </div>
            <div className='form-group'>
                
                <input className='form-control' type='text' name='patronymic' id='patronymic' value={fullName.patronymic} onChange={e => handleChange(e)} required />
                <p className='text-danger'>* <small className='form-tex text-muted'>Atasının adı</small></p>
            </div>
        </>
    )
}