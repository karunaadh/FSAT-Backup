import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import validateemail from './Emailvalidator.js';

const Form = () => {
  //first name state
  const [firstnamevalue, setfirstname] = useState('');
  //last name state
  const [lastnamevalue, setlastname] = useState('');
  //email state
  const [emailvalue, setemail] = useState('');
  //phone state
  const [phonevalue, setphone] = useState('');
  //textbox state
  const [textvalue, settext] = useState('');
  //submission status state
  const [submit, setsubmit] = useState(false);
  //email validation message
  const [emailerror, setemailerror] = useState('');
  //email valid boolean
  const [emailvalid, setemailvalid] = useState(true);

  // clear inputs and display submit message for 2 seconds
  const clearform = () => {
    setfirstname('');
    setlastname('');
    setemail('');
    setphone('');
    settext('');
    setsubmit(true);
    setTimeout(() => {
      setsubmit(false);
    }, 2000);
  };

  //delay clearform() so google form recieves values before clearing
  function handlesubmit() {
    setTimeout(clearform, 200);
  }

  //update email state and validate email as user types
  const handleemailchange = (event) => {
    setemail(event.target.value);

    //validate email
    //if email is valid or the value is blank, set valid as true
    if (validateemail(emailvalue) || !emailvalue) {
      setemailvalid(true);
      setemailerror('');
    } else {
      setemailvalid(false);
      setemailerror('Enter a valid email.');
    }
  };

  return (
    <div className="formcontainer">
      <h1 className="formheader">GET IN TOUCH WITH US!</h1>
      {/*---------------Hide google form "submitted" page-------*/}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
      ></iframe>

      {/*--------------Contact us form---------*/}
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeEoRCsOTLRKPE41AP20b1rX-k_x7BKrd7qkbMzZJ-gp0OpdA/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={handlesubmit}
        className="contactformbody"
      >
        {/*---------------Form inputs-------------*/}
        <div className="formrow">
          <input
            type="text"
            name="entry.1123552132"
            value={firstnamevalue}
            onChange={(event) => setfirstname(event.target.value)}
            placeholder="First Name"
          />
          <input
            type="text"
            name="entry.382070734"
            value={lastnamevalue}
            onChange={(event) => setlastname(event.target.value)}
            placeholder="Last Name"
          />
        </div>
        <div className="formrow">
          <input
            type="email"
            name="entry.1153794267"
            value={emailvalue}
            onChange={handleemailchange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="entry.1685681732"
            value={phonevalue}
            onChange={(event) => setphone(event.target.value)}
            placeholder="Phone"
          />
        </div>
        <div className="inputtext formrow">
          <input
            type="text"
            name="entry.892840754"
            value={textvalue}
            onChange={(event) => settext(event.target.value)}
            placeholder="Type your message here..."
          />
        </div>

        {/*----------Form submission and submitted message-------*/}
        <div className="formrow">
          {
            //if submitted, show submit message
            submit ? (
              <p className="submittext">
                Thank you! We'll get back to you soon!
              </p>
            ) : (
              <p></p>
            )
          }
          <p className="submittext">{emailerror}</p>
          {
            //if email is valid, show submit button, else, don't
            emailvalid ? (
              <input className="submitbutton" type="submit" value="Submit" />
            ) : (
              <div></div>
            )
          }
        </div>
      </form>
    </div>
  );
};
export default Form;
