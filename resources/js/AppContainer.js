import { observer } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { pathPrefix } from './config'
import { AppStoreProvider, useAppStore } from './services/store.services'
import Home from './pages/Home'
import Dashboard from './pages/admin/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SignInForm from './components/sign-in.form';
import SignUpForm from './components/sign-up.form';
import Footer from './components/Footer'
import UsersPage from './pages/admin/users/UsersPage'
import NewUserPage from './pages/admin/users/NewUserPage'
import EditUserPage from './pages/admin/users/EditUserPage'

const AppRouter = observer(()=>{
    const store = useAppStore()
    return <Router>
        <Sidebar/>
        {!store.isLoggedIn() && <SignInForm/>}
        {!store.isLoggedIn() && <SignUpForm/>}
        <div className={store.settings.dark_mode?"d-flex flex-column dark-mode":"d-flex flex-column"}>
            <div id="header" className="shadow">
                <div className="container">
                    <Header/>
                </div>
            </div>
            <Routes>
                <Route exact path={pathPrefix} element={< Home />}></Route>
                <Route exact path={pathPrefix+"dashboard"} element={< Dashboard />}></Route>
                <Route exact path={pathPrefix+"users"} element={< UsersPage />}></Route>
                <Route exact path={pathPrefix+"users/new"} element={< NewUserPage />}></Route>
                <Route exact path={pathPrefix+"users/:uid/edit"} element={< EditUserPage />}></Route>
            </Routes>
            <div className="container">
                <Footer/>
            </div>
        </div>
    </Router>
})

function AppContainer() {
    return (
        <AppStoreProvider>
            <AppRouter/>
        </AppStoreProvider>
    );
}

export default AppContainer;

function renderApp(){
    if (document.getElementById('app')) {
        ReactDOM.render(<AppContainer />, document.getElementById('app'));
    }
}
renderApp()
// For Tab data syncronization
let localStorageModified = false
window.addEventListener("storage", e =>{
    localStorageModified = true
})
window.onfocus = function() {
    if(localStorageModified){
        renderApp()
        localStorageModified = false
    }
}