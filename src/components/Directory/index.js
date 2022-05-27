import React from 'react';
import ShopeMen from './../../assets/men1.png';
import ShopeWomen from './../../assets/women1.png';
import './styles.scss';


const Directory= props => {
  return (
    <div className='directory'>
      <div className= 'wrap'>
        <div className='item' style={{ backgroundImage : `url(${ShopeMen})`}}>
          <a href="#/">ShopMen</a>
        </div>  
        
        <div className='item' style={{backgroundImage : `url(${ShopeWomen})`}}>
          <a href="#/">ShopWomen</a>
        </div>     
      </div>
    </div>
  );
};

export default Directory;
