import React from 'react';
import './ContactUs.css';
import Facebookicon from "./CUimages/facebookicon.webp"
import Youtubeicon from "./CUimages/youtubeicon.webp"
import Instagramicon from "./CUimages/instagramicon.webp"

//social media icons + links
const sociallinks = [
  {
    alt: 'Facebook',
    link: 'https://www.facebook.com/FilipinoStudentsAssociationofToronto/',
    image: Facebookicon,
    },
  {
    alt: 'Youtube',
    link: 'https://www.youtube.com/user/fsatTV',
    image: Youtubeicon,
  },
  {
    alt: 'Instagram',
    link: 'https://www.instagram.com/fsa.utoronto/',
    image: Instagramicon,
  },
];

const SocialLinks = () => {
  return (
    <div className="socialicons">
      {sociallinks.map((icon, index) => {
        return (
          <a href={icon.link}>
            <img alt={icon.alt} src={icon.image}></img>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
