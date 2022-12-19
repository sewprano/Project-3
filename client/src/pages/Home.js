import React from 'react';
import styles from './Home.module.css';

import logoPath from '../images/mainLogo.png';
import iconPath from '../images/mainLogoSm.png';

const Home = () => {
    return (
        
        <div class="body-external" src={styles}>
            <img class="flex-container float-right" src={logoPath} />            
            <div class="title-text"> Couch Tuber </div>
            <div class="sub-title-text">Search for your favorite Movies, TV Shows, Documentaries & more across multiple streaming platforms!</div>
            <form>
                <label for='Home' ></label>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Search entertainment here --'></input>
                <input type='submit' class='search-button' value='Watch!'></input>
            </form>
            <img class="flex-container icon" src={iconPath} /> 
        </div>
    )
}

export default Home;