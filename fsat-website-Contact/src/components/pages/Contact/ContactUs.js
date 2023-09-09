import React from 'react';
import './ContactUs.css';
import Form from './CUForm.js';
import Map from './CUMap.js';
import Sociallinks from './CUSociallinks.js';
import Mailinglist from './CUMailinglist.js';
import emailicon from "./CUimages/secured-letter.png"
import placemarker from "./CUimages/place-marker.png"
import blobimage from "./CUimages/blobimage.png"

const Contact = () => {
  return (
    <div className="body">
      <div className="CUsection1">
        {/*----------------------Blob---------------*/}
        <div className="blob">
          <img
            className="blobimg"
            src={blobimage}
          />
          <div className="blobtext">
            <h1>We'd love to hear from you</h1>
            <p>
              Whether you have questions about our community, getting involved
              or anything else, our team is dedicated to answering all your
              questions.
            </p>
          </div>
        </div>

        {/*----------------------Form---------------*/}
        <div className="formdiv">
          <Form />
        </div>
      </div>

      <div className="CUsection2">
        {/*----------------------Map---------------*/}
        <Map />
      </div>

      <div className="CUsection3">
        {/*-------Contact information------*/}
        <div className="contactinfo">
          <div className="CIchild">
            <img
              src= {emailicon}
              className="iconimg"
            />
            <a href="mailto:fsat.fsat@gmail.com">fsat.fsat@gmail.com</a>
          </div>
          <div className="CIchild">
            <img
              src={placemarker}
              className="iconimg"
            />
            500 A<br /> 40 Wilcocks St.
            <br /> M5S 1C6 <br />
            Toronto, ON Canada
          </div>
        </div>
        {/*----------Socialmedia links------------*/}
        <Sociallinks />
        {/*------------Mailing list--------*/}
        <Mailinglist />
      </div>

      {/*----------------Page Footer--------------------*/}
      <div className="prefooter">
        <div className="block"></div>
      </div>
    </div>
  );
};

export default Contact;
