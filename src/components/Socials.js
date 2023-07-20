import React from 'react';
//import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im';

const Socials = () => {
  return (
  <div className='x1:flex ml-24 pr-[3px]'>
    <ul className='flex gap-x-5'>
      <li>
        <a href="http://www.facebook.com" target='_blank'>
          <ImFacebook size={26}/>
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" target='_blank'>
          <ImTwitter size={26}/>
        </a>
      </li>
      <li>
        <a href="http://www.pinterest.com" target='_blank'>
          <ImPinterest size={26}/>
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com" target='_blank'>
          <ImInstagram size={26}/>
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com" target='_blank'>
          <ImYoutube size={26}/>
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Socials;
