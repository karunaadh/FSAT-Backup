import React, { useState } from 'react';
import './Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGreaterThan,
  faLessThan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Slideshow(props) {
  //props for slide images, index, and close button
  const { images, rowindex, colindex, onClose } = props;
  //states for row and column index
  const [currentrowindex, setcurrentrowindex] = useState(rowindex);
  const [currentcolindex, setcurrentcolindex] = useState(colindex);

  //function for "previous" button onclick
  const previousImage = () => {
    if (currentcolindex > 0) {
      setcurrentcolindex(currentcolindex - 1);
    } else if (currentrowindex > 0) {
      setcurrentrowindex(currentrowindex - 1);
      setcurrentcolindex(images[currentrowindex - 1].length - 1);
    }
  };

  //function for "next" button onclick
  const nextImage = () => {
    if (currentcolindex < images[currentrowindex].length - 1) {
      setcurrentcolindex(currentcolindex + 1);
    } else if (currentrowindex < images.length - 1) {
      setcurrentrowindex(currentrowindex + 1);
      setcurrentcolindex(0);
    }
  };

  //set current image
  const currentImage = images[currentrowindex][currentcolindex];

  return (
    <div className="slideshow">
      {/*---------------Close button--------*/}
      <div className="closebuttonparent">
        <button onClick={onClose}>
          <FontAwesomeIcon
            icon={faXmark}
            size="3x"
            className="slidebuttons closebutton"
          />
        </button>
      </div>

      <div className="centeredslidecontent">
        {/*----------Previous button---------*/}
        <button
          onClick={previousImage}
          disabled={currentrowindex === 0 && currentcolindex === 0}
        >
          <FontAwesomeIcon
            icon={faLessThan}
            size="2x"
            className="slidebuttons"
          />
        </button>
        {/*-----------Set current image with title-----------*/}
        <div className="imageobject">
          <img
            className="slideimage"
            src={currentImage.url}
            alt={currentImage.title}
          />
          <p className="slideimagetitle">{currentImage.title}</p>
        </div>

        {/*------------------Next button----------*/}
        <button
          onClick={nextImage}
          disabled={
            currentrowindex === images.length - 1 &&
            currentcolindex === images[currentrowindex].length - 1
          }
        >
          <FontAwesomeIcon
            icon={faGreaterThan}
            size="2x"
            className="slidebuttons"
          />
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
