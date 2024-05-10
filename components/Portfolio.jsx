import Image from 'next/image';
import React from 'react';
import photo5 from '../public/photo5.jpg'
import photo2 from '../public/photo2.jpg'
import photo3 from '../public/photo3.jpeg'
import photo4 from '../public/photo4.jpg'
import photo6 from '../public/photo6.jpg'
import photo7 from '../public/photo7.jpg'
import photo8 from '../public/photo8.jpg'
import photo9 from '../public/photo9.jpg'
import photo1 from '../public/photo1.jpg'








const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'></h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={photo5}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={photo1}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='top'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={photo8}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={photo9}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={photo7}
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
