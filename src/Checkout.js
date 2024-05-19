import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='Checkout__left'>
             <img className='checkout__ad' 
             src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png'/>
             
             <div className='checkout__title'>
                <h2>Your Shopping Basket</h2>
             </div>

             <div className='checkout__right'>
                <h2>The Subtotal will go here</h2>
             </div>
             
        </div>
    </div>
  );
}

export default Checkout
