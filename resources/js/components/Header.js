import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered,faHome,faLanguage,faMoon,faSearch, faSun, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useAppStore } from '../services/store.services';
import L9n from '../localaization';
import axios from 'axios';
import { pathPrefix, serverUrl } from '../config';


const Header = observer(() =>{
    const store = useAppStore()
    const getAccountNavItem = () => {
        if(store.isLoggedIn()){
            return <li className="nav-item">
            <div className="dropdown">
                <a className="nav-link dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon className='pe-2' icon={faUserLock} size="sm" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><Link className='dropdown-item' to={pathPrefix+"dashboard"}>Dashboard</Link></li>
                    <li><button className="dropdown-item" type="button">Profile</button></li>
                    <li><button className="dropdown-item" type="button">Favorites</button></li>
                    <li><button className="dropdown-item" onClick={logoutAction} type="button">Logout</button></li>
                </ul>
            </div>
            </li>
        }else{
            return <li className="nav-item">
                <a className='nav-link c-p' data-bs-toggle="modal" data-bs-target="#signInModal">{L9n.translate("Sign In",store.settings.language)}</a>
            </li>
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
    const placeholderText = L9n.translate("Search by Country, Team or League",store.settings.language)
    return (
        <div className="row py-md-2 py-lg-0">
            <div className='col-lg-5 col-md-6 vertical-center d-sm-flex d-md-flex justify-sm-content-between branding'>
                <FontAwesomeIcon onClick={()=>{store.settings.toggleSidebar()}} icon={faBarsStaggered}/>
                <Link className='logo-text' to={pathPrefix}>Book My Table</Link>
                <Link className='d-sm-none search-icon' to={pathPrefix+"dashboard"}><FontAwesomeIcon icon={faHome} size="lg"/></Link>
            </div>
            <div className='col-lg-7 col-md-6 vertical-center d-none d-sm-flex justify-content-end'>
                {/* <div className='search-bar me-lg-2 md-md-0 d-flex vertical-center'>
                    <input type='text' autoComplete='off' readOnly onFocus={(e)=>{
                        if(e.target.value == placeholderText){
                            e.target.value = ""
                        }
                    }} onBlur={(e)=>{
                        if(e.target.value == ""){
                            e.target.value = placeholderText
                        }
                    }} value={placeholderText}/>
                    <FontAwesomeIcon icon={faSearch} className="c-p" size="lg"/>
                </div> */}
                <div className='d-none d-lg-block'>
                    <nav className='navbar navbar-expand-lg navbar-light justify-content-end'>
                        <ul className="navbar-nav">
                            {getAccountNavItem()}
                            {/* <li className="nav-item">
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FontAwesomeIcon className='pe-2' icon={faLanguage} size="sm" />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        {L9n.languages().map((lang,index)=>{
                                            return <li key={index}><button className={"dropdown-item"+(lang==store.settings.language ? " active":"")} onClick={(evt)=>{
                                                store.settings.setLanguage(evt.target.innerHTML)
                                            }} type="button">{lang}</button></li>
                                        })}
                                    </ul>
                                </div>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className='nav-link c-p' onClick={()=>{store.settings.toggleDarkMode()}}><FontAwesomeIcon className={'rounded-circle border border-2'+(store.settings.dark_mode?" bg-dark":'')} icon={store.settings.dark_mode ? faMoon : faSun} border /></a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
})

export default Header;
