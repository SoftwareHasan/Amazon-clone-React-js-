
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from './Home';
import React, { useState, useEffect } from 'react';
import FingerprintIcon from '@mui/icons-material/Fingerprint';


function Header() {
  return (
    <div className='header'>
    
   
        <img 
          className='header__logo'
          src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png' alt='amazon__logo'
        />
   
     
        <div className='header__search'>
         <input className='header__searchInput' type='text'/>   
         <SearchIcon className='header__searchicon'/>
        </div>

        

        <div className='header__nav'>
          

            <div className='header__option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            
            
            
             <div className='header__basket'>
               <ShoppingBasketIcon/>
               <span className='basket__count'>0</span>
             </div>
          
             
        </div>


    </div>
  );
}

export default Header;