import React, { useState } from 'react';
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';

const Support = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const containers = [
    {
      icon: <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
      title: 'Sales',
      category: 'Sales',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
    },
    {
      icon: <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
      title: 'Technical Support',
      category: 'Technical Support',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
    },
    {
      icon: <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
      title: 'Media Inquiries',
      category: 'Media Inquiries',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
    },
    {
        icon: <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Sales',
        category: 'Sales',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Technical Support',
        category: 'Technical Support',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Media Inquiries',
        category: 'Media Inquiries',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Sales',
        category: 'Sales',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Technical Support',
        category: 'Technical Support',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Media Inquiries',
        category: 'Media Inquiries',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Sales',
        category: 'Sales',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Technical Support',
        category: 'Technical Support',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },
      {
        icon: <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />,
        title: 'Media Inquiries',
        category: 'Media Inquiries',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.',
      },


  ];

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src="" alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
      
      
      
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
          <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search by title..."
            className="mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-white shadow-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-white shadow-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <option value="">All Categories</option>
            <option value="Sales">Sales</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Media Inquiries">Media Inquiries</option>
          </select>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          {containers.map((container, index) => (
            // Dodajemy warunek sprawdzający, czy kontener odpowiada aktualnemu filtrowi kategorii
            (categoryFilter === '' || container.category === categoryFilter) && (
              <div key={index} className={`bg-white rounded-xl shadow-2xl ${expandedIndex === index ? 'h-auto' : 'h-[fit-content]'}`}>
                <div className='p-8'>
                  {container.icon}
                  <h3 className='font-bold text-2xl my-6'>{container.title}</h3>
                  <button className='bg-danger' onClick={() => handleToggle(index)}>
                    {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                  </button>
                  {expandedIndex === index && (
                    <p className='text-gray-600 text-xl'>{container.content}</p>
                  )}
                </div>
                <div className='bg-slate-100 pl-8 py-4'>
                  <button>Przejdz do sklepu</button>
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
