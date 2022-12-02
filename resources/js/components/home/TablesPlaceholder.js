import React, { useRef, useState } from 'react';
import { useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TablesPlaceholder = ()=>{
  return [...Array(3)].map((item,index)=>(<div key={index} className='row mb-3'>
    <div className='col-4'><img className="skeleton img" alt="" /></div>
    <div className='col-8'>
      <div className='skeleton text'></div>
      <div className='skeleton text'></div>
      <div className='skeleton text end'></div>
    </div>
  </div>))
}

export default TablesPlaceholder