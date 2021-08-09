import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MedCard from '../components/MedCard'
import SmallCards from '../components/SmallCards'


export default function Home({exploreDate,cardsData}) {
  
  return (
    <div className=''>
      <Head>
        <title>AIRBNB </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 '>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {exploreDate?.map(({img,location,distance})=>(
            
            <SmallCards
              key={img} 
              img={img}
              location={location}
              distance={distance}
            />
            
          ))}
          </div>

        </section>
        <section >
          <h2 className='text-4xl font-semibold py-8'>Live Any where</h2>
          <div className='flex space-x-3 overflow-scroll  scrollbar-hide p-3 ml-3'>
          {
            cardsData?.map(({img,title})=>(
            <MedCard
              key={img}
              title={title}
              img={img}
            />
          )
          )
          }

          </div>
          

        </section>
        <LargeCard
        title="The Gratest OutDoors"
        description="whishliste curated by Airbnb"
        buttonText="Get Inspired "
        img="https://links.papareact.com/4cj"
        />

      </main>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
      const exploreDate = await fetch('https://links.papareact.com/pyp')
       .then((res)=>res.json())   
       
       const cardsData = await fetch ('https://links.papareact.com/zp1')
       .then((res)=>res.json())


return {
  props: {
    exploreDate,
    cardsData,

  }
}
      }    

