import React from 'react'
import { Link } from 'react-router'
Link

export default function Movielist(props) {
  return (
    <div className='grid grid-gap-4 grid-cols-4 min-h-screen bg-[#0B0F19] p-6
             text-slate-50'>
      {
         props.p1 && props.p1.map(val=>(

         <div className='p-3 text-center'>
           <img src={"https://image.tmdb.org/t/p/w500"+val.poster_path} className='w-full'/>
           <h2 className='pt-2 pb-2'>{val.title}</h2>
           <p className='pt-2 pb-2'>{val.vote_average}</p>
          <p>  
                  {val.id}
          </p>
          <Link to={"/single-movie/"+val.id}>Movie</Link>


          </div>
              
          ) )

      }

</div>



  )
      
}
  

