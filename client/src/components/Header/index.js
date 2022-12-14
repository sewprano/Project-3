import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

let loginStatus = 'Login';
function Header() {
// component function body here??

    return (
        <header className={styles.header}>
            {/* add logo here */}
            <h3>Couch Tuber</h3>
            <nav>
                <Link className='link' to='/'>Home</Link>
                {/* <Link className='link' to='/genres'>Genre Search</Link> */}
                <Link className='link' to='/account'>Account</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/login'>{loginStatus}</Link>
            </nav>
        </header>

    );
}

export default Header;