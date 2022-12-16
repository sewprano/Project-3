import React, { useState } from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

let loginStatus = 'Login';
function Header() {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState('false');

const login = (event) => {
event.preventDefault();
console.log(userName, password);
const userData = {
    userName,
    password
};
localStorage.setItem('token-info', JSON.stringify(userData));
setIsLoggedIn(true);
setUserName('');
setPassword('');
};

  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedIn(false);
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
                <Link className='link' to='/login'>{loginStatus}</Link>
            </nav>
            <div>
              {!isLoggedIn ? (
                <>
                <form action=''>
                  <input type='text' onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='Username' />
                  <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' />
                  <button type='submit' onClick={login}>
                    Submit
                  </button>
                </form>
                </>
              ) : (
                <>
                <h2>{userName} is logged in</h2>
                <button onClickCapture={logout}>logout {userName} </button>
                </>
              )}
              </div>
        </header>

    );
}

export default Header;