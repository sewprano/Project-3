import React from 'react';
// import styles from 'Account.module.css';
import avatarPath from '../images/tuber.png';
const userName = 'CouchPotato12';

const Account = () => {
    return (
        <div>
            <img src={avatarPath} />
            <h2>{userName}</h2>

        </div>
    )
}

export default Account;