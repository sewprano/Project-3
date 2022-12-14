import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <h1>Couch Tuber</h1>
            <h2>Streaming Search</h2>
            <p>Search for a movie or TV Shows 
                across multiple streaming services</p>
            <form>
                <label for='Home' ></label>
                <input type='text' id='titleSearchName' name='Title Name'></input>
            </form>
        </div>
    )
}

export default Home;