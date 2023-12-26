import React from 'react';
import { Link } from 'react-router-dom';

/*This is the header that when creating a character or playing the game will be displayed. Allows for adjusting volume, quiting the game, going to specific pages etc WIP */
const Header = () => {
  const handleExitClick = () => {
    // Add logic to handle exit button click (e.g., close the game)
    console.log('Exit button clicked');
  };

  const handleMenuClick = () => {
    // Add logic to handle menu button click (e.g., open the menu)
    console.log('Menu button clicked');
  };

  return (
    <header>
      <h1>Game Name</h1>
      <div className="header-buttons">
        <button onClick={handleExitClick}>Exit</button>
        <Link to="/main-menu">
          <button onClick={handleMenuClick}>Menu</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
