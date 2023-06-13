import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import ManagerPage from './ManagerPage';
import Home from './Home';
import AuctionPage from './AuctionPage';
function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element=<Home/> />
          <Route path="/signup" element=<SignUpForm/> />
          <Route path="/login" element=<LoginPage/> />
          <Route path="/user" element=<UserPage/> />
          <Route path="/manager" element=<ManagerPage/> />
          <Route path="/auctionPage" element=<AuctionPage/> />
        </Routes>
      </div>
  );
}

export default App;
