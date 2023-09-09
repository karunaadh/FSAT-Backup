import React, { useState } from 'react';
import './ContactUs.css';
import validateemail from './Emailvalidator.js';

const Mailinglist = () => {
  //name state
  const [name, setname] = useState('');
  //email state
  const [email, setemail] = useState('');
  //submitted
  const [submitted, setsubmit] = useState(false);
  //email validation message
  const [emailerror, setemailerror] = useState('');
  //email valid boolean
  const [emailvalid, setemailvalid] = useState(true);

  //clear input
  const clearinput = () => {
    setname('');
    setemail('');
    setsubmit(true);
    setTimeout(() => {
      setsubmit(false);
    }, 2000);
  };

  //delay clearinput() so google form recieves values before clearing
  function handlesubmit() {
    setTimeout(clearinput, 200);
  }

  //update email state and validate email as user types
  const handleemailchange = (event) => {
    setemail(event.target.value);

    //validate email
    //if email is valid or the value is blank, set valid as true
    if (validateemail(email) || !email) {
      setemailvalid(true);
      setemailerror('');
    } else {
      setemailvalid(false);
      setemailerror('Enter a valid email.');
    }
  };

  return (
    <div>
      <h1 className="mailinglistheader">JOIN OUR MAILING LIST!</h1>
      {/*---------------Hide google form "submitted" page-------*/}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
      ></iframe>

      {/*--------------Mailing list form---------*/}
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfNo-8mo_VPOqCJWHmQQ2P0oA54qWM5vRe2x1wtYD0bCy1NEQ/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={handlesubmit}
        className="MLformbody"
      >
        {/*---------------Form inputs-------------*/}
        <div className="MLforminput">
          <input
            type="text"
            name="entry.2071110365"
            value={name}
            onChange={(event) => setname(event.target.value)}
            placeholder="Full Name*"
          />
          <input
            type="text"
            name="entry.1843590837"
            value={email}
            onChange={handleemailchange}
            placeholder="Email*"
            required
          />
        </div>

        {/*----------Form submission and submitted message-------*/}
        <div className="MLsubmitbuttonparent">
          {
            //if email is valid, show submit button, else, don't
            emailvalid ? (
              <input className="MLsubmitbutton" type="submit" value="Submit" />
            ) : (
              <div></div>
            )
          }
        </div>
      </form>
      <p className="submittext">{emailerror}</p>
      {
        //if submitted, display submit button
        submitted ? (
          <p className="MLsubmittext">
            Thanks for subscribing! Welcome to our community!
          </p>
        ) : (
          <p></p>
        )
      }
    </div>
  );
};
export default Mailinglist;
