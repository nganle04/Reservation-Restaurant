import React from 'react';
import { Link, useParams} from "react-router-dom";
import { pathPrefix } from '../../config';
import AuthGuard from '../../guards/AuthGuard';
import { useAppStore } from '../../services/store.services';

const Home = () =>{
  const store = useAppStore()
  return <AuthGuard>
    <div id="body" className="container">
      <div id="dashboard" className='row pb-5 body-container'>
        <div className='col-12'>
          <h1 className='text-center mt-3'>Admin Dashboard</h1>
          <div className='row my-5'>
            <div className='col-md-3'>
              <Link to={pathPrefix+"users"} className='items bg-info'>
                <h3>Users</h3>
              </Link>
            </div>
            <div className='col-md-3'>
              <Link to={pathPrefix+"users"} className='items bg-warning'>
                <h3>Users</h3>
              </Link>
            </div>
            <div className='col-md-3'>
              <Link to={pathPrefix+"users"} className='items bg-success'>
                <h3>Users</h3>
              </Link>
            </div>
            <div className='col-md-3'>
              <Link to={pathPrefix+"users"} className='items bg-danger'>
                <h3>Users</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthGuard>
};
export default Home