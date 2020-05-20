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
                <label htmlFor='name'>Ad</label>                
                <input className='form-control' type='text' name='name' id='name' value={fullName.name} onChange={e => handleChange(e)} placeholder='m.ü. Elşad' required />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Soyad</label>
                <input className='form-control' type='text' name='lastName' id='name' value={fullName.lastName} onChange={e => handleChange(e)} placeholder='m.ü. Əliyev' required />
            </div>
            <div className='form-group'>
                <label htmlFor='patronymic'>Atasının adı</label>
                <input className='form-control' type='text' name='patronymic' id='patronymic' value={fullName.patronymic} onChange={e => handleChange(e)} placeholder='m.ü. Sabir oğlu' required />
            </div>
        </>
    )
}