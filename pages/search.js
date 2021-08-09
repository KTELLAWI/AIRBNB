import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCrd from '../components/InfoCrd'
import Map from '../components/Map'

export default function search({searchResults}) {
    console.log(searchResults)
    const router = useRouter()
    const {location,startDate,endDate,numberOfGuests} = router.query;
    const formattedstartdate= format(new Date(startDate),'dd MMMM yy');
    const formattedenddate= format(new Date(endDate),"dd MMMM yy");
    const range =`${formattedstartdate} - ${formattedenddate}`;

    return (
        <div >
           <Header
           placeholder={`${location} |${range}|${numberOfGuests} guests`} />
           <main className='flex' >
           
               <section className='flex-grow pt-14 px-6'>
                   <p className='text-xs'>300+ Stay - {range} - for {numberOfGuests} Guests</p>
                   <h1 className='text-3xl font-semibold mt-2 mb-6'>Syarn addtay in {location }</h1>
                   <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                       <p className='button '></p>
                       <p className='button '></p>
                       <p className='button '></p>
                       <p className='button '></p>
                       <p className='button '></p>
                   </div>
                   <div className="flex flex-col">
                   {
                       searchResults?.map(({img,location,title,description,price,total,star })=>(
                           <InfoCrd
                               key={img}
                               img={img}
                               location={location}
                               title={title}
                               description={description}
                               star ={star}
                               price={price}
                               total={total}
                           />

                       ))
                   }

                   </div>
                   
               </section>
               <section className='hidden xl:inline-flex xl:min-w-[600px] '>
               <Map searchResults={searchResults}/>

               </section>
              

           </main>
           
            <Footer/>
        </div>
    )
}


export async function getServerSideProps() {
    const searchResults = await fetch ('https://links.papareact.com/isz')
    .then((res)=>res.json())


    return{
        props:{
            searchResults
        }
    }
}