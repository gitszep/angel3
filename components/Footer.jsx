import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full bg-black py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1 className=" text-white" >RabatAngel</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex text-white font-bold'>
            <li className=''>+48 787 567 185</li>
            <li>rabatangel@int.pl</li>
           
          </ul>
          
          <ul  className='text-right  text-white lg:flex'>
          <li className='p-4 font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 font-bold '>
            <Link href='/#gallery'>Galeria</Link>
          </li>
          <li className='p-4 font-bold '>
            <Link href='/kodyrabatowe'>Kody Rabatowe</Link>
          </li>
          <li className='p-4 font-bold'>
            <Link href='/contact'>Kontakt</Link>
          </li>
        </ul>
        
        </div>
        
      </div>
      <p className="text-white mt-4 font-bold text-xs  text-center  ">@RabatAngel all rights reserved </p>

    </div>
  );
};

export default Footer;
