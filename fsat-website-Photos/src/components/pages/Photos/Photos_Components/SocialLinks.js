import React from 'react';
import './Photos.css';
import Facebookicon from "./Photos_section_images/facebookicon.webp"
import Youtubeicon from "./Photos_section_images/youtubeicon.webp"
import Instagramicon from "./Photos_section_images/instagramicon.webp"

//social media icons + links
const sociallinks = [
  {
    alt: 'Facebook',
    link: 'https://www.facebook.com/FilipinoStudentsAssociationofToronto/',
    image:
      Facebookicon,
  },
  {
    alt: 'Youtube',
    link: 'https://www.youtube.com/user/fsatTV',
    image:
      Youtubeicon,
  },
  {
    alt: 'Instagram',
    link: 'https://www.instagram.com/fsa.utoronto/',
    image:
      Instagramicon,
  },
];

const SocialLinks = () => {
  return (
    <div id="icons">
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
