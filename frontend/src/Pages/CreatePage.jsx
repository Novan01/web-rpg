import React, { useState } from 'react';
import '../Styles/common.css';
import '../Styles/CreatePage.css';

/*
Character creation - saved to JSON (MongoDB)

Name
Race - Elf, Human, Half-Elf, Dwarf, Halfling, 
Race - Bad guys : Orc, Goblin, Drow, Tiefling - ignore
Class - Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rouge, Sorcerer, Warlock, Wizard
Stats 
    - Strength
    - Dexterity
    - Constitution
    - Intelligence
    - Wisdom
    - Charisma
Starting items
Armor Class - based of dexterity and armor
Hit Points - based off constitution
Background - Have the players write themselves a background that will help generate the world they play in
*/

//funciton to handle the creation of the character
function CreatePage() {
    const [characterInfo, setCharacterInfo] = useState( {
        name: '',
        race: '',
        class: '',
        stats: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        modifiers: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        startingItems: '',
        background: '',
    });

    //function to handle changing values - not stats
    const handleInputChange = (key, value) => {
        setCharacterInfo((prevInfo) => ({
            ...prevInfo,
            [key]: value,
        }));
    };


    const calculateArmorClass = () => {
        return 10 + Math.floor(characterInfo.stats.dexterity/2);
    };

    const calculateStatModifier = () => {
        const statModifiers = {};

        const statNames = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdon', 'charisma'];

        statNames.forEach((stat) => {
            const statValue = characterInfo.stats[stat];
            const modifier = Math.floor((statValue-10)/2);
            statModifiers[stat] = modifier;
        });
        return statModifiers;
    };

    const handleStatChange = (stat, value) => {
        setCharacterInfo((prevCharacterInfo) => ({
            ...prevCharacterInfo,
            stats: {
                ...prevCharacterInfo.stats,
                [stat]: value,
            },
        }));

        const statModifiers = calculateStatModifier();
        setCharacterInfo((prevCharacterInfo) => ({
            ...prevCharacterInfo,
            modifiers: {
                ...prevCharacterInfo.modifiers,
                ...statModifiers,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Character Info:', characterInfo);
        //add logic to save characterInfo to MongoDB
    };

    const calculateHitPoints = () => {
        //later check per class if class is x then use base hp y + const
    };

    return (
        <div className="character-creator">
            <h3>Create your Character</h3>
            
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name: <input type="text" name='name' value={characterInfo.name} onChange={(e) => handleInputChange('name', e.target.value)} /></label>
                    <br />
                    <label>Race: <input type="text" name='race' value={characterInfo.race} onChange={(e) => handleInputChange('race', e.target.value)} /></label>
                    <br />
                    <label>Class: <input type="text" name='race' value={characterInfo.race} onChange={(e) => handleInputChange('class', e.target.value)} /></label>
                    <br />
                </form>
            </div>

            <div className='stats'>
                <h4>Stats</h4>
                <span className='stat' title="determines a character's ability to wield heavy weapons, carry heavy loads, and perform feats of raw physical power">STR</span>
                <span>DEX</span>
                <span>CON</span>
                <span>INT</span>
                <span>WIS</span>
                <span>CHA</span>

            </div>
        </div>

        
        
    );
};

export default CreatePage;