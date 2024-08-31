import React from 'react';
import { SubHeading } from '../../components';
import './Chef.css';
import { images } from '../../constants';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="what">What we believe in</h1>

      <div className="app-chef">
        <div className="app-chef-quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe ipsa sint vero numquam quos obcaecati eaque cumque adipisci, autem corporis inventore error temporibus quod rem, dolorem nulla? Ratione, commodi? </p>
      </div>

      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
