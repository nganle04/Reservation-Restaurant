import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react';
import { useAppStore } from '../services/store.services';
import axios from 'axios';
import L9n from '../localaization';
import { serverUrl } from '../config';


const SignUpForm = observer(() =>{
    const store = useAppStore()
    const [name,SetName] = useState("")
    const [email,SetEmail] = useState('')
    const [passward,SetPassword] = useState('')
    const [confirmPassward,SetConfirmPassword] = useState('')
    const [signUpError,SetSignUpError] = useState("")
    const [nameError,SetNameError] = useState("")
    const [emailError,SetEmailError] = useState('')
    const [passwardError,SetPasswordError] = useState('')
    const [confirmPasswardError,SetConfirmPasswordError] = useState('')
    const [signUpButtonLoading,SetSignUpButtonLoading] = useState(false)
    const [otpChecking,SetOtpChecking] = useState(false)
    const [token,SetToken] = useState('')
    const [otp,SetOtp] = useState('')
    const [otpError,SetOtpError] = useState('')
    const onOtpChange = (e) => {
        SetOtp(e.target.value)
        if(e.target.value){
            SetOtpError("")
        }else{
            SetOtpError("Please, enter the otp sent to your email")
        }
    }
    const onNameChange = (e) => {
        e.preventDefault()
        if(e.target.value){
            SetNameError("")
        }else{
            SetNameError("Please, give your Full Name")
        }
        SetName(e.target.value)
    }
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
            SetPasswordError("Please, give a Password for your account")
        }
    }
    const onConfirmPasswordChange = (e) => {
        e.preventDefault()
        SetConfirmPassword(e.target.value)
        if(e.target.value){
            if(passward != e.target.value){
                SetConfirmPasswordError("Password Don't Match")
            }else{
                SetConfirmPasswordError("")
            }
        }else{
            SetConfirmPasswordError("Please, confirm your Password")
        }
    }
    const onUserDataSubmit = () => {
        if(isUserDataFormValid()){
            SetSignUpButtonLoading(true)
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('password', passward);
            data.append('confirmPassword', confirmPassward);
            axios.post(serverUrl+'api/register',data,{headers:{
                'Content-Type':'multipart/form-data'
            }})
            .then(function (response) {
                if(response.data.token){
                    SetToken(response.data.token)
                }
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.data.message) {
                        if (error.response.data.message.ot) {
                            SetNameError(error.response.data.message.name.join(' '))
                        }
                        if (error.response.data.message.email) {
                            SetEmailError(error.response.data.message.email.join(' '))
                        }
                        if (error.response.data.message.passward) {
                            SetPasswordError(error.response.data.message.passward.join(' '))
                        }
                        if (error.response.data.message.confirmPassward) {
                            SetConfirmPasswordError(error.response.data.message.confirmPassward.join(' '))
                        }
                    }
                }else{
                    console.log(error);
                }
            }).finally(()=>{
                SetSignUpButtonLoading(false)
            })
        }
    }
    const onOtpSubmit = () => {
        if(token && otp){
            SetOtpChecking(true)
            let data = new FormData();
            data.append('token', token);
            data.append('otp', otp);
            axios.post(serverUrl+'api/reg-verify',data,{headers:{
                'Content-Type':'multipart/form-data'
            }}).then(function (response) {
                SetToken("")
                SetName("")
                SetEmail("")
                SetPassword("")
                SetConfirmPassword("")
                SetOtp("")
                SetOtpChecking(false)
                SetToken("")
                store.setUser(response.data)
                document.querySelector('#signUpModal .btn-close').click()
                document.querySelector('#signInModal .btn-close').click()
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.data.message) {
                        SetOtpError(error.response.data.message)
                    }
                }
            }).finally(()=>{
                SetOtpChecking(false)
            })
        }
    }
    const isUserDataFormValid = () => {
        return (name && email && passward && confirmPassward && passward.length > 5 && passward==confirmPassward && !signUpButtonLoading)
    }

    const UserDataForm = () => <div className={"modal-body"+(store.settings.dark_mode ? " bg-dark":"")}>
        <div className="mb-3">
            <label className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Full Name",store.settings.language)}</label>
            <input type="text" className="form-control" placeholder="Enter Full Name" value={name} onChange={onNameChange}/>
            {!!nameError && <p className='text-danger mt-1'>{nameError}</p>}
        </div>
        <div className="mb-3">
            <label className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Email Address",store.settings.language)}</label>
            <input type="email" className="form-control" placeholder={L9n.translate("Enter Email Address",store.settings.language)} value={email} onChange={onEmailChange}/>
            {!!emailError && <p className='text-danger mt-1'>{emailError}</p>}
        </div>
        <div className="mb-3">
            <label className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Password",store.settings.language)}</label>
            <input type="password" className="form-control" placeholder={L9n.translate("Enter Password",store.settings.language)} value={passward} onChange={onPasswordChange}/>
            {!!passwardError && <p className='text-danger mt-1'>{passwardError}</p>}
        </div>
        <div className="mb-3">
            <label className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("Confirm Password",store.settings.language)}</label>
            <input type="password" className="form-control" placeholder={L9n.translate("Confirm Password",store.settings.language)} value={confirmPassward} onChange={onConfirmPasswordChange}/>
            {!!confirmPasswardError && <p className='text-danger mt-1'>{confirmPasswardError}</p>}
        </div>
        {signUpButtonLoading && <div className="text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        {isUserDataFormValid() && <div className="mb-3 d-grid d-block">
            <button type="button" onClick={onUserDataSubmit} className="btn btn-primary">Next <FontAwesomeIcon icon={faAngleDoubleRight}/></button>
            {!!signUpError && <p className='text-danger mt-1'>{signUpError}</p>}
        </div>}
    </div>



    const OtpForm = () => <div className={"modal-body"+(store.settings.dark_mode ? " bg-dark":"")}>
        <table className={'table table-striped'+(store.settings.dark_mode?" table-dark":"")}>
            <tbody>
                <tr>
                    <th>{L9n.translate("Full Name",store.settings.language)}</th>
                    <th>{name}</th>
                </tr>
                <tr>
                    <th>{L9n.translate("Email Address",store.settings.language)}</th>
                    <th>{email}</th>
                </tr>
            </tbody>
        </table>
        <div className="mb-3">
            <label htmlFor="emailAddressInput" className={"form-label"+(store.settings.dark_mode ? "":" text-black")}>{L9n.translate("OTP Code Sent To This Email",store.settings.language)}</label>
            <input type="text" className="form-control" id="emailAddressInput" placeholder={L9n.translate("Enter OTP Code",store.settings.language)} value={otp} onChange={onOtpChange}/>
            {!!otpError && <p className='text-danger mt-1'>{otpError}</p>}
        </div>
        {otpChecking &&  <div className="text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        {token && otp && !otpChecking && <div className="mb-3 d-grid d-block">
            <button type="button" onClick={onOtpSubmit} className="btn btn-primary">Submit OTP</button>
            {!!signUpError && <p className='text-danger mt-1'>{signUpError}</p>}
        </div>}
    </div>


    return <div className="modal fade" id="signUpModal" aria-labelledby="signInModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className={"modal-header"+(store.settings.dark_mode ? " bg-gradient bg-dark-400 border-0":"")}>
                <h5 className={"modal-title"+(store.settings.dark_mode ? " text-white":" text-success")} id="signInModalLabel">Sign Up</h5>
                <button type="button" className={"btn-close"+(store.settings.dark_mode ? " text-white":"")} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {token ? OtpForm(): UserDataForm()}
            <div className={"modal-footer justify-content-center"+(store.settings.dark_mode ? " bg-dark-400 border-0":"")}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#signInModal">Sign In</button>
            </div>
            </div>
        </div>
    </div>
})

export default SignUpForm;
