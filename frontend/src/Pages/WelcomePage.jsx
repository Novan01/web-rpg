import React from "react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import '../Styles/common.css';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleAdventureStart = () => {
        AudioPlayer.playAudio();

        navigate.push("/main-menu");
    };


    return(
      

        <div className = "background-image-forest welcome-page">
            <div className = "welcome-container"> 
                <h1 className = "game-title">TexVenture</h1>
                <ul className = "menu-options">
                    <li><a href="/main-menu" onClick={handleAdventureStart}>Begin Your Adventure</a></li>
                </ul>
            </div>
        </div>
    );

    
};

export default WelcomePage;