import React, { useState } from 'react'
import { Link } from 'react-router';

export default function Navbar({ onSearchSubmit }) {
  // Tracks typing but does NOT affect the global state yet
  const [typingValue, setTypingValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 1. Stops the browser from reloading the page
    onSearchSubmit(typingValue); // 2. ONLY now does it push the name to App.jsx
  };

  return (
    <nav className='w-full p-4 mx-auto flex mb-4 border mt-2 bg-dark shadow-sm bg-yellow-500'>
      <div className='flex w-7xl mx-auto items-center justify-between'>
        <a href="#" className='pt-2'>MOVIE APP</a>
        
        <div className="w-2/4 pt-2 pb-2 pr-2 flex"> 
          <ul className="flex w-full justify-around">
            <li><Link to="/">Home</Link></li>
             
            <li><Link to="/toprated">Top-Rated</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/upcoming">Upcoming</Link></li>
          </ul>
         </div>  
           
        {/* The form catches the submit event */}
        <form onSubmit={handleSubmit} className='flex items-center'>
        <input  
            type="text" 
            placeholder='search movie..' 
           className='bg-white mr-2 p-2 border'
           value={typingValue}
            onChange={(e) => setTypingValue(e.target.value)} // Safe local state
          />
          <button type="submit" className='bg-red-300 h-10 w-25 rounded'>Search</button>
        </form>

      </div>
    </nav>
  )
}
