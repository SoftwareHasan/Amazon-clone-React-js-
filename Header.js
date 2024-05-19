import React from 'react'

function Header() {
  return (
    <div className='header'>

        <img 
          className='header__logo'
          src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png'
        />

        <div 
         className='header__search'>
         <input className='header__searchInput' type='text'/>
         {/*logo*/}
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

        </div>


    </div>
  );
}

export default Header;