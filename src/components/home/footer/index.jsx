import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div >
            <div className='footer-wrap'>
                <p className='footer-heading'>Thank You for Checking Out!</p>
                <p className='footer-desc'>Thank you for taking the time to visit my website and read my content! If you found my site helpful or informative, I would greatly appreciate it if you could give me a star on GitHub or follow me on social media to stay updated with my latest work. Your support means a lot to me and helps me to continue creating valuable content for my readers. Thank you again for your support, and I look forward to sharing more with you in the future!</p>

                <div className="social-menu">
                    <ul>
                        <li><a href="https://github.com/yasir2002" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/stfuyasir/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/yasirnawaz24/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://www.twitter.com/stfuyasir" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.snapchat.com/add/stfuyasir?share_id=vauLOCTL13E&locale=en-US" target="_blank"><i className="fab fa-snapchat"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className='dev-footer px-5 d-flex justify-content-between align-items-center mb-1'>
                <p>Created with <i className="fa-solid fa-heart text-danger"></i> by Yasir Nawaz</p>
                <Link to='/the-blog-hub/admin/login' className="btn btn-outline-dark"><i className='fa fa-lock'></i> &nbsp;Admin</Link>
            </div>

            <div className='pb-1'>

            </div>



        </div >
    )
}
