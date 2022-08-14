import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
export default function About_section() {
  return (
    <div class="container about-us" id="about-part">
    <div class="row">
        <div class="col-auto menu-title">
            <h2>Our Story</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
          <div class="h-100 p-5 text-black ">
            <h2>Fresh taste locally,<br/><span class="about-title">Best price ever.</span></h2>
            <p class="p-t p-b">Owner and Chef, Tone Lee opened Catch Restaurant in 2006 in hopes that diners would catch his passion for North Carolina seafood. His menu features dishes that highlight seasonal flavors – from sweet potatoes, to blackberries, fresh herbs, and heirloom vegetables. Every ingredient in his delicious cuisines is consciously sourced from organic growers and local. </p>
            <button type="button nav-btn" class="btn btn-danger">View Menu</button>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="h-100 p-5 about-pic">
            <a><img src="img/about.png"/></a>
          </div>
        </div>
      </div>
</div>
  )
}
