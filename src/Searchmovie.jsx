import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

export default function Searchmovie() {

    let[record,setRecord]=useState([]);
    let ansMovie=useSelector(state=>state.search.movieName)

    useEffect(()=>{

        console.log("call Api",ansMovie);
        let API=`https://api.themoviedb.org/3/search/movie?api_key=333e1f0ca661af7b8109a924550d0025&language=en-US&query=${ansMovie}&page=1`;


        axios.get(API).then((res)=>{
          console.log(res);
          setRecord(res.data.results);

        }).catch((err)=>{

            console.log(err);
        })




    },[ansMovie])

  
  return (
   

     <div className='bg-[#151B2B]'>
          <br />
            <h1 className='ml-4 mb-5 text-2xl font-semibold racking-wide
                 text-white'>Searched Movies :{ansMovie}</h1>
            
            
            <Movielist p1={record}/>
        </div>
  )
}
