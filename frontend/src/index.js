import React from 'react';
import ReactDOM from 'react-dom/client';
import Paths from './Paths';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <AudioPlayer />
    <Paths/>
    </>
);


