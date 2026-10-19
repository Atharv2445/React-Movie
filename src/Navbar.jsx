import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { changeMovieName } from './redux/slices/searchSlice';

export default function Navbar() {

    let x1=useRef();
    let navigate =useNavigate();
    let dispatch=useDispatch();

    function myfunc(){

        console.log("func is working");
        console.log(x1.current.value);
        if(x1.current.value !=""){
            dispatch(changeMovieName(x1.current.value))
             navigate("/searchmovie");

        }
    }
  
 
  return (
    <nav className='w-full p-4 mx-auto flex  border  bg-dark shadow-sm bg-[#0B0F19]'>
      <div className='flex w-7xl mx-auto items-center justify-between'>
        <a href="#" className='pt-2 text-2xl font-bold tracking-wide
             text-white'>MOVIE APP</a>
        
        <div className="w-3/4  pb-2 pr-2 flex"> 
          <ul className="flex w-full justify-around ">
            <li className='pt-3 text-violet-400 font-semibold'><Link to="/searchmovie">Home</Link></li>
             
            <li className='pt-3 text-slate-300 hover:text-violet-400
              transition-colors'><Link to="/toprated">Top-Rated</Link></li>
            <li className='pt-3 text-slate-300 hover:text-violet-400
              transition-colors '><Link to="/popular">Popular</Link></li>
        
            <li className='pt-3 text-slate-300 hover:text-violet-400
              transition-colors'><Link to="/upcoming">Upcoming</Link></li>

            <li className='pl-3 pr-3  '>
                <input type="text" ref={x1} className='bg-white mr-2 p-2 border rounded' placeholder='Movie Name' />

               <button onClick={myfunc} className='rounded-lg bg-violet-500 px-6 py-2
           font-semibold text-white
           hover:bg-violet-400
           active:scale-95 transition'>Search

               </button>
            </li>
          </ul>
         </div>  


           
       

      </div>
    </nav>
  )
}
