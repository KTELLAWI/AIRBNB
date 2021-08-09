import React from 'react'
import { BeakerIcon, GlobeIcon, MenuIcon, SearchCircleIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import router, { useRouter } from 'next/dist/client/router';
import Router from 'next/router';


export default function Header({placeholder}) {
    const route = useRouter()
    const [searchInput,setSearchInput] = useState('')
    const [startDate,setStartDate] =useState(new Date())
    const [endDate,setEndDate] =useState(new Date())
    const [numberOfGuests,setNumbrOfGuests] =useState(1)

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }
const handleSelect =(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)


}
          const resetInput =()=>{
            setSearchInput('')
            setNumbrOfGuests(1)
          }
          const search = () =>{
            router.push({
                pathname:'/search',
                query:{
                    location:searchInput,
                    startDate:startDate.toISOString(),
                    endDate:endDate.toISOString(),
                    numberOfGuests:numberOfGuests
                }

            })
            resetInput()
          }
   
       
    return (
        <header className='sticky top-0 z-50 bg-white grid grid-cols-3 shadow-lg h-18  p-3 md:px-10 '>
           <div 
           onClick={()=>Router.push('/')}
           className="   flex h-10   items-center justify-center  cursor-pointer my-auto">
               <Image
               objectFit='contain'
               layout="fixed"
               objectPosition="left"
               width={150}
      height={50}
              
               src="https://links.papareact.com/qd3" alt="" />
           </div>
           <div className="flex itmes-center  bg-white rounded-full md:border-2 py-2 shadow-md  md:shadow-md">
               <input
               placeholder={placeholder || 'start your search '}
               className=' truncate md:flex-grow pl-4 outline-none bg-transparent text-xm text-gray-600'
                type="text"
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                 />
               <SearchCircleIcon className='hidden md:inline-flex h-9 bg-red-400 mx-auto md:mx-2 text-white  p-2  cursor-pointer items-center border-2 rounded-full'/>
           </div>   
           <div className="flex space-x-4 items-center justify-end text-gray-800 py-2 ">
               <p className='hidden  md:inline-flex cursor-pointer'>become a host </p>
               <GlobeIcon className='h-6 text-gray-600 cursor-pointer'/>
               <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                   <MenuIcon className='h-6'/>
                   <UserCircleIcon className='h-6'/>
               </div>
           </div>
           {searchInput && 
            <div className=' flex flex-col col-span-3 mx-auto'>
            <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#e7f']}
                onChange={handleSelect}
            />
            <div className ='flex items-center  border-b mb-4'>
                <h2 className ='text-2xl pl-2  flex-grow font-semibold'>Number of Guests </h2>
                <UserIcon className='h-5'/>
                <input
                value={numberOfGuests}
                onChange={(e)=>setNumbrOfGuests(e.target.value)}
                    type="number"
                    min={1}
                    className='w-12 pl-2 text-lg outline-none text-red-400'
                />
            </div>
            <div className='flex items-center justify-evenly '>
            <button className='font-semibold px-4 py-2 mt-5 rounded-lg  text-white bg-red-400 hover:bg-white hover:text-red-400'
            onClick={search}>Search</button>
            <button 
            onClick={resetInput}
            className='font-semibold px-4 py-2 mt-5 rounded-lg  text-white bg-red-400 hover:bg-white hover:text-red-400'>Cancel</button>
            </div>

           </div> }
        </header>
    )
}
