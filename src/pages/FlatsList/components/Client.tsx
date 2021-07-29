import React from 'react';
import {useDispatch} from "react-redux";

import {deleteClient} from "../../../store/ducks/companiesAndFlats/actionCreators";


interface IClientProps {
    bindId: number
    name: string
    email: string
    phone: string
}

export const Client: React.FC<IClientProps> =({name, email, phone, bindId}) => {
    const dispatch = useDispatch()

    const clickOnRemove = () => {
        dispatch(deleteClient(bindId))
    }

    return (
        <div className='client'>
            <div className='name'>
                {name ? name : "Имя не указано"}
            </div>
            <div className='email'>
                {email ? email : "Почта не указана"}
            </div>
            <div className='phone'>
                {phone ? phone : "Номер не указан"}
            </div>
            <div
                className='btn delete'
                onClick={clickOnRemove}>
                Удалить жильца
            </div>
        </div>
    );
}

