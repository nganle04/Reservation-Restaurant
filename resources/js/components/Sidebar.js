import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage,faMoon, faSun, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { nav } from 'bootstrap';
import { observer } from 'mobx-react';
import { useAppStore } from '../services/store.services';
import L9n from '../localaization';
import axios from 'axios';
import { serverUrl } from '../config';



const Sidebar = observer(() =>{
    const store = useAppStore()
    let letSidebarClose = true
    const toggleSidebar = ()=>{
        if(letSidebarClose){
            store.settings.toggleSidebar()
        }else{
            letSidebarClose = true
        }
    }
    const logoutAction = () => {
        axios.get(serverUrl+'api/logout',{headers:{ 
            'Authorization': 'Bearer '+store.currentUser.token, 
            'Accept': 'application/json'
          }})
        .then(function (response) {
            store.currentUser.logout()
            // console.log("Logout Successful")
        }).catch(function (error) {
            if (error.response) {
                console.error("Logout Error",error.response)
            }
        })
    }
    const getAccountNavItem = () => {
        if(store.isLoggedIn()){
            return <li className="nav-item">
            <div className="dropdown">
                <a className="dropdown-toggle text-center" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon className='pe-2' icon={faUserLock} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button className="dropdown-item" type="button">Profile</button></li>
                    <li><button className="dropdown-item" type="button">Favorites</button></li>
                    <li><button className="dropdown-item" onClick={logoutAction} type="button">Logout</button></li>
                </ul>
            </div>
            </li>
        }else{
            return <a className='c-p text-center' data-bs-toggle="modal" data-bs-target="#signInModal"><FontAwesomeIcon className='pe-2' icon={faUserLock} /></a>
        }
    }
    return <div id="sidebar" className={store.settings.left_sidebar_open ? "sidebar-open":""} onClick={toggleSidebar}>
        <div id="sidebar-container" onClick={(event)=>{
            letSidebarClose = false
        }}>
            <div className="d-flex flex-column" style={{height:"100%"}}>
                <div>
                    <Link to="#">About</Link>
                    <Link to="#">Services</Link>
                    <Link to="#">Menu</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className='d-md-flex vertical-center d-lg-none mt-auto'>
                    <div className="dropdown">
                        <a className="dropdown-toggle text-center" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon className='pe-2' icon={faLanguage} />
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            {L9n.languages().map((lang,index)=>{
                                return <li key={index}><button className="dropdown-item" onClick={(evt)=>{
                                    store.settings.setLanguage(evt.target.innerHTML)
                                }} type="button">{lang}</button></li>
                            })}
                        </ul>
                    </div>
                    <a className='c-p text-center' onClick={()=>{store.settings.toggleDarkMode()}}><FontAwesomeIcon className={'rounded-circle border border-2'+(store.settings.dark_mode?" bg-dark":'')} icon={store.settings.dark_mode ? faMoon : faSun} border /></a>
                    {getAccountNavItem()}
                </div>
            </div>
        </div>
    </div>
})

export default Sidebar;
