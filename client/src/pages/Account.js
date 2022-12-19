import React from 'react';
// import styles from 'Account.module.css';
import { useQuery } from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import avatarPath from '../images/tuberSmall.png';
const userName = 'CouchPotato12';

const Account = () => {
    const {loading, data} = useQuery(QUERY_USER, {
        fetchPolicy: "no-cache"
    })

    return (
        <div>
            <img src={avatarPath} />
            <h2>{userName}</h2>
            <div>

            </div>
            {/* <div className='services'>
                {DataTransfer.map((service) => (
                    <div className='service'>{service}</div>
                ))}
            </div> */}



        </div>
    )
}

export default Account;