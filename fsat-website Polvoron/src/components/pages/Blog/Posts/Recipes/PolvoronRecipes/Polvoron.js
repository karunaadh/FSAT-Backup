import React from 'react';
import './Polvoron.css';
import {arrow, bloglogo, ingredientsimg,step1img1,step1img2,step2img,step3img,step4img,step5img,tape,tropicalleaf,whisk} from "./Polvoronimg_exports.js";

const Polvoron = () => {
  return (
    <div className="PV_bodyparent">
      {/*---------------Header-----------*/}
      <div className="PV_pageheader">
        <img
          className="tropicalleaf"
          src={tropicalleaf}
          alt="Tropical Leaves"
        />
        <p className="PV_pagetitle">Polvoron Recipe</p>
        <img
          className="whisk"
          src={whisk}
          alt="Whisk"
        />
      </div>

      {/*---------------Blog body-------------*/}
      <div className="PV_pagebody">
        {/*----------------------------Body 1 (intro + questions)--------------*/}
        <div className="PV_body1">
          <img
            className="blog_logo"
            src={bloglogo}
            alt = "Blog logo"
          />
          <div className="PV_body1text">
            <p className="PV_body1header"> Hi there! </p>
            <p className="PV_bodyparamobile">
              <img
                className="blog_logomobile"
                src = {bloglogo} 
                alt = "Blog logo"             
              />
              Welcome back to another post by FSAT's blog Kwentuhan! Today we
              would like to share with you all a delicious and irresistible
              Polvoron recipe by one of our lovely Education and Philanthropy
              Execs, Marie!
            </p>
            <p className="PV_bodypara">
              Marie's simple yet scrumptious recipe is a must-try during
              quarantine and we guarantee you that this is something you do not
              want to miss. But before we start cooking, I asked Marie a few
              questions to learn more about what this classic Filipino delicacy
              means to her and where her passion for cooking/baking stems in
              hopes that we can all be inspired by Marie! So kwentuhan muna tayo
              (let's chat first) shall we?
            </p>
            <p className="PV_bodypara">
              <b>
                {' '}
                When did you first try Polvoron and what was that experience
                like for you as a Filipino Canadian?
              </b>
              <br /> My memory of my childhood isn't that great and I usually
              remember what is retold to me rather than the memory itself. I'd
              say the first time I remember trying Polvoron was probably when my
              dad or one of my titos/titas brought it back when they visited the
              PH. I really love sweets and milk-y flavours so I really love it.
              Growing up, it was something I could easily share with friends,
              both who did and didn't associate as being from the PH and it's
              still a treat I enjoy eating today.
            </p>
            <p className="PV_bodypara">
              ​ <b>What did you decide to try making Polvoron? </b>
              <br />I honestly tried for the first time over the summer! After
              joining FSAT, I've been more open to making Filipino food since it
              was never something that intrigued me in the past. We have a
              Goldilocks cook book from family when flew over for a wedding and
              I just decided to open it up and landed on the Polvoron recipe!
            </p>
          </div>
        </div>

        {/*-----------------------Body 2 (questions cont'd)-------------------*/}
        <div className="PV_body2">
          <p className="PV_bodypara">
            <b>How did you come up with your Polvoron recipe?</b>
            <br />
            When I stared at the Goldilocks recipe, I know off the bat that I
            wasn't gonna follow it because it required a lot of fats
            (butter/margarine) and I personally didn't think it was
            proportionate to the other ingredients, so I decided to experiment!
            After the first trial, turned out as I played with butter
            measurements, my sister and I decided to experiment by browning the
            butter, adding cocoa nibs/chocolate chunks/cookie
            crumbs/pecans/peanut butter powder, and a bunch of other random
            things we saw lying around. I've honestly only made it 2 or 3 times
            since it's not something I regularly crave but it is super simple to
            make and was a nice place to start my venture in Filipino desserts.
          </p>
          <p className="PV_bodypara">
            <b>How did you develop a passion for cooking?</b>
            <br />
            It's something I associate a lot of happy memories with and that's
            why I think I enjoy it. I remember helping my parents or older
            siblings bake and cook and as I got older, my friends and I would
            meet up to cook and bake as well. Also, just seeing the happiness of
            the people who eat the food you make will never get old.
          </p>
          <p className="PV_bodypara">
            As we have read, Marie is someone who experiments, takes chances
            with cooking, and overall fulfills her passion for the culinary arts
            all while embracing her Filipino heritage! I hope that with Marie's
            story, we can all feel inspired to jump out of our comfort zones and
            embrace our Filipino culture through the beauty of food. Thank you
            Marie for sharing your wonderful story with us and now, let's dive
            right in to that delicious Polvoron recipe!
          </p>
        </div>

        {/*----------------------------Body 3 (ingredients)----------------------*/}
        <div className="PV_body3">
          <div className="PV_ingredientcontainer">
            <div className="PV_ingredients">
              <div className="PV_ingredientstape">
                <img
                  className="lefttape"
                  src={tape}
                  alt = "Tape"
                />
                <img
                  className="righttape"
                  src={tape}
                  alt = "Tape"
                />
              </div>
              <div className="PV_ingredientstext">
                <div className="PV_ingredientstext_head">Ingredients:</div> ​ ​
                <p>
                  <b>Base:</b>
                  <ul>
                    <li>1 ⅔ cups flour</li>
                    <li> ⅔ cups powdered milk</li>
                    <li> ½ cup sugar </li>
                    <li>½ cup butter</li>
                  </ul>
                </p>
                <p>
                  ​<b> Optional Toppings:</b>
                  <ul>
                    <li>Oreo crumbs</li>
                    <li>Nuts</li>
                    <li>Rice krispies cereal (as a replacement for pinipig)</li>
                    <li>½ cup butter</li>
                  </ul>
                </p>
                <p>Yield: 47 pieces</p>
              </div>
            </div>
            <img
              className="PV_img1"
              src={ingredientsimg}
              alt = "Polvoron"
            />
          </div>
        </div>

        {/*--------------------------Body 4 (steps)----------------------*/}
        <div className="PV_body4">
          <div className="PV_body4header">Steps:</div>
          {/*-------Step 1-------*/}
          <div className="PV_step">
            {/*---Text---*/}
            <div className="PV_steptext">
              1. Toast flour on medium heat for about 10 minutes. Constantly
              stir the flour or it will unevenly brown. You are looking for a
              deeper brown colour which will also release a fragment scent.
              <li>
                Toasted flour is safer to eat than raw flour and also gives a
                deeper flavour.
              </li>
            </div>
            {/*---Images---*/}
            <div className="PV_stepimgs">
              <img src={step1img1}
              alt = "Flour" />
              <div className="arrow">
                <img
                  className="PV_arrow"
                  src={arrow}
                  alt = "Arrow"
                />
              </div>
              <img src={step1img2}
              alt = "Toasted flour"/>
            </div>
          </div>

          {/*-------Step 2-------*/}
          <div className="PV_step">
            {/*---Text---*/}
            <div className="PV_steptext">
              2. Melt butter in a pan.{' '}
              <li>
                I prefer to brown the butter since this also heightens the
                overall flavour. You can do so by leaving the butter in the pan
                longer (on simmer) until it reaches a golden brown colour. Also,
                if you want a denser texture or prefer the buttery flavour, feel
                free to add more butter and/or butter alternatives (margarine,
                shortening, etc.) since I prefer powdery polvoron! Or if you
                decided to add a dry flavouring (ie. nuts, crushed cookies,
                etc.) add more butter (alternatives) otherwise the polvoron will
                not hold shape.
              </li>
            </div>
            {/*---Images---*/}
            <div className="PV_stepimgs">
              <img src={step2img} alt= "Butter" />
            </div>
          </div>

          {/*-------Step 3-------*/}
          <div className="PV_step">
            {/*---Text---*/}
            <div className="PV_steptext">
              3. Add the butter, flour, sugar and powdered milk (I used skim
              since we usually drink skim milk at home anyways but whole
              powdered milk will probably give it a stronger flavour) in a bowl
              and mix.{' '}
              <li>
                You will get a powdery texture but it will mould when compressed
                (kind of like a cheesecake crust!). It will look off white or a
                pale brown depending on how long you choose to toast your flour
                and whether or not you brown the butter.
              </li>
            </div>
            {/*---Images---*/}
            <div className="PV_stepimgs">
              <img src={step3img} 
              alt = "Mixture"/>
            </div>
          </div>

          {/*-------Step 4-------*/}
          <div className="PV_step">
            {/*---Text---*/}
            <div className="PV_steptext">
              4. Optional: Add any side toppings
              <li>
                I added crushed Oreos, just the cookie w/o the cream, to half
                the mixture.
              </li>
            </div>
            {/*---Images---*/}
            <div className="PV_stepimgs">
              <img src={step4img} 
              alt = "Mixture"/>
            </div>
          </div>

          {/*-------Step 5------*/}
          <div className="PV_step">
            {/*---Text---*/}
            <div className="PV_steptext">
              5. Use a polvoron mould to compress the mixture and put it on a
              lined (either parchment or a silicone mat) and let them sit for a
              couple of hours. If you do not have a polvoron mold, you can use a
              cookie cutter and pound the mixture in the cookie cutter until
              compact and molded. Enjoy!
            </div>
            {/*---Images---*/}
            <div className="PV_stepimgs">
              <img src={step5img}
              alt = "Compressed Polvoron" />
            </div>
          </div>
        </div>

        {/*-----------------------------Page Footer------------------------*/}

        <div className="prefooter">
          <div className="block"></div>
        </div>
      </div>
    </div>
  );
};

export default Polvoron;
