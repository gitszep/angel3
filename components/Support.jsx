import React, { useState } from 'react';
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';
import reebok from '../public/reebook.webp';
import Image from 'next/image';
import support from '../public/support.jpg';
import nike from '../public/nike.jpg';
import puma from '../public/puma.jpg'
import zara from '../public/zara.png'

const Support = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const containers = [
    {
      icon: <Image src={reebok} width={300} height={200} className='p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
      title: 'Kurtka Reebok',
      category: 'Reebok',
      content: 'Kod rabatowy: Reebok244',
      buttonLabel: 'Przejdź do Reebok',
      link: 'https://www.reebok.eu/pl-pl'
    },
    {
      icon: <Image src={puma} width={300} height={200} className='p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
      title: 'Buty Puma',
      category: 'Puma',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      buttonLabel: 'Przejdź do Puma',
      link: 'https://eu.puma.com/pl/pl/home'
    },
    {
      icon: <Image src={nike} width={300} height={200} className='p-4 bg-white text-white rounded-lg mt-[-4rem]' />,
      title: 'Buty Nike',
      category: 'Nike',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      buttonLabel: 'Przejdź do Nike',
      link: 'https://www.nike.com/pl/'
    },
   
  ];

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div name='support' className='w-full '>
      <div className='w-full h-[700px] bg-white absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="" alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-black relative'>
        <div className='px-4 py-12'>
          <h3 className='text-5xl font-bold py-6 text-center'>Kody Rabatowe</h3>
          <h2 className='text-3xl pt-8 text-text-black uppercase text-center'></h2>
          <p className='py-4 text-3xl text-text-black'></p>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Szukaj po nazwie..."
            className="mt-4 px-4 py-2  border-gray-300 rounded-lg focus:outline-none focus:border-black text-black shadow-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-4 px-4 py-2  border-gray-300 rounded-lg focus:outline-none focus:border-black text-black shadow-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <option value="">Wszystkie kategorie</option>
            <option value="Reebok">Rebook</option>
            <option value="Nike">Nike</option>
            <option value="Puma">Puma</option>
          </select>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {containers.map((container, index) => (
            // Add a condition to check if the container matches the current category filter
            (categoryFilter === '' || container.category === categoryFilter) &&
            // Add a condition to check if the container title contains the given filter
            (container.title.toLowerCase().includes(filter.toLowerCase())) && (
              <div key={index} className={`bg-white rounded-xl shadow-2xl ${expandedIndex === index ? 'h-auto' : 'h-[fit-content]'}`}>
                <div className='p-8 '>
                  {container.icon}
                  <h3 className='font-bold text-2xl my-6'>{container.title}</h3>
                  <button className="bg-black text-white font-bold py-2 px-4 rounded" onClick={() => handleToggle(index)}>
                    {expandedIndex === index ? 'Ukryj' : 'Pokaż Kod'}
                  </button>
                  {expandedIndex === index && (
                    <p className='text-gray-600 mt-4 font-serif text-xl'>{container.content}</p>
                  )}
                </div>
                <div className='bg-white pl-8 py-4'>
                  <a href={container.link} className="bg-black text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">{container.buttonLabel}</a>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
