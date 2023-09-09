import React from 'react';
import './ContactUs.css';

const Map = () => {
  return (
    <div className="mapsection">
      <div className="mapheader">OFFICE LOCATION</div>
      <div className="map">
        {/*--------------Map----------------*/}
        <iframe
          width="600"
          height="304"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=40%20Willcocks%20St,%20Toronto,%20ON%20M5S%201C6&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>

        {/*------------Office hour information (side of map)-------*/}
        <div className="officehourinfo">
          <h1 className="officehourheader">OFFICE HOURS</h1>
          <div>
            <p className="officehourtime">
              <p>
                Monday: <br /> Tuesday: <br /> Wednesday: <br />
                Thursday: <br /> Friday: <br /> Saturday: <br />
                Sunday: <br />
              </p>
              <p>
                9am - 5pm <br /> 9am - 5pm <br /> 9am - 5pm <br />
                9am - 5pm <br /> 9am - 5pm <br /> CLOSED <br />
                CLOSED
              </p>
            </p>
            {/*-------------Covid Notification-----------*/}
            <p className="officehournotif">
              Due to the COVID-19 pandemic, our office is temporarily closed
              until further notice. Hours will be updated as the province
              gradually reopens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Map;
