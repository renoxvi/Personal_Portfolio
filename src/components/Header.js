import React from 'react';
//import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

//import link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='bg-white fixed w-full pb-[2px] pt-[6px] px-[28px] lg:px-[100px] z-30 lg:h-[80px] flex items-center'>
        <div className='flex flex-collg:flex-row lg:items-center w-full justify-between'>
          {/*logo*/}
          <Link to={'/'} className='max-w-[200px]'>
            <img src={Logo} alt=""/>
          </Link>
          {/*nav initially hidden and show on desktop only*/}
          <nav className='hidden xl:flex gap-x-12 font-semibold'>
            <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
              Home
            </Link>
            <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
              About
            </Link>
            <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
              Portfolio
            </Link>
            <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
              Contact
            </Link>
            
          </nav>
        </div>
        {/*Socials*/}
        <Socials />
        {/*mobile nav*/}
        <MobileNav/>          


        
    </header>
  ); 
};

export default Header;
