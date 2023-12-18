import { useEffect } from 'react';

function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio('/music/backgroundMusic.mp3');
    audio.volume = 0.1;
    audio.loop = true;

    const playAudio = () => {
      if (audio.paused) {
        audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        console.log('Audio already playing');
      }
    };
    

    //if the page has recieved interaction
    if (document.hasFocus()) {
      playAudio();
    } else {
      //the page has not been interacted with yet
      const handleClick = () => {
        playAudio();
        document.removeEventListener('click', handleClick);

      };
      document.addEventListener('click', handleClick);
    }

    //cleanup: pause the audio when the component unmounts
    return () => {
      audio.pause();
    };

  }, []);

}

export default AudioPlayer;
