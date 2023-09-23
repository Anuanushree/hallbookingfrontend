import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import axios from 'axios';
import ForgotPassword from './components/forgot/forgot';
import ResetPassword from './components/forgot/reset';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import './app.css'
import Home from './components/Home';
import Navigater from './nav/nav';
import Create from './components/create';
import BookingHall from './components/bookingHall';
import Details from './components/Details';
import Payment from './components/payment/payment';


function App() {
  const [user, setuser] = useState([]);
  const [chartData, setChartData] = useState([]);
  const BASE_URL = "https://hallbooking-odqy.onrender.com";
  //https://hallbooking-odqy.onrender.com
  // http://localhost:3001
  console.log("starting")
  const token = localStorage.getItem('token');
  const headers = {
    headers: { "authorization": `${token}` }
  }

  return (
    <Router>

      <Routes>
        <Route path='/' element={<SignIn BASE_URL={BASE_URL} />} />
        <Route path='/signup' element={<SignUp BASE_URL={BASE_URL} />} />
        <Route path='/forgotpassword' element={<ForgotPassword BASE_URL={BASE_URL} />} />
        <Route path='/resetpassword/:id' element={<ResetPassword user={user} BASE_URL={BASE_URL} />} />
      </Routes>
      <Routes>

        <Route path='/home' element={<Home BASE_URL={BASE_URL} />} />
        <Route path='/payment' element={<Payment BASE_URL={BASE_URL} />} />
        <Route path='/create' element={<Create BASE_URL={BASE_URL} />} />
        <Route path='/booking' element={<BookingHall BASE_URL={BASE_URL} />} />
        <Route path='/list' element={<Details BASE_URL={BASE_URL} />} />
      </Routes>
      {/* <div id="page-top">
        <div id="wrapper">
          <Routes>
            <Route path='/sample' element={<Sample BASE_URL={BASE_URL} />} />
            <Route path='/edit' element={<EditIncome BASE_URL={BASE_URL} chartData={chartData} />} />
            <Route path='/user' element={<UserForm user={user} BASE_URL={BASE_URL} />} />
            <Route path='/profile' element={<User BASE_URL={BASE_URL} />} />
            <Route path='/graph' element={<GraphData BASE_URL={BASE_URL} />} />
            <Route path='/data' element={<TableData BASE_URL={BASE_URL} />} />

          </Routes>
        </div>
      </div> */}

    </Router>
  )
}

export default App;