import React from "react";
import '../Styles/common.css';
import '../Styles/MainMenu.css';


const MainMenu = () => {
    return(
        <div className = "background-image-forest main-menu">
            <div className = "main-menu-container"> 
                <h1 className = "game-title">TexVenture</h1>
                <ul className = "menu-options">
                    <li><a href="/play">Play</a></li>
                    <li><a href="/create">Create a Character</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainMenu;