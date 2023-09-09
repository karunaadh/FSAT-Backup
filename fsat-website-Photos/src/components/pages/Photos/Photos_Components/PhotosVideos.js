import React from 'react';
import './Photos.css';
import Tape from "./Photos_section_images/videocaption_tape.png"

const PhotosVideos = () => {
  return (
    <div className="videossection">
      <div className={'videoparent'}>
        <div className="videocap cap1">
          {/*--------top tape-----------*/}
          <img
            className="toptape"
            src={Tape}
          />
          {/*--------sticky note text-----------*/}
          <p>FILIPINX APPRECIATION WEEK 2020!</p>
        </div>
        {/*-------------first video----------*/}
        <iframe
          className="vid1"
          width="600px"
          height="300px"
          src="https://www.youtube.com/embed/6tU31kEZRd8?modestbranding=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Filipinx Appreciation Week 2020"
        />
      </div>

      {/*------------------------------------------------*/}

      {/*----------------Video 2------------------*/}

      <div className="videoparent">
        {/*---------Second video-----------*/}
        <iframe
          className="vid2"
          width="600px"
          height="300px"
          src="https://www.youtube.com/embed/-0cekGTpWfA?modestbranding=1"
          title="2019-2020 Recap"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/*--------sticky note video 2-----------*/}
        <div className="videocap cap2">
          {/*--------top tape-----------*/}
          <img
            className="toptape"
            src={Tape}
          />
          {/*--------second video caption-----------*/}
          <p>2019-2020 YEAR RECAP!</p>
        </div>
      </div>
      {/*-----------------------------------------------*/}
    </div>
  );
};

export default PhotosVideos;
