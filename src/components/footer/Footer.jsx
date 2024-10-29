import React from 'react'
import './footer.css'
function Footer() {
  return (
      <div>
          <div className='footer'>
          <div className='email text-white'>
                  <h3>Join Our Weekly Newsletter</h3>
                  <div className='d-flex gap-2 my-4'>
                      <input type='email' className='w-100' placeholder='enter Email Address' />
                      <button className='btn darkBtn text-white'>Subscribe</button>
                  </div>
              </div>

              <hr className='grayText bg-secondary'></hr>

              <footer className='d-flex flex-wrap gap-4'>
                  <div style={{maxWidth:'40%'}}>
                      <p className='grayText'>Empowering businesses with cutting-edge technology solutions.</p>
                  </div>
                  <div>
                      <p className='text-white'>Quick Links</p>
                      <p className='grayText'>About us</p>
                      <p className='grayText'>Career</p>
                      <p className='grayText'>Privacy policy</p>
                  </div>
                  <div>
                      <p className='grayText'>Services</p>
                      <p className='grayText'>Contact Us</p>
                      <p className='grayText'>Terms of Service</p>
                  </div>
                  <div>
                      <p className='text-white'>Connect with us</p>
                      <div className='d-flex gap-2'>
                      <i className="orangeColor bi bi-geo-alt"></i>
                          <small className='grayText'>140 Towerview Ct #107, Cary, NC 27513, United States</small>
                      </div>
                      <div className='d-flex gap-2'>
                      <i className="orangeColor bi bi-telephone"></i>
                          <p className='grayText'>+91-7890808634</p>
                      </div>
                      <div className='d-flex gap-2'>
                          <i className="orangeColor bi bi-envelope"></i>
                          <p className='grayText' >hr@highbrowtechnology.com</p>
                      </div>
                  </div>
              </footer>
              <hr className='grayText'></hr>
              <p className='grayText text-center mt-5'>© 2024 Highbrow Technology Inc. All rights reserved.</p>

         </div>
    </div>
  )
}

export default Footer