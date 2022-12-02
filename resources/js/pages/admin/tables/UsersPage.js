import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams} from "react-router-dom";
import { pathPrefix } from '../../../config';
import AuthGuard from '../../../guards/AuthGuard';
import { useAppStore } from '../../../services/store.services';

const UsersPage = () =>{
  const store = useAppStore()
  const [items,SetItems] = useState([])
  const [page,SetPage] = useState(1)
  const [total,SetTotal] = useState(null)
  const pages = useRef(1)
  const userRoles = useRef([])
  const [loading,SetLoading] = useState(false)
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

    fetch(pathPrefix+"api/admin/users/?page="+page,requestOptions).then((res)=>(res.json()))
    .then((res)=>{
      // console.log(res)
      pages.current = res.users
      userRoles.current = res.roles
      SetItems(res.users.data)
    })
    .catch((err)=>console.log(err))
    .finally(()=>SetLoading(false))
  }
  useEffect(()=>{
    fetchData()
  },[page])
  return <AuthGuard>
    <div id="body" className="container">
      <div id="dashboard" className='row pt-3 pb-5 body-container'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-md-4 col-6'>
              <h3>Users <Link to={pathPrefix+"users/new"} className="btn btn-sm btn-primary btn-outline">New</Link></h3>
            </div>
            <div className='col-md-4 d-none d-md-block'>
              <input className='form-control' placeholder='Search User'/>
            </div>
            <div className='col-md-4 col-6 pt-2'>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to={pathPrefix}>Home</Link></li>
                  <li className="breadcrumb-item"><Link to={pathPrefix+"dashboard"}>Dashboard</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Users</li>
                </ol>
              </nav>
            </div>
            <div className='col-12 d-block d-md-none'>
              <input className='form-control mb-3' placeholder='Search User m'/>
            </div>
          </div>
          {loading && <div className="d-flex justify-content-center">
            <div className="spinner-border spinner-lg m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
          {!loading && <div className='row'>
            <div className='col-md-12 table-responsive'>
              <table className='table table-stripe'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item,index)=>{
                    const roles = userRoles.current[index]
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{roles && roles.map((role,roleIndex)=>{
                        const colors = ["",'danger','primary','success']
                        return <span key={roleIndex} className={'badge bg-'+colors[role.id]}>{role.display_name}</span>
                      })}</td>
                      <td>
                        <Link to={pathPrefix+"users/"+item.id+"/edit"} className="btn btn-sm btn-success">Edit</Link>
                        {/* <button className="btn btn-sm btn-danger">Delete</button> */}
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>}
          {!loading && <div className='row'>
            <div className='col-md-12 d-flex justify-content-center'>
              <ul className='pagination'>
                  {pages.current.last_page > 1 &&[...Array(pages.current.last_page).keys()].map((item,index)=>{
                    const current = ((item+1) == pages.current.current_page)
                    return <li key={index} onClick={(e)=>{
                      e.preventDefault()
                      !current && SetPage(item+1)
                    }} 
                      className={current?'page-item active':'page-item'}>
                      <a href='#' className="page-link">{item+1}</a>
                    </li>
                  })}
              </ul>
            </div>
          </div>}
        </div>
      </div>
    </div>
  </AuthGuard>
};
export default UsersPage