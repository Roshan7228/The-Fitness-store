import React from 'react'
import Logo from '../image/logo.png';
import './style.css'
function Footer() {
  return (
    <div>
       <div className='Footer-Container'>
          <div className='Footer-details'>
            <div className='Footer-logo'>
              <img src={Logo} alt="LOgo" srcset="" />
            </div>
            <div className='footer-Discription'>
              <div className='Footer-Discription-details'>
                <h5>Our Location</h5>
                <h6>The Fitness Store</h6>
                <p>1410 Dewey St.<br></br>Manitowoc, WI 54220<br></br>
                  Phone: 920-684-8088<br></br>
                  (Email recommended)</p>
              </div>
              <div className='Footer-Discription-details'>
                <h5>Information</h5>
                <ul>
                  <li>Bicycle</li>
                  <li>Blog</li>
                  <li>Virtual Store Tour</li>
                  <li>Manitowoc, WI Video</li>
                  <li>About Us</li>
                  <li>Customer Service</li>
                  <li>Sitemap</li>
                  <li>Orders and Returns</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className='Footer-Discription-details'>
                <h5>Why Buy From Us</h5>
                <ul>
                  <li>Shipping & Returns</li>
                  <li>Secure Shopping</li>
                  <li>International Shipping</li>
                  <li>Affiliates</li>
                  <li>Group Sales</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div className='Footer-Discription-details'>
                <h5>My Account</h5>
                <ul>
                  <li>Login / Register</li>
                  <li>View Cart</li>
                  <li>Track My Order</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
            <div className='Footer-Term'>
              <p>Copyright © 2023 The Fitness Store. All Rights Reserved. Shopify Developers at WebCitz</p>
              <p>We're committed to making our products and services accessible to everyone, including people with disabilities. We are taking steps to ensure that we follow the Web Content Accessibility Guidelines (WCAG). At The Fitness Store, it is our goal to make our website accessible to all visitors. If you need an accommodation or request for auxiliary aides or services, please contact us via email at john@thefitnessstore.com. We will consider all requests. Shopify Developers at We're committed to making our products and services accessible to everyone, including people with disabilities. We are taking steps to ensure that we follow the Web Content Accessibility Guidelines (WCAG). At The Fitness Store, it is our goal to make our website accessible to all visitors. If you need an accommodation or request for auxiliary aides or services, please contact us via email at john@thefitnessstore.com. We will consider all requests. Shopify Developers at WebCitz</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
