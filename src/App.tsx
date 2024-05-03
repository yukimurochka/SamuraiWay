import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let DialogsHandler = () => <Dialogs/>
let ProfileHandler = () => <Profile/>

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsHandler/>}/>
          <Route path='/profile' element={<ProfileHandler/>}/>
          <Route path='/news' element={<DialogsHandler/>}/>
          <Route path='/music' element={<DialogsHandler/>}/>
          <Route path='/settings' element={<DialogsHandler/>}/>
        </Routes>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
