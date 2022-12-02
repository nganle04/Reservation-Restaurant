import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TablesPlaceholder from './TablesPlaceholder';
import { useBookingContext } from '../../services/booking-context.service';

const TableAllocated = ()=>{
  const bookingData = useBookingContext()
  return <div className='col-md-4 form'>
    <h1>{bookingData.cartTitle}</h1>
    {bookingData.cartLoading && <TablesPlaceholder/>}
    {bookingData.tableAllocated && bookingData.tableAllocated.length > 0 && <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Table Name</th>
          <th>Capacity</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.tableAllocated.map((item,index)=>{
          return <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.capacity}</td>
            <td className='text-end'>$ {item.min_fee}</td>
          </tr>
        })}
      </tbody>
      <tfoot>
        <tr>
          <th className='text-end' colSpan={3}>Total Reservation Fee</th>
          <th className='text-end'>$ {bookingData.totalFee}</th>
        </tr>
      </tfoot>
    </table>}
  </div>
}

export default TableAllocated