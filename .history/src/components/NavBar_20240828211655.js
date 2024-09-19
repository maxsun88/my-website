import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <body>
      <div class="header header-fixed unselectable header-animated">
         <div class="header-brand">
            <div class="nav-item no-hover">
               <h6 class="title">My App</h6>
            </div>
            <div class="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
         </div>
         <div class="header-nav" id="header-menu" role="button">
            <div class="nav-left">
               <div class="nav-item text-center"> <a href="#"> <span class="icon"> <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i> </span> </a> </div>
            </div>
            <div class="nav-right">
               <div class="nav-item has-sub toggle-hover" id="dropdown">
                  <a class="nav-dropdown-link">Menu</a> 
                  <ul class="dropdown-menu dropdown-animated" role="menu">
                     <li role="menuitem"><a href="#">First Item</a></li>
                     <li role="menuitem"><a href="#">Second Item</a></li>
                     <li role="menuitem"><a href="#">Third Item</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <section class="section">
         <div class="hero fullscreen">
            <div class="hero-body">
               <div class="content">
                  <div class="text-center">
                     <h1>👋 Hello world!</h1>
                     <h6 class="font-alt font-light">A webpage powered by <b>Cirrus.</b></h6>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </body>
  )
}
