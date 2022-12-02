import React from 'react'
import { useFetch } from './useFetch'
const Home = () => {
 const [ data ] = useFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <>
    {data.map(photos => {
        return (
            <div key={photos.id}>
              <img src={photos.thumbnailUrl }/>
              <p>{photos.title}</p>
             </div>   
        )
    })}
    </>
  )
}

export default Home