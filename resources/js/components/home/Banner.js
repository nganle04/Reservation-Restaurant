import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useBookingContext, useBookingContextUpdater } from '../../services/booking-context.service';

const Banner = ()=>{
  const bookingData = useBookingContext()
  const SetBookingData = useBookingContextUpdater()
  const dateTime = useRef(null);
  const guestCount = useRef(null);
  const onChange = ()=>{
    bookingData.dateTime = dateTime.current.value
    bookingData.guestCount = guestCount.current.value
    SetBookingData({...bookingData})

  }
  const onTableRequest = ()=>{
    if(!bookingData.dateTime){
      toast.error("Please, Select Date & Time")
      return null
    }
    if(new Date(bookingData.dateTime) <= new Date()){
      toast.error("Please, Date & Time shouldn't be inappropriate")
      return null
    }
    if(!bookingData.guestCount){
      toast.error("How many guests would you like to have ?")
      return null
    }
    document.querySelector('#cart-n-details').scrollIntoView({behavior: 'smooth'})
    // props.onTableRequest(dateTime.current.value,guestCount.current.value)
    bookingData.cartTitle = "Finding Table...."
    bookingData.cartLoading = true
    SetBookingData({...bookingData})

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("date", bookingData.dateTime);
    formdata.append("guestCount", guestCount.current.value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(pathPrefix+'api/tables', requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        bookingData.cartTitle = "Allocated Table"
        bookingData.tableAllocated = result.tables
        bookingData.totalFee = result.fee
        SetBookingData({...bookingData})
      })
      .catch(error => {
        bookingData.cartTitle = "Something Went Wrong"
        // console.log('error', error)
        SetBookingData({...bookingData})
      })
      .finally(()=>{
        bookingData.cartLoading = false
        SetBookingData({...bookingData})
      })
  }
  return <div className="home-banner" style={{background:`url(${pathPrefix+"img/table-reservation-banner.webp"})`}}>
    <div className='overlay'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 form'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label>Reservation Date & Time</label>
                  <input ref={dateTime} onChange={onChange} type="datetime-local" className='form-control'/>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label>Number Of Guests</label>
                  <input ref={guestCount} onChange={onChange} type="number" className='form-control'/>
                </div>
              </div>
              <div className='col-md-4 d-flex flex-column justify-content-end'>
                <button onClick={onTableRequest} className='btn btn-primary'>Let's Get You A Table</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Banner