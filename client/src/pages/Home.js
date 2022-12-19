import React from 'react';
import styles from './Home.module.css';

import logoPath from '../images/mainLogo.png';
import iconPath from '../images/circleIcon2Sm.png';

const Home = () => {
    return (
        //<img src={logoPath}/>
        <div class="body-external" src={styles}>            
            <div class="title-text"> Couch Tuber </div>
            <div class="sub-title-text">Search for your favorite Movies, TV Shows, Documentaries & more across multiple streaming platforms!</div>
            <form>
                <label for='Home' ></label>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Search entertainment here --'></input>
                <input type='submit' class='search-button' value='Watch!'></input>
            </form>
            
        </div>
    )
}

export default Home;