import React from 'react';
import { makeStyles } from '@mui/styles';
import video from '../resources/planta.mp4';


const useStyles = makeStyles(() => ({
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '1rem', // Agrega padding para que no se pegue a los bordes en pantallas pequeñas
  },
  video: {
    width: '100%',
    maxWidth: '800px',
  },
}));

const VideoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} controls>
        <source src={video} type="video/mp4" />
        <track src={null} kind="captions" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
