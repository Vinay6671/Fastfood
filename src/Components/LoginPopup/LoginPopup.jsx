import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

        const [currstate, setCurrstate] = useState("Login")

  return (
    <div className='Login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className="login-popus-input">
                {currstate==="Login"?<></>:<input type='text' placeholder='Your Name ' required/>}
                <input type='email' placeholder='Your Email ' required/>
                <input type='password' placeholder='Your Password ' required/>
            </div>
            <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-opoup-condition'>
                <input type='checkbox' required/>
                <p>By Continuing, i agree to the terms of use and privacy policy</p>
            </div>
            {currstate==="Login"
            ?<p>Create a new Account? <span onClick={()=>setCurrstate("Sign Up")}>Click Here</span></p>
            :<p>Already have account? <span onClick={()=>setCurrstate("Login")}>Login Here</span></p>
}
        </form>
    </div>
  )
}

export default LoginPopup