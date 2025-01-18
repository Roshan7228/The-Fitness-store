import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import GoogleButton from 'react-google-button'
import './style.css'
import Logo from '../image/logo.png'
import { signInWithPopup, signOut } from 'firebase/auth'
import {auth,provider} from '../Firebase/FireBase'
import 'react-notifications/lib/notifications.css';

function Navbar() {

  let [loginmodal, setloginmodal] = useState(false);
  const subTotal = localStorage.getItem("SubtotalPrice");
  console.log(subTotal);
  const totalQuenty = localStorage.getItem("TotalQuentity");
  console.log(totalQuenty);



  // login with email
  function LoginWithEmail(){
    signInWithPopup(auth, provider)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err);
    })
    }


// logOut
function LogOut(){
  signOut(auth)
  .then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}


  return (
    <div>
      
      <div className='Header'>
        <div className='Main-header' style={{ position: "sticky", top: "0%" }}>
          <div className='heder-logo'>
            <NavLink style={{ textDecoration: "none" }} to='/Home'><img src={Logo} alt="Logo-image" /></NavLink>
          </div>
          <div className='heder-menu'>
            <ul className='submenu'>
              <NavLink style={{ textDecoration: "none" }} to='/Cardio'><li>CARDIO<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>home equipmenby type</li>
                  <li>home equipment by brand</li>
                  <li>Commercial equipment by type</li>
                  <li>Commercial equipment by brand</li>
                </ul>
              </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to='/GymSystem'><li>GYM SYSTEMS<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>Body Solid Collection</li>
                  <li>Inflight Fitness Collection</li>
                  <li>Paradigm Fitness Collection</li>
                  <li>BodyCreaft Fitness Collection</li>
                </ul>
              </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to='/PlateLoaded'>  <li>PLATE LOADED<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>Body Solid Collection</li>
                  <li>Paradigm Fitness Collection</li>
                </ul>
              </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to='/FreeWeight'><li>FREE WEIGHT<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>Accessories by type</li>
                  <li>ollympicplantes and set</li>
                  <li>BodyCreaft Fitness Collection</li>
                  <li>Commercial equipment by brand</li>
                  <li>Miscellaneous Accessories</li>
                  <li>Bicycle Lines Carried</li>
                </ul>
              </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to='/Accessories'><li>ACCESSORIES<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>Accessories by type</li>
                  <li>Accessories by Brand</li>
                  <li>Fitness Poster/Books</li>
                  <li>Miscellaneous Accessories</li>
                </ul>
              </li>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to='/Bicycle'> <li>BICYCLE<i className="ri-arrow-down-s-line"></i>
                <ul className='DropDown-list'>
                  <li>Bicycle Lines Carried</li>
                  <li>Classic High Wheelers</li>
                </ul>
              </li>
              </NavLink>
            </ul>
          </div>
          <div className='heder-login'>
            <div className='Login'>
              <p onClick={() => { setloginmodal(!loginmodal) }}>Login / Register</p>
            </div>
            <div className='Searchbar'>
              <input type="text" name="" id="Sear" placeholder='Search...' />
              <i className="ri-search-line"></i>
            </div>
            <div className='Add-to-card'>
              <Link to='/Card' style={{ textDecoration: "none" }}>
                <i className="ri-shopping-cart-2-line"><span>{totalQuenty}</span></i>
              </Link>
            </div>
            <div className='Price'>
              <span>{`$${subTotal}.00`}</span>
            </div>
          </div>
        </div>
      </div>
      {/* slider Login */}
      <div className={`modalOverLay ${loginmodal ? 'ShowModal' : ""}`}></div>
      <div className={`Login-form-slide ${loginmodal ? 'show-modal' : ''}`}>
        <div className='Form-Heading'>
          <h1>SIGN IN</h1>
          <div className='Clossing'>
            <p>CLOSE <span><i className="ri-close-line" onClick={() => { setloginmodal(false) }}></i></span></p>
          </div>
        </div>
        <div className='login-Form'>
          <form action="">
            <label htmlFor="usernameside">Email address<span>*</span></label>
            <input type="email" id='usernamesidePass' />
            <label htmlFor="usernameside">Password<span>*</span></label>
            <input type="Password" id='usernamesidepass' />

            <div className='Lost-Password'>
              <p><i className="ri-rotate-lock-fill"></i>Lost your Password?</p>
            </div>
            <GoogleButton style={{ width: "97%", marginTop: "20px", textAlign: "center", marginLeft: "10px", backgroundColor: "transparent" }}
              onClick={() => {LoginWithEmail()}}
            />
             <button onClick={()=>{LogOut()}}>LOG OUT</button>
          </form>
        </div>

        <div className='register-question'>
          <div className='Create-accounte-text'>
            <i className="ri-user-3-line"></i>
            <span>No account yet?</span>
            <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
          </div>
          <div className='Create-Account'>
            <a href="#">Create An Account</a>
          </div>
        </div>

        {/*  */}


      </div>

      {/*  */}
   
    </div>
  )
}

export default Navbar;
