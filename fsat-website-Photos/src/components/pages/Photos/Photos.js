import React, {useState} from 'react';
import DiamondGrid from './Photos_Components/Diamond_Grid/DiamondGrid.js';
import images from './Photos_Components/Diamond_Grid/DiamondPhotos.js';
import SocialLinks from './Photos_Components/SocialLinks.js';
import PhotosVideos from './Photos_Components/PhotosVideos.js';
import './Photos_Components/Photos.css';
import './Photos_Components/Diamond_Grid/DiamondGrid.css';
import gradientSC from "./Photos_Components/Photos_section_images/gradientsemicircle.webp"
import './Photos_Components/Slideshow/Slideshow.css';
import Slideshow from './Photos_Components/Slideshow/Slideshow.js';

const Photos = () => {
  //current indexes for diamond grid and slideshow
  const [currentrowindex, setcurrentrowindex] = useState(null);
  const [currentcolindex, setcurrentcolindex] = useState(null);

  return (
    <div className="Photosbody">
      {/*----------------Header------------------*/}
      <div id="parent-ombre">
        <img
          id="child-ombre"
          src = {gradientSC}        
        />
        <div className="overlaptext">
          <p id="title"> Our FSAT Family</p>

          <p id="subtitle">
            Presenting a collection of our highlights for the 2019-2020 Year!
          </p>

          <p id="subtitle-two">
            Images are regularly updated. To view images from previous years,
            please refer to our Instagram and Facebook pages.
          </p>
          <SocialLinks />
        </div>
      </div>

      {/*--------------Diamond Gallery and Slideshow-------*/}
      <div className="diamondgridparent">
        <DiamondGrid
          images={images}
          onImageClick={(rowindex, colindex) => {
            setcurrentrowindex(rowindex);
            setcurrentcolindex(colindex);
          }}
        />
      </div>
      {currentrowindex === null ? (
        <></>
      ) : (
        <Slideshow
          images={images}
          rowindex={currentrowindex}
          colindex={currentcolindex}
          onClose={() => {
            setcurrentrowindex(null);
            setcurrentcolindex(null);
          }}
        />
      )}

      {/*-------------Videos-----------*/}
      <PhotosVideos />

      {/*----------------Page Footer--------------------*/}

      <div className="prefooter">
        <div className="block"></div>
      </div>
    </div>
  );
};

export default Photos;
