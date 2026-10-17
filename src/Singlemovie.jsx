import React, { useEffect } from 'react'
import MovieInfo from './MovieInfo'
import Moviecast from './Moviecast'
import { useParams } from 'react-router'
import axios from 'axios'


export default function Singlemovie() {
    let ansUrl=useParams();
    console.log(ansUrl);


    useEffect(()=>{

     console.log("call api for",ansUrl.movieid);
      let API1=`https://api.themoviedb.org/3/movie/${ansUrl.movieid}?api_key=333e1f0ca661af7b8109a924550d0025&language=en-US`;

     let API2=`https://api.themoviedb.org/3/movie/${ansUrl.movieid}/credits?api_key=333e1f0ca661af7b8109a924550d0025&language=en-US`;
            console.log(API1);
             console.log(API2);
              Promise.allSettled([
        axios.get(API1),
        axios.get(API2)
       
    ]).then((res)=>{

          console.log(res);


    }).catch((err)=>{

        console.log(err);

    });

         
    },[ansUrl.movieid]);
     
    



  return (
    <div>
              
                    <MovieInfo/>
                    <Moviecast/>
         
    </div>
  )
}
