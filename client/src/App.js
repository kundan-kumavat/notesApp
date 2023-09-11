import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route ,Routes} from "react-router-dom";
import LoginPage from './Pages/loginPage';
import SignUpPage from './Pages/signupPage';
import Notes from './Pages/notes';
import Home from './Pages/Home';

function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
       <Navbar />

       <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' exact element={<SignUpPage />} />
        <Route path='/signin' exact element={<LoginPage />} />
        <Route path='/notes/' exact element={<Notes />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
