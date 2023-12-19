import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Paths from './Paths';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><AudioPlayer />
    <React.StrictMode>
      <Paths />
    </React.StrictMode>
    </>
    );

