import React from 'react';
import './DiamondGrid.css';

/*Single diamond*/
function Diamond({ key, image, alt, onClick }) {
  return (
    <div className="diamond">
      <img key={key} src={image} alt={alt} onClick={onClick} />
    </div>
  );
}

/*Diamond Grid*/
function DiamondGrid(props) {
  const { images, onImageClick } = props;
  return (
    <div className="diamond-grid">
      {images.map((imageRow, rowIndex) => (
        <div key={rowIndex} className="diamond-row">
          {imageRow.map((image, colIndex) => (
            <Diamond
              key={colIndex}
              image={image.url}
              alt={image.title}
              onClick={() => onImageClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default DiamondGrid;
