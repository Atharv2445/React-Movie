import React from 'react'

export default function MovieInfo(props) {
  return (
    <div className='w-6xl mx-auto p-3'>
        <h1 className='uppercase text-3xl'>Movie Info</h1>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500"+props.p1.poster_path} className='w-full'/>




            </div>
            <div>
                <h1 className='text-6xl uppercase'>{props.p1.title}</h1>
                <p className='text-2xl mt-3'>
                    {props.p1.overview}
                </p>



            </div>

        </div>
      
    </div>
  )
}
