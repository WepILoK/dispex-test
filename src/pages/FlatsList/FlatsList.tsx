import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectApartments, selectLoadingClients} from "../../store/ducks/companiesAndFlats/selectors";
import {fetchApartments, setApartments} from "../../store/ducks/companiesAndFlats/actionCreators";
import './FlatsList.scss'
import {Client} from "./components/Client";
import {AddClient} from "./components/AddClient";

export const FlatsList: React.FC = () => {
    const [visibleFlats, setVisibleFlats] = useState({visible: false, homeId: ''})
    const [visibleClients, setVisibleClients] = useState({visible: false, flatId: ''})
    const apartments = useSelector(selectApartments)
    const loadingClients = useSelector(selectLoadingClients)
    const dispatch = useDispatch()
    const params: { id: string } = useParams();

    const toggleVisibleFlats = (homeId: string) => {
        setVisibleFlats(prevState => {
            return {...prevState, homeId, visible: !visibleFlats.visible}
        })
    }

    const toggleVisibleClients = (flatId: string) => {
        setVisibleClients(prevState => {
            return {...prevState, flatId, visible: !visibleClients.visible}
        })
    }

    useEffect(() => {
        dispatch(fetchApartments(Number(params.id)))

        return () => {
            dispatch(setApartments([]))
        }
    }, [loadingClients])

    if (apartments.length) {
        return (
            <div className='streets-list'>
                {apartments.map((item, index) =>
                    <div key={item.addressId}>
                        {index === 0 || !(apartments[index].streetName === apartments[index - 1].streetName)
                            ? <div className='street'>
                                Улица: {item.streetName}
                            </div>
                            : null}
                        {index === 0 || !(apartments[index].building === apartments[index - 1].building)
                            ? <div
                                className='building'
                                onClick={() => toggleVisibleFlats(item.building)}>
                                Дом: {item.building}
                            </div>
                            : null}
                        {visibleFlats.visible && visibleFlats.homeId === item.building &&
                        <div className='flat'>
                            <div onClick={() => toggleVisibleClients(item.flat)}>
                                Квартира: {item.flat}/{item.clients.length}
                            </div>
                            {visibleClients.visible && visibleClients.flatId === item.flat &&
                            <div className='clients'>
                                {item.clients.map(client =>
                                    <Client key={client.id} {...client}/>
                                )}
                                <AddClient addressId={item.addressId}/>
                            </div>}
                        </div>}
                    </div>
                )}
            </div>
        )
    } else {
        return null
    }
}

