import React from 'react';
import LinkButtonWhite from "../components/ButtonsWhite/LinkButtonWhite";

import '../Styles/AboutPage.css';
import '../Styles/common.css';

function AboutPage() {
    return (
    <div className='background-image-forest about-page'>
        <div className='about-page-container'>
            <h2>Welcome to TexVenture</h2>
            <p>
                TexVenture is a story driven text based adventure lightly based on Dungeons and Dragons. 
                Go on epic quests, fight monsters, save people, explore new worlds, and find rare and mysterious items. The world you dive into is whatever you want it to be.
                You're choices make you who you are.
            </p>
            <p>
                This project was built by Patrick Anderson and Jonah Getz using the magic of the MERN stack. 
            </p>
            <LinkButtonWhite to="/main-menu">Main Menu</LinkButtonWhite>
        </div>
    </div>
    );
};

export default AboutPage;