import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { Outlet } from 'react-router';
import mystore from './redux/mystore';
import { Provider } from 'react-redux';

function App() {
   //<Content movieName={submittedMovie} />
  // This state ONLY updates when the form is submitted
  const [submittedMovie, setSubmittedMovie] = useState('');

  return (
    <>
    <Provider store={mystore}>
              <Navbar onSearchSubmit={setSubmittedMovie} />
               <Outlet context={submittedMovie}/>
               <Footer />
      </Provider>
      </>
  )
}

export default App;
