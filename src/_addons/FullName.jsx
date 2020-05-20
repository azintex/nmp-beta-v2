import React, {useState, useEffect} from 'react';

export default function FullName(props) {
    
    const [fullName, setFullName] = useState({name: '', lastName: '', patronymic: ''});

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');

    function handleInput(e) {
            switch (e.currentTarget.name) {
                case 'name':
                    if(e.target.value.match(/[a-züöğıəçş]$/gi) !== null) {
                        console.log(e.target.value);
                        setFullName({name: e.target.value, lastName: fullName.lastName, patronymic: fullName.patronymic});
                        //setName(e.target.value);
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
                    if(fullName.name.length == 1) {
                        setFullName({name: '', ...fullName });
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

    console.log(fullName)

    return (
        <>
            <div className='form-group'>
                <label htmlFor='name'>Ad</label>
                
                <input className='form-control' type='text' name='name' id='name' value={fullName.name} onChange={handleInput} placeholder='m.ü. Elşad' required />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Soyad</label>
                <input className='form-control' type='text' name='lastName' id='name' value={fullName.lastName} onKeyDown={handleKeyDown} onInput={handleInput} onChange={(e) => setFullName({name: fullName.name, lastName: e.target.value, patronymic: fullName.patronymic})} placeholder='m.ü. Əliyev' required />
            </div>
            <div className='form-group'>
                <label htmlFor='patronymic'>Atasının adı</label>
                <input className='form-control' type='text' name='patronymic' id='patronymic' value={fullName.patronymic} onKeyDown={handleKeyDown} onInput={handleInput} onChange={(e) => setFullName({name: fullName.name, lastName: fullName.lastName, patronymic: e.target.value})} placeholder='m.ü. Sabir oğlu' required />
            </div>
        </>
    )
}