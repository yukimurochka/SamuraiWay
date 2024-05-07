import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StateType } from './redux/state';

type AppPropsType = {
  state: StateType
  addPost: (text: string) => void
}

const App = (props: AppPropsType) => {
  let DialogsHandler = () => <Dialogs state={props.state.dialogsPage}/>
  let ProfileHandler = () => <Profile state={props.state.profilePage} addPost={props.addPost}/>
  
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
