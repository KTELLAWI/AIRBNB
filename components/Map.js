import React,{useState} from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import { getCenter, getDistance } from 'geolib';
import getcenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export default function Map({searchResults}) {
    const[selectedLocation,setSelectedLocation] =useState({})
   

      const coordinates = searchResults.map((item)=>({
          longitude:item.long,
          latitude:item.lat,
      }))
      const center = getCenter(coordinates)
      const [viewport, setViewport] = useState({
       
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
      });
    
    return (
        <ReactMapGL
        
        mapStyle='mapbox://styles/ktellawi/cks4j3j9n7qcv18p675nlu7lo'
        mapboxApiAccessToken={process.env.mapbox_key}
        width="100%"
      height="100%"
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        >
        {searchResults.map((res)=>(
            <div
            key={res.long}>
             <Marker
             longitude={res.long}
             latitude={res.lat}
             offsetLeft={-20}
             offsetTop={-10}>
              <p
              role='img'
              onClick={()=>setSelectedLocation(res)}
              aria-Label="Push Pin"
               className='cursor-pointer text-2xl animate-bounce'>
               <LocationMarkerIcon className='h-9 text-yellow- text-yellow-300'/>
             </p>

            </Marker>
            {selectedLocation.long === res.long ? ( 
                <Popup
                onClose={()=>setSelectedLocation({})}
                closeOnClick={true}
                latitude={res.lat}
                longitude={res.long}
                >
                    {res.title}
                </Popup>
            ) :  ( false )}
            </div>
          
        ))}
            
        </ReactMapGL>
            
    )
}
