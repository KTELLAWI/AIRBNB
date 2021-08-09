import React from 'react'
import Image from 'next/image'


export default function SmallCards({img,location,distance}) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out' >
        <div className='relative h-16 w-16 rounded-lg'>
        <Image
        src={img}
        layout='fill'
        className='rounded-2xl'


        />


        </div>
        <div >
            <h2>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
        
        
            
        </div>
    )
}
