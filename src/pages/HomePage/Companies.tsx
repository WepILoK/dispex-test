import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {fetchApartments} from "../../store/ducks/companiesAndFlats/actionCreators";
import {selectCompanies} from "../../store/ducks/companiesAndFlats/selectors";

import './Companies.scss'


export const Companies: React.FC = () => {
    const companies = useSelector(selectCompanies)
    const dispatch = useDispatch()

    const getCompanyApartments = (companyId: number): void => {
        dispatch(fetchApartments(companyId))
    }

    if (companies.length) {
        return (
            <div className='companies-list'>
                <div className='title'>
                    Выберите управляющую компанию
                </div>
                {companies.map(company =>
                    <Link to={`/apartments/${company.id}`} key={company.id}>
                        <div
                            className='company'
                            key={company.id}
                            onClick={() => getCompanyApartments(company.id)}>
                            {company.name}
                        </div>
                    </Link>
                )}
            </div>
        );
    } else {
        return null
    }
};

