import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       
       <img 
          className='home__background'
          src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png' alt='amazon__logo'
        />
        <div className='home__row'>
             <Product
              title="The learn Startup"
              price="19.99"
              image="https://jumpbooks.lk/ceruvef/uploads/2017/03/The-Lean-startup.jpg"
             />
             
             <Product
             title="I phone 15"
             price="999"
             image="data:image/jpeg;base64,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"
             />   
             <Product
             title="Apple Mac"
             price="2880"
             image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229"
             /> 
             <Product
             title="Dell i5 Laptop"
             price="1500"
             image="https://dellshop.lk/wp-content/uploads/2023/01/Dell-Inspiron-3520-3-300x300.jpg"
             /> 
        </div>

        <div className='home__row'>
             <Product
             title="Apple iPad (9th Generation)"
             price="888"
             image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL480_QL65_.jpg"
             />
             <Product
             title="Amazon Basics 48-Pack AA Alkaline"
             price="15.74"
             image="https://m.media-amazon.com/images/I/81uBzbSP1+L._AC_UL480_QL65_.jpg"
             /> 
             <Product
             title="Apple AirPods Pro (2nd Gen) Wireless"
             price="100"
             image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg"
             /> 
             <Product
             title="Apple 20W USB-C Power Adapter"
             price="20"
             image="https://m.media-amazon.com/images/I/41iWogJnZQL._AC_UL480_QL65_.jpg"
             />    
        </div>

        <div className='home__row'>
             <Product
             title="Apple EarPods Headphones with Lightning Connector. "
             price="15.99"
             image="https://m.media-amazon.com/images/I/41-aexp44tL._AC_UL480_QL65_.jpg"
             />  
             <Product
             title="Texas Instruments TI-84 Plus CE Color Graphing Calculator"
             price="121.55"
             image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL480_QL65_.jpg"
             /> 
             <Product
             title="Apple MagSafe Charger - Wireless Charger with Fast Charging"
             price="33.50"
             image="https://m.media-amazon.com/images/I/71f792LZY2L._AC_UL480_QL65_.jpg"
             /> 
             <Product
             title="SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter"
             price="12.99"
             image="https://m.media-amazon.com/images/I/71etcRZF-JL._AC_SX679_.jpg"
             /> 
        </div>

    </div>
  );
}

export default Home;