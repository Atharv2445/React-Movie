import React from 'react'
import { useOutletContext } from 'react-router';
export default function Content() {

   const movieName = useOutletContext();
  return (
    <div className='w-full h-50 text-center pt-10'>
       <h1>
         <b>
           {/* Displays the name only after submit updates the prop */}
           {movieName ? `Searched Movie: ${movieName}` : "Search Movie Page"}
         </b>
       </h1>
    </div>
  )
}
