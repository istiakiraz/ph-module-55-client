import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
        <div className='flex font-bold text-2xl justify-center items-center w-6/12 mx-auto'>
<NavLink className={({ isActive }) =>
          isActive
            ? " text-red-500  font-bold underline "
            : " hover:underline"
        } to='/' >Home</NavLink>
        </div>
 
</div>
    );
};

export default Header;