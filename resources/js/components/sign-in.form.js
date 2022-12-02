import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer } from 'mobx-react';
import { useAppStore } from '../services/store.services';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import L9n from '../localaization';
import { serverUrl } from '../config';
import axios from 'axios';


const SignInForm = observer(() =>{
    const store = useAppStore()
    const [email,SetEmail] = useState('')
    const [passward,SetPassword] = useState('')
    const [emailError,SetEmailError] = useState('')
    const [passwardError,SetPasswordError] = useState('')
    const [buttonLoading,SetButtonLoading] = useState(false)
    const onEmailChange = (e) => {
        e.preventDefault()
        SetEmail(e.target.value)
        if(e.target.value){
            SetEmailError("")
        }else{
            SetEmailError("Please, give your Email")
        }
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        SetPassword(e.target.value)
        if(e.target.value){
            if(e.target.value.length > 5){
                SetPasswordError("")
            }else{
                SetPasswordError("Password should be at least 6 character long")
            }
        }else{
            SetPasswordError("Please, give Password for your account")
        }
    }
    const isFormValid = () => {
        return (email && passward && passward.length > 5 && !buttonLoading)
    }
    const onSubmit = () => {
        if(isFormValid()){
            SetButtonLoading(true)
            let data = new FormData();
            data.append('email', email);
            data.append('password', passward);
            axios.post(serverUrl+'api/login',data,{headers:{'Content-Type':'multipart/form-data'}})
            .then((response) => {
                // console.log("User Data",response.data)
                SetEmail("")
                SetPassword("")
                document.querySelector('#signInModal .btn-close').click()
                store.setUser(response.data.currentUser)
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.data.message) {
                        if (error.response.data.message.email) {
                            SetEmailError(error.response.data.message.email.join(' '))
                        }
                        if (error.response.data.message.passward) {
                            SetPasswordError(error.response.data.message.passward.join(' '))
                        }
                        if (typeof error.response.data.message == 'string') {
                            SetPasswordError(error.response.data.message)
                        }
                    }
                }else{
                    console.error("error response",error);
                }
            }).finally(()=>{
                SetButtonLoading(false)
            })
        }
    }
    return <div className="modal fade" id="signInModal" aria-labelledby="signInModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className={"modal-header"+(store.settings.dark_mode ? " bg-gradient bg-dark-400 border-0":"")}>
                <h5 className={"modal-title"+(store.settings.dark_mode ? " text-white":" text-success")} id="signInModalLabel">{L9n.translate("Sign In",store.settings.language)}</h5>
                <button type="button" className={"btn-close"+(store.settings.dark_mode ? " text-white":"")} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={"modal-body"+(store.settings.dark_mode ? " bg-dark":"")}>
                <div className="mb-3">
                    <label htmlFor="emailAddressInput" className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Email Address",store.settings.language)}</label>
                    <input type="email" className="form-control" id="emailAddressInput" placeholder="Enter Email Address" value={email} onChange={onEmailChange}/>
                    {!!emailError && <p className='text-danger mt-1'>{emailError}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Password",store.settings.language)}</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Enter Passward" value={passward} onChange={onPasswordChange}/>
                    {!!passwardError && <p className='text-danger mt-1'>{passwardError}</p>}
                </div>
                {buttonLoading && <div className="text-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                {isFormValid() && <div className="mb-3 d-grid d-block">
                    <button type="button" onClick={onSubmit} className="btn btn-success">{L9n.translate("Sign In",store.settings.language)}</button>
                </div>}
            </div>
            <div className={"modal-footer justify-content-center"+(store.settings.dark_mode ? " bg-dark-400 border-0":"")}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{L9n.translate("Close",store.settings.language)}</button>
                {/* <button type="button" title='Sign In With Facebook' className="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /></button>
                <button type="button" title='Sign In With Google' className="btn btn-danger"><FontAwesomeIcon icon={faGoogle} /></button> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">{L9n.translate("Sign Up",store.settings.language)}</button>
            </div>
            </div>
        </div>
</div>
})

export default SignInForm;
