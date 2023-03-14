import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='foot'>
      <div className="footer">
        <div className="learn">
          <h3>LEARN</h3>
          <a href="">Docs</a>
          <a href="">Guides</a>
          <a href="">Blog</a>
          <a href="">Api</a>
        </div>

        <div className="learn">
        <h3>ECOSYSTEM</h3>
        <a href="">Releases</a>
          <a href="">Discussion</a>
          <a href="">Developer tool</a>
          <a href="">Examples repository</a>
        </div>

        <div className="learn">
        <h3>SUPPORT</h3>
        <a href="">Github</a>
          <a href="">Discord</a>
          <a href="">Twitter</a>
        </div>

        <div className="learn">
          <div className="learn_row">
            
         
          <h3>CONTACT US</h3>
          <h5>Want to learn more about moonrepo? Have questions?</h5>
          <select placeholder='enter your email'>
        <option value="By the way">BTW</option>
        <option value="Talk to you later">TTYL</option>
        <option value="To be honest">TBH</option>
        <option value=" I don’t know">IDK</option>
    </select>
    <button>Next</button>
    </div>
        </div>
      </div>
<div className="cocat">

      
      <h6>Copyrights <i class="fas fa-copyright"></i>  2023, moonrepo, Inc</h6>

      <ul className="social">
        <li><i class="fab fa-github"></i></li>
        <li> <i class="fab fa-discord"></i></li>
        <li> <i class="fab fa-twitter"></i></li>
      </ul>
      </div>
      </div>
  )
}

export default Footer
