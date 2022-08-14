import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Footer_section() {
  return (
   <Fragment>
<div class="footer-container">
    <footer class="py-5 footer-bg">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <a class="d-flex align-items-center  me-auto justify-content-center"
                href="http://127.0.0.1:5500/index.html">
                <img src="/img/logo.png" width="150px"/>
            </a>
        </div>
  
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 footer-p">
            <p class="p">We represent the best restaurants all over the world.  We partner with local businesses that believe like us in providing the best customer service ever!</p>
        </div>
  
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-3 offset-1">
          <form>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button type="button nav-btn" class="btn2 btn-danger">Book A Table</button>
            </div>
          </form>
        </div>
    </div>
  
      <div class="d-flex justify-content-between py-4 my-4 border-top container">
        <p>&copy; 2021 Cook Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-white" href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="ms-3"><a class="link-white" href="#"><i class="fab fa-instagram-square"></i></a></li>
          <li class="ms-3"><a class="link-white" href="#"><i class="fab fa-facebook-square"></i></a></li>
        </ul>
      </div>
    </footer>
  </div>
   </Fragment>
  )
}
