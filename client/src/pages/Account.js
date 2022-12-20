import React from 'react';
// import styles from 'Account.module.css';
import { useQuery } from '@apollo/client';
import {QUERY_USER} from '../utils/queries';
import avatarPath from '../images/tuberSmall.png';
import logoPath from '../images/mainLogo.png';
import iconPath from '../images/mainLogoSm.png';

const Account = () => {
    const {loading, data} = useQuery(QUERY_USER, {
        fetchPolicy: "no-cache"
    })

    

    return (
        <div class="body-external">
            <img class="flex-container float-right" src={logoPath} />
            {/*<img src={avatarPath} />*/}

            <form>
            <div class="title-text"> Favorites </div>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Add a new favorite movie/show here --'></input>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Add a new favorite movie/show here --'></input>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Add a new favorite movie/show here --'></input>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Add a new favorite movie/show here --'></input>
                <input type='text' class='search-bar' name='Title Name' placeholder='-- Add a new favorite movie/show here --'></input>
            </form>


            {/* <div className='services'>
                {DataTransfer.map((service) => (
                    <div className='service'>{service}</div>
                ))}
            </div> */}
            <img class="flex-container icon" src={iconPath} />
        </div>
    )
}

export default Account;