import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams} from "react-router-dom";
import { pathPrefix } from '../../../config';
import AuthGuard from '../../../guards/AuthGuard';
import { useAppStore } from '../../../services/store.services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUserPage = () =>{
  const {uid} = useParams()
  const store = useAppStore()
  const [roles,SetRoles] = useState([])
  const [errMsg,SetErrMsg] = useState({})
  const [page,SetPage] = useState(1)
  const name = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const role = useRef(null)
  const password = useRef(null)
  const confirmPassword = useRef(null)
  const userRoles = useRef([])
  const [loading,SetLoading] = useState(false)
  const [showSaveBtn,SetShowSaveBtn] = useState(false)
  const fetchData = ()=>{
    SetLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer "+store.currentUser.token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const promises = []
    promises[0] = fetch(pathPrefix+"api/admin/roles",requestOptions).then((res)=>(res.json()))
    .then((res)=>{
      SetRoles(res)
    })
    .catch((err)=>console.log(err))

    promises[1] = fetch(pathPrefix+"api/admin/users/"+uid+"/data",requestOptions).then((res)=>(res.json()))
    .then((res)=>{
      name.current.value = res.user.name
      email.current.value = res.user.email
      phone.current.value = res.user.phone
      if(res.role && res.role.name){
        console.log(res.role.name)
        setTimeout(()=>{
          role.current.value = res.role.name
        },500)
      }
    })
    .catch((err)=>console.log(err))

    Promise.all(promises).finally(()=>SetLoading(false))
  }
  const onSave = ()=>{
    SetLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer "+store.currentUser.token);
    var formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("email", email.current.value);
    formdata.append("phone", phone.current.value);
    if(password.current.value){
      formdata.append("password", password.current.value);
      formdata.append("confirmPassword", confirmPassword.current.value);
    }
    formdata.append("role", role.current.value);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(pathPrefix+"api/admin/users/"+uid+"/update",requestOptions).then((res)=>(res.text()))
    .then((res)=>{
      if(res == "success"){
        toast.success('User Information Updated')
        password.current.value = ""
        confirmPassword.current.value = ""
        SetErrMsg({})
        SetShowSaveBtn(false)
      }else{
        throw res
      }
    })
    .catch((err)=>{
      console.log(err)
      err = JSON.parse(err)
      if(err.message){
        SetErrMsg(err.message)
      }else{
        toast.error('Something Went Wrong')
      }
      SetShowSaveBtn(false)
    })
    .finally(()=>SetLoading(false))
  }
  useEffect(()=>{
    fetchData()
  },[uid])
  const onFieldChange = ()=>{
    SetShowSaveBtn((
      name.current.value && 
      email.current.value && 
      phone.current.value && 
      role.current.value && 
      password.current.value == confirmPassword.current.value 
    ))
  }
  return <AuthGuard>
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
    <div id="body" className="container">
      <div id="dashboard" className='row pt-3 pb-5 body-container'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-5'>
              <h3>Add New User</h3>
            </div>
            <div className='col-7 pt-2'>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to={pathPrefix+"dashboard"}>Dashboard</Link></li>
                  <li className="breadcrumb-item"><Link to={pathPrefix+"users"}>Users</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">New</li>
                </ol>
              </nav>
            </div>
          </div>
          {loading && <div className="d-flex justify-content-center">
            <div className="spinner-border spinner-lg m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <label>Name</label>
              <input ref={name} onChange={onFieldChange} className='form-control' placeholder='Full Name'/>
              {errMsg.name && errMsg.name.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
            <div className='col-md-4 mb-3'>
              <label>Email</label>
              <input ref={email} onChange={onFieldChange} type='email' className='form-control' placeholder='Email'/>
              {errMsg.email && errMsg.email.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
            <div className='col-md-4 mb-3'>
              <label>Phone</label>
              <input ref={phone} onChange={onFieldChange} className='form-control' placeholder='Phone'/>
              {errMsg.phone && errMsg.phone.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <label>Role</label>
              <select ref={role} onChange={onFieldChange} className='form-control mb-3'>
                <option value=''>Select One</option>
                {roles.map((role,index)=>{
                  return <option key={index} value={role.name}>{role.display_name}</option>
                })}
              </select>
              {errMsg.role && errMsg.role.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
            <div className='col-md-4 mb-3'>
              <label>Password</label>
              <input ref={password} onChange={onFieldChange} className='form-control mb-3' placeholder='Password'/>
              {errMsg.password && errMsg.password.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
            <div className='col-md-4 mb-3'>
              <label>Confirm Password</label>
              <input ref={confirmPassword} onChange={onFieldChange} className='form-control mb-3' placeholder='Password'/>
              {errMsg.confirmPassword && errMsg.confirmPassword.map((msg)=><p className='text-danger p-0'>{msg}</p>)}
            </div>
          </div>
          <div className='row'>
            <div className='col d-grid'>
              <Link to={pathPrefix+"users"} className='btn btn-secondary'>Back</Link>
            </div>
            {showSaveBtn && <div className='col d-grid'>
              <button onClick={onSave} className='btn btn-success'>Upate Info</button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  </AuthGuard>
};
export default EditUserPage