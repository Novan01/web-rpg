import React from 'react';
import './AboutPage.css';
import LinkButtonWhite from "../../components/ButtonsWhite/LinkButtonWhite";

function AboutPage() {
    return (
    <div className='about-page'>
        <div className='about-page-container'>
            <h1>Welcome to TexVenture</h1>
            <p>
                TexVenture is a story driven text based adventure lightly based on Dungeons and Dragons. 
                Go on epic quests, fight monsters, save people, explore new worlds, and find rare and mysterious items. The world you dive into is whatever you want it to be.
                You're choices make you who you are.
            </p>
            <p>
                This project was built by Patrick Anderson using the magic of React.js and the strength of MongoDB. 
            </p>
            <LinkButtonWhite to="/main-menu">Main Menu</LinkButtonWhite>
        </div>
    </div>
    );
};

export default AboutPage;