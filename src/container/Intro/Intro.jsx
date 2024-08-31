import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playvideo, setplayvideo] = React.useState(false);
  const vidRef = React.useRef();

  const handlevideo = () =>{
    setplayvideo((prevplayvideo) => !prevplayvideo)

    if(playvideo){
      vidRef.current.pause();
    } else{
      vidRef.current.play();
    }
  }

  return(
    <div className='app-video'>
      <video src={meal} 
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app-video-overlay flex__center'>
        <div className='app-video-overlay-circle flex__center' onClick={handlevideo}>
          {playvideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ): <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
