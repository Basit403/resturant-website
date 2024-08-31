import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags}) => (
  <div className='menuitem'>
    <div className='menuitem-head'>
      <div className='menuitem-name'>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>

      </div>

      <div className='menuitem-dash'></div>

      <div className='menuitem-price'>
        <p className='p__cormorant'>{price}</p>

      </div>

      <div className='menuitem-sub'>
        <p className='p__opensans' style={{colo:'#AAA' }}>{tags}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
