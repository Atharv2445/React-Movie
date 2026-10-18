import React from 'react'

export default function Moviecast(props) {
  return (
    <div className='w-6xl mx-auto p-3'>
        <h1 className='uppercase text-3xl'>Movie Cast</h1>

        <div className='grid gap-3 grid-cols-6'>
        { props.p2 && props.p2.map((val)=>(

            <div>
                <img src={"https://image.tmdb.org/t/p/w500"+val.profile_path} className='w-full'/>
                <h4>{val.name}</h4>

            </div>

        )

        )

        }
    </div>
    </div>
  )
}
