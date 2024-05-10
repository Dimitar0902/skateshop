import React from 'react';
import { Link } from 'react-router-dom';
import { ShopList } from '../helpers/Shoplist';
import { hopItem } from '../components/ShopItem';
import '../styles/Shop.css';

function Shop() {
  return (
    <div className='shop'>
      <h1 className='shopTitle'>Shop</h1>
      <div className='shopList'>
        {ShopList.map((shopItem, key) => {
          return (
            <div key={key} className='shopItem'> 
              <Link to={`/product/${shopItem.name}`} className='shopItemLink'>
                <div className='shopItemImage' style={{backgroundImage: `url(${shopItem.image})`}}></div>
              </Link>
              <div className='shopItemContent'>
                <h2>{shopItem.name}</h2>
                <p>{shopItem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
