import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addClient} from "../../../store/ducks/companiesAndFlats/actionCreators";

interface IAddClientProps {
    addressId: number
}

export const AddClient: React.FC<IAddClientProps> = ({addressId}) => {
    const [inputValues, setInputValues] = useState({
        Phone: '',
        Email: '',
        Name: ''
    })
    const dispatch = useDispatch()

    const updateValue = (event: React.FormEvent<HTMLInputElement>, type: InputEnum) => {
        const value = event.currentTarget.value
        if (type === InputEnum.EMAIL) {
            setInputValues(prevState => ({...prevState, Email: value}))
        } else if (type === InputEnum.NAME) {
            setInputValues(prevState => ({...prevState, Name: value}))
        } else if (type === InputEnum.PHONE) {
            setInputValues(prevState => ({...prevState, Phone: value}))
        }
    }

    const createClient = () => {
        if(inputValues.Phone.length > 2) {
        dispatch(addClient(inputValues, addressId))
        }
    }

    return (
        <div className='create'>
            <input className='phone'
                   placeholder='phone'
                   type='phone'
                   value={inputValues.Phone}
                   onChange={event => updateValue(event, InputEnum.PHONE)}/>
            <input className='email'
                   placeholder='email'
                   type='email'
                   value={inputValues.Email}
                   onChange={event => updateValue(event, InputEnum.EMAIL)}/>
            <input className='name'
                   placeholder='name'
                   type='name'
                   value={inputValues.Name}
                   onChange={event => updateValue(event, InputEnum.NAME)}/>
            <div
                onClick={createClient}
                className='btn add'>
                Добавить жильца
            </div>
        </div>
    );
};

enum InputEnum {
    PHONE = 'phone',
    EMAIL = 'email',
    NAME = 'NAME'
}