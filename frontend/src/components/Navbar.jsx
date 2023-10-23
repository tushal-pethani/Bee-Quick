import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const NavBar = () => {
  const style = {
    fontFamily: {
      body: 'QuickSand, serif',
      title: 'Cinzel, cursive',
      button: 'Nunito Sans, serif',
    },
  };

  return (
    <div className={classNames({
      'w-screen h-fit': true,
      'fixed top-2 z-[10000] ': true,
      'flex justify-center items-center': true,
    })}>
      <div className={classNames({
        'w-[97.5vw] h-fit': true,
        'px-10 py-2': true,
        'flex items-center justify-center': true,
        'rounded-xl shadow-md bg-[#FFFFFF]': true,
        'dark:bg-[#fff7de] dark:!text-[#000000]': true,
        'mobile:px-2': true,
        fontFamily: style.fontFamily.body,
      })}>
        {/* Logo... */}
        <div className={classNames({
          'w-1/4 h-fit p-2': true,
          'flex items-center justify-start': true,
          'font-bold  font-serif text-2xl text-[#000000]': true,
          'dark:text-[#000000]': true,
          'mobile:text-lg': true,
        })}>
          <Link to='/'>BeeQuick</Link>
        </div>

        {/* NavItems... */}
        <div className={classNames({
          'w-3/4 h-fit': true,
          'flex items-center justify-end gap-4': true,
          'mobile:gap-2': true,
          fontFamily: style.fontFamily.footer,
        })}>
          <button
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#FFC629]': true,
              'px-4 py-2': true,
              'text-sm font-Nunito sans text-[#000000] font-normal': true,
              'mobile:text-xs': true,
              fontFamily: style.fontFamily.button,
               'hover:bg-[#FFA500]': true, 
              'hover:text-white': true,
              'hover:border-[#000000]': true,
            })}
          >
            <Link to='/Home'>Home</Link>
          </button>
          <button
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#FFC629]': true,
              'px-4 py-2': true,
              'text-sm text-[#000000] font-normal': true,
              'mobile:text-xs': true,
              fontFamily: style.fontFamily.button,
               'hover:bg-[#FFA500]': true, 
              'hover:text-white': true,
              'hover:border-[#000000]': true,
            })}
          >
            <Link to='/Rent'>Rent</Link>
          </button>
          <button
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#FFC629]': true,
              'px-4 py-2': true,
              'text-sm text-[#000000]   font-normal': true,
              'mobile:text-xs': true,
              fontFamily: style.fontFamily.button,
               'hover:bg-[#FFA500]': true, 
              'hover:text-white': true,
              'hover:border-[#000000]': true,
            })}
          >
            <Link to='/Login'>Login</Link>
          </button>
          {/* Include the DarkMode component here if needed */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

