import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import { toast } from 'react-toastify';
import TableAllocated from './TableAllocated';
import FormPersonalInfo from './FormPersonalInfo';
import FormMailingAddress from './FormMailingAddress';
import FormBillingAddress from './FormBillingAddress';
import { useBookingContext, useBookingContextUpdater } from '../../services/booking-context.service';

const Confirmation = ()=>{
  const data = useBookingContext()
  const SetDate = useBookingContextUpdater()
  const [submitting,SerSubmitting] = useState(false)
  const password = useRef(null)
  const confirmPassword = useRef(null)
  const onChange = ()=>{
    data.password = password.current.value
    data.confirmPassword = confirmPassword.current.value
    SetDate({...data})
  }
  const onSubmit = ()=>{
      console.log(data)
      SerSubmitting(true)
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(pathPrefix+"api/place-booking", requestOptions)
        .then(response => response.text())
        .then(result => {
          if(result == 'Success'){
            toast.success("Booking Confirmed")
            setTimeout(()=>{
              location.reload()
            },1000)
          }else{
            throw new Error("Error")
          }

        })
        .catch(error => {
          console.log('error', error)
          toast.error("Something Went wrong")
          SerSubmitting(false)
        })
      // setTimeout(()=>{
      //   location.reload()
      // },1000)
  }
  return <div className="home-banner" id="cart-n-details" style={{background:`url(${pathPrefix+"img/reservation-confirmation.webp"})`}}>
    <div className='overlay'>
      <div className='container'>
        <div className='row'>
          <TableAllocated/>
          <div className='col-md-8 form'>
            <FormPersonalInfo/>
            <FormMailingAddress/>
            {data.differentBilling && <FormBillingAddress/>}
            <div className='row'>
              {data.newAccount && <div className='col-md-4'>
                <div className='form-group'>
                  <label>Password</label>
                  <input ref={password} onChange={onChange} type="password" className='form-control'/>
                </div>
              </div>}
              {data.newAccount && <div className='col-md-4'>
                <div className='form-group'>
                  <label>Confirm Password</label>
                  <input ref={confirmPassword} onChange={onChange} type="password" className='form-control'/>
                </div>
              </div>}
              <div className='col-md-4 d-flex flex-column justify-content-end'>
                {data.name && 
                data.email && 
                data.phone && 
                data.password == data.confirmPassword && 
                data.mailing && 
                data.mailing.addressLine1 && 
                data.mailing.city && 
                data.mailing.state && 
                data.mailing.country && 
                !submitting && 
                <button onClick={onSubmit} className='btn btn-primary'>Confirm Reservation</button>}
                {submitting && <button class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Processing...
                </button>}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
}

export default Confirmation