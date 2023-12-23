import React, { useState } from "react";
import Button from '../components/ButtonBlack/LinkButtonBlack';
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

function SettingsPage() {
    const [volume, setVolume] = useState(10);
    const [keybinds, setKeybinds] = useState({
        inventory: 'I',
        character: 'C',
        menu: 'Tab',
        select: 'Left Click',
        examine: 'Right Click',
        interactionMenu: 'Middle Click',
    });
    
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);

        AudioPlayer.updateVolume(event.target.value);
    };

    const handleKeybindChange = (key, event) => {
        setKeybinds((prevKeybinds) => ({
            ...prevKeybinds,
            [key]: event.target.value,
        } ));
    };

    return (
        <div className="background-image-book settings-page">
            <div className="settings-container">
                <h2>Settings</h2>
                <div className="volume-section">
                    <h3>Volume</h3>
                    <p>Current Volume: {volume}%</p>
                    <div className="slider"><input id="slider" type="range" value={volume} onChange={handleVolumeChange} min={0} max={100} /></div>
                </div>
                <div className="keybind-section">
                    <h3>Keybinds</h3>
                    <label>
                        Inventory: <input type="text" value={keybinds.inventory} onChange={(e) => handleKeybindChange('inventory', e)} />
                    </label>
                    <label>
                        Character: <input type="text" value={keybinds.character} onChange={(e) => handleKeybindChange('character', e)} />
                    </label>
                    <label>
                        Menu: <input type="text" value={keybinds.menu} onChange={(e) => handleKeybindChange('menu', e)} />
                    </label>
                    <label>
                        Select: <input type="text" value={keybinds.select} onChange={(e) => handleKeybindChange('select', e)} />
                    </label>
                    <label>
                        Examine: <input type="text" value={keybinds.examine} onChange={(e) => handleKeybindChange('examine', e)} />
                    </label>
                    <label>
                        Interact: <input type="text" value={keybinds.interactionMenu} onChange={(e) => handleKeybindChange('interactionMenu', e)} />
                    </label>
                </div>
            </div>
            <div className="mainButton"><Button to={"/main-menu"}>Main Menu</Button></div>
        </div>
    );

};
//<Button to={"/"}>Main Menu</Button>
export default SettingsPage;