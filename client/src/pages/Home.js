import React from 'react';
import styles from './Home.module.css';

import logoPath from '../images/mainLogo.png';
import iconPath from '../images/circleIcon2Sm.png';

const Home = () => {
    return (
        <div>
            <img src={logoPath} />
            <h1>Couch Tuber</h1>
            <h2>Streaming Search</h2>
            <p>Search for a movie or TV Shows 
                across multiple streaming services</p>
            <form>
                <label for='Home' ></label>
                <input type='text' id='titleSearchName' name='Title Name' placeholder='Title Name'></input>
                <input type='submit' value='submit'></input>
            </form>
            <img src={iconPath} />
        </div>
    )
}

export default Home;