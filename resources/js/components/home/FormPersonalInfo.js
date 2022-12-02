import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import { toast } from 'react-toastify';
import TableAllocated from './TableAllocated';
import { useBookingContext, useBookingContextUpdater } from '../../services/booking-context.service';

const FormPersonalInfo = ()=>{
  const data = useBookingContext()
  const SetDate = useBookingContextUpdater()
  const name = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const onChange = ()=>{
    data.name = name.current.value
    data.email = email.current.value
    data.phone = phone.current.value
    SetDate({...data})
  }
  return <div className='row'>
    <div className='col-12'>
      <h3 className='text-center'>Personal Information</h3>
      <hr/>
    </div>
    <div className='col-md-4'>
      <div className='form-group'>
        <label>Full Name</label>
        <input ref={name} onChange={onChange} type="text" className='form-control'/>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='form-group'>
        <label>Email</label>
        <input ref={email} onChange={onChange} type="email" className='form-control'/>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='form-group'>
        <label>Phone</label>
        <input ref={phone} onChange={onChange} type="email" className='form-control'/>
      </div>
    </div>
  </div>
}

export default FormPersonalInfo