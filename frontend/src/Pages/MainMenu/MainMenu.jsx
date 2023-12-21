import React from "react";
import './MainMenu.css';

const MainMenu = () => {
    return(
        <div className = "main-menu">
            <div className = "main-menu-container"> 
                <h1 className = "game-title">TexVenture</h1>
                <ul className = "menu-options">
                    <li><a href="/create">Play</a></li>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MainMenu;