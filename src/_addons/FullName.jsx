import React, {useState, useEffect} from 'react';

export default function FullName(props) { 

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');

    function handleInput(e) {
            switch (e.currentTarget.name) {
                case 'name':
                    if(e.target.value.match(/[a-züöğıəçş]$/gi) !== null) {
                        setName(e.target.value);
                    }
                break;
                case 'lastName':
                    if(e.target.value.match(/[a-züöğıəçş]/gi) !== null) {
                        setLastName(e.target.value);
                    }
                break;
                case 'patronymic':
                    if(e.target.value.match(/[a-züöğıəçş]/gi) !== null) {
                        setPatronymic(e.target.value);
                    }
                break;
                default:
                    break;
            }
    }

    function handleKeyDown(k) {
        if(k.keyCode == 8) {
            switch (k.currentTarget.name) {
                case 'name':
                    if(name.length == 1) {
                        setName('');
                    }
                break;
                case 'lastName':
                    if(lastName.length == 1) {
                        setLastName('');
                    }
                break;
                case 'patronymic':
                    if(patronymic.length == 1) {
                        setPatronymic('');
                    }
                default:
                    break;
            }
        }
    }

    return (
        <>
            <div className='form-group'>
                <label htmlFor='name'>Ad</label>
                <input className='form-control' type='text' name='name' id='name' value={name} onKeyDown={handleKeyDown} onInput={handleInput} onChange={e => null} placeholder='m.ü. Elşad' required />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Soyad</label>
                <input className='form-control' type='text' name='lastName' id='name' value={lastName} onKeyDown={handleKeyDown} onInput={handleInput} onChange={e => null} placeholder='m.ü. Əliyev' required />
            </div>
            <div className='form-group'>
                <label htmlFor='patronymic'>Atasının adı</label>
                <input className='form-control' type='text' name='patronymic' id='patronymic' value={patronymic} onKeyDown={handleKeyDown} onInput={handleInput} onChange={e => null} placeholder='m.ü. Sabir oğlu' required />
            </div>
        </>
    )
}