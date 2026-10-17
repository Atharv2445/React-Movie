import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { Outlet } from 'react-router';

function App() {
   //<Content movieName={submittedMovie} />
  // This state ONLY updates when the form is submitted
  const [submittedMovie, setSubmittedMovie] = useState('');

  return (
    <>
      <Navbar onSearchSubmit={setSubmittedMovie} />

          <Outlet context={submittedMovie}/>
      <Footer />
      </>
  )
}

export default App;
