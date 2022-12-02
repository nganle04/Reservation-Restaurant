import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../components/home/Banner';
import Confirmation from '../components/home/Confirmation';
import { BookingContextProvider } from '../services/booking-context.service';

const Home = () =>{
  return <BookingContextProvider>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
  <Banner/>
  <div className="container">
    <div className='row'>
      <div className='col-12 py-5 bg-white shadow-sm'><h1 className='text-center'>Our system will find you a table</h1></div>
    </div>
  </div>
  <Confirmation/>
  </BookingContextProvider>
};
export default Home