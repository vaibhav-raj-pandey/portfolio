import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer" id="footer">
        <div className= "footer-container">
           
        <section className="social-media">
            <div className="social-media-wrap">
               
                <small className="website-rights">VRP @ 2021</small>
                <div className="social-icons">
                    
                    <Link className="social-icon-link instagram"
                        to="/connect"
                        aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                   
                    <Link
                        class='social-icon-link twitter'
                        to='/connect'
                        
                        aria-label='Twitter'
                    >
                        <i class='fab fa-twitter' />
                    </Link>
                    <Link
                        class='social-icon-link linkedin'
                        to='/connect'
                        aria-label='LinkedIn'
                        >
                        <i  class='fab fa-linkedin' />
                    </Link>
                    <Link
                        class='social-icon-link github'
                        to='/connect'
                        aria-label='Github'
                        >
                        <i class='fab fa-github' />
                    </Link>
                </div>
            </div>
        </section>
        </div>
      </div>

         )
}

export default Footer
