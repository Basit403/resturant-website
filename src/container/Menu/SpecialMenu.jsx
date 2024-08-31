import React from 'react';
import { images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='menu flex__center'>
    <div className='menu-title'>
      <SubHeading title='menu that fits you' />
      <h1 className='head-text'>Today's Speacial</h1>
    </div>

    <div className='menu-menu'>
      <div className='menu-menu-wine flex__center'>
        <p className='menu-heading'>Wine and beer</p>
        <div className='menu-items'>
          {data.wines.map((wine, index) => 
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          )}
        </div>
      </div>

      <div className='menu-img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='menu-menu-cocktails flex__center'>
        <p className='menu-heading'>Cocktails</p>
        <div className='menu-items'>
          {data.cocktails.map((cocktail, index) => 
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          )}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom-button custom__button'>View More</button>

    </div>

  </div>
);

export default SpecialMenu;
