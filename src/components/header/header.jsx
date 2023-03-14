import React from 'react'
import './header.css'



const header = () => {
  return (
   <div className='nav-bar'>
        <h2>moonrepo</h2>
        <ul className='nav-list'>
        <li><a href="">Products</a></li>
        <li><a href="">Docs</a></li>
        <li><a href="">Guides</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Github</a></li>
        </ul>
        <a href="" className='signin'>Sign In</a>

       <form className='forms'>
       <input type="search" placeholder="Search..." />
       <i class="fas fa-search "></i>
       </form>
       
      
   </div>
  )
  
}

export default header
