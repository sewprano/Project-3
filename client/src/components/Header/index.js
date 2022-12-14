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
            <nav>
                <Link class='nav-bar' to='/'>Home</Link>
                {/* <Link className='link' to='/genres'>Genre Search</Link> */}
                <Link class='nav-bar' to='/account'>Account</Link>
                <Link class='nav-bar' to='/about'>About</Link>
                {Auth.loggedIn() ? (
                <>
                <button onClick={logout}>Logout</button></>
              ) : (
              <div>
                <Link class='nav-bar-right' to='/login'>Already a Member? Login Here </Link>
                <Link class='nav-bar-right' to='/signup'>Signup</Link>
              </div>
              )}
            </nav>
            <div>
              {Auth.loggedIn() ? (
                <>
                <button className="btn" onClick={logout}>Logout</button></>
              ) : (
                <>
                {/*<Link class='nav-bar' to='/login'>Login</Link>*/}
                {/* <Link to='/signup'>Signup</Link> */}
                </>
              )}
              </div>
        </header>
    );
}

export default Header;