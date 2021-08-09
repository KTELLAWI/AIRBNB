import React from 'react'
import Image from 'next/image'

export default function Banner() {
    return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
       <Image
           src="https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720"
           layout='fill'
           objectFit='cover'
       />
       <div className="absolute top-1/2 w-full text-center">
       <p className='text-sm sm:text-lg '>Not sure where to go </p>
       <button className='text-purple-500 z-50 bg-white px-10 py-4 shadow-md rounded-full  font-bold my-3  hover:shadow-xl active:scale-y-95 transition duration-150'> 
           I'm flexible 
       </button>

       </div>
            
    </div>
    )
}
