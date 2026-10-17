import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movielist from './Movielist';

export default function TopRated() {

    let[record,setrecord]=useState([]);
    useEffect(()=>{
         const API='https://api.themoviedb.org/3/movie/top_rated?api_key=333e1f0ca661af7b8109a924550d0025&language=en-US&page=1';

         axios.get(API).then((res)=>{
            console.log(res);
            console.log(res.data.results);
            setrecord(res.data.results);


         }).catch((err)=>{

            console.log(err);

         })





    },[])

  return (
    <div>
          <h2>Top Rated</h2>
           <Movielist p1={record}/>
    

    </div>
  )
}
