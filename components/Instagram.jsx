import React from 'react';
import Image from 'next/image'; // Dodaj ten import
import rebook from '../public/reebook.webp';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './InstagramImg';
import nike from '../public/nike.jpg';
import addidas from '../public/addidas.jpg';
import puma from '../public/puma.jpg';
import zara from '../public/zara.png'
import hm from '../public/hm.jpg'
const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Nasi Partnerzy</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {/* Użyj komponentu Image do renderowania obrazka */}
        <a target="_blank" href="https://www.nike.com/pl/">
        <Image src={nike} width={300} height={250} />
        </a>


        <a target="_blank" href="https://www.adidas.pl/">
        <Image src={addidas} width={300} height={250} />
        </a>


        <a target="_blank" href="https://www.reebok.eu/pl-pl">
        <Image src={rebook} width={300} height={250} />
        </a>


        <a target="_blank" href="https://eu.puma.com/pl/pl/home">
        <Image src={puma} width={300} height={250} />
        </a>
        <a target="_blank" href="https://www.zara.com/pl/">
        <Image src={zara} width={300} height={250} />
        </a>
       
       <a target="_blank" href="https://www2.hm.com/pl_pl/index.html">
        <Image src={hm} width={300} height={250} />
        </a>
      </div>
    </div>
  );
};

export default Instagram;