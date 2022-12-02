import React, { useRef } from 'react';
import { useBookingContext, useBookingContextUpdater } from '../../services/booking-context.service';

const FormBillingAddress = ()=>{
  const data = useBookingContext()
  const SetDate = useBookingContextUpdater()
  const addressLine1 = useRef(null)
  const addressLine2 = useRef(null)
  const city = useRef(null)
  const state = useRef(null)
  const country = useRef(null)
  const onChange = ()=>{
    data.billing.addressLine1 = addressLine1.current.value
    data.billing.addressLine2 = addressLine2.current.value
    data.billing.city = city.current.value
    data.billing.state = state.current.value
    data.billing.country = country.current.value
    SetDate({...data})
  }
  return <div className='row'>
  <div className='col-12'>
    <h3 className='text-center'>Billing Address</h3>
    <hr/>
  </div>
  <div className='col-md-4'>
    <div className='form-group'>
      <label>Address Line 1</label>
      <input ref={addressLine1} onChange={onChange} type="text" className='form-control'/>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='form-group'>
      <label>Address Line 2</label>
      <input ref={addressLine2} onChange={onChange} type="text" className='form-control'/>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='form-group'>
      <label>City</label>
      <input ref={city} onChange={onChange} type="text" className='form-control'/>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='form-group'>
      <label>State</label>
      <input ref={state} onChange={onChange} type="text" className='form-control'/>
    </div>
  </div>
  <div className='col-md-4'>
    <div className='form-group'>
      <label>Country</label>
      <input ref={country} onChange={onChange} type="text" className='form-control'/>
    </div>
  </div>
</div>
}

export default FormBillingAddress