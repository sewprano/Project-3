import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';
// import styles from ./Header.module.css;



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

    return (
        <header className={styles.header}>
            {/* add logo here */}
            <h3>Couch Tuber</h3>
            <nav>
                <Link className='link' to='/'>Home</Link>
                {/* <Link className='link' to='/genres'>Genre Search</Link> */}
                <Link className='link' to='/account'>Account</Link>
                <Link className='link' to='/about'>About</Link>
            </nav>
            <div>
              {Auth.loggedIn() ? (
                <>
                <button className="btn" onClick={logout}>Logout</button></>
              ) : (
                <>
                <Link to='/login'>Login</Link>
                {/* <Link to='/signup'>Signup</Link> */}
                </>
              )}
              </div>
        </header>

    );
}

export default Header;