import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function Navbar() {
  return (
    <div class="showcase">
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 header">
            <a class="d-flex align-items-center justify-content-center me-auto logo"
                href="http://127.0.0.1:5500/index.html">
                <img src="/img/logo.PNG" width="150px"/>
            </a>
            <ul class="nav overlay-content justify-content-center align-items-center">
                <li class="nav-item"><a class="nav-link" href="#menu-part">Menu</a></li>
                <li class="nav-item"><a class="nav-link" href="#featured-part">Pizza Special</a></li>
                <li class="nav-item"><a class="nav-link" href="#about-part">About</a></li>
                <li class="nav-item"><i class="nav-link white fas fa-shopping-cart"></i></li>
            </ul>
           
        

            <div id="menu-btn" class="white fas fa-bars"></div>
        </header>
        
        <div class="showcase-content">
            <h1>Welcome To Cook</h1>
            <p>Best Pizza In Wilmington NC</p>
            <button type="button nav-btn" class="btn btn-danger">View Menu</button>
    </div>
</div>
</div>
  )
}
