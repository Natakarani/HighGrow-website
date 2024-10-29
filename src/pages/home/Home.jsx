import React from 'react'
import './home.css'
function Home() {
  return (
      <div>
          <div className='home-hero'>
              <div className='text-white mb-4'>
                  <h1 className='display-3 fw-bold'>Empowering Businesses with <span className='orangeFont'> Innovative Technology</span></h1>
                  <p className='fs-4 mt-2'>Highbrow Technology Inc. delivers cutting-edge solutions to drive
                      your business forward in the digital age.</p>
                  <div>
                      <button className='orangeText btn text-white'>Export our services</button>
                  </div>
              </div>
          </div>

          <div className='home-margin'>
              <div className='d-flex gap-4'>
              <div className='text-white mt-5'>
                  <h3>About Highbrow Technology</h3>
                      <p className='my-3 grayClr'> At Highbrow Technology, we're more than just a technology company.
                          We're your partners in innovation, dedicated to transforming your
                          business through cutting-edge solutions and expert consultation.</p>
                      <button className='orangeText text-white btn' style={{maxWidth:'fitContent'}}>
                      Learn more about us
                          </button>
                 
                      
              </div>
              <img className='w-50' src='https://img.freepik.com/free-photo/young-beautiful-girl-black-t-shirt-pointing-fingers-side-white-wall_176420-6264.jpg?ga=GA1.1.132014876.1707307712&semt=ais_hybrid'></img>
              </div>
              
              <div className='services text-white'>
                  <h1 className=' text-white text-center'>Our services</h1>
                  <div className='mt-5 d-flex flex-wrap gap-4'>
                      <div>
                      <i class="fs-2 mb-3 fa-solid fa-chart-line"></i>
                          <h4>Consulting Services</h4>
                          <p className='grayClr'>Expert advice to drive your business forward. We offer strategic
                              insights and practical solutions to optimize your operations
                              and achieve your goals.</p>
                              <button className='orangeText text-white btn'>Learn more</button>                         
                      </div>
                      <div>
                      <i class="fs-2 mb-3 fa-regular fa-user"></i>
                          <h4>Staffing Solutions</h4>
                          <p className='grayClr'>Connect with top talent to build your dream team. Our staffing services ensure you have the right people with the right skills at the right time.</p>
                          <button className='orangeText text-white btn'>Learn more</button>                         
                         
                      </div>
                      <div>
                      <i class="fs-2 mb-3 fa-solid fa-gear"></i>
                          <h4>Technology Services</h4>
                          <p className='grayClr'>Cutting-edge tech solutions for modern challenges. From AI and machine learning to cloud migration and custom software development, we've got you covered.</p>
                          <button className='orangeText text-white btn'>Learn more</button>                         
                         
                      </div>
                  </div>
              </div>

              <div className='impact text-white'>
                  <h2 className='text-white fw-bold text-center mb-5'>Our Impact</h2>
                  <div className='d-flex flex-wrap gap-3'>
                      <div>
                      <i class="fs-2 mb-2 fa-solid fa-gift"></i>
                          <h3>13+</h3>
                          <small>years in experience</small>
                      </div>
                      <div>
                      <i class="fs-2 mb-2 fa-solid fa-globe"></i>
                          <h3>40+</h3>
                          <small>Happy clients</small>
                      </div>
                      <div>
                      <i class="fs-2 mb-2 fa-solid fa-tower-broadcast"></i>
                    
                          <h3>100+</h3>
                          <small>projects completed</small>
                      </div>
                      <div>
                      <i class="fs-2 mb-2 fa-regular fa-user"></i>
                          <h3>300+</h3>
                          <small>Expert professional </small>
                      </div>
                  </div>
              </div>

             

              <div className='ready text-white'>
                  <h3 className='text-center'>Ready to Transform Your Business?</h3>
                  <p className='grayClr my-2'>Discover how our innovative solutions and expert team can help you navigate the digital
                      landscape and achieve your business goals.</p>
                  <div className='d-flex align-items-center justify-content-center mt-3'>
                  <button className='btn text-white'>Get Started Today</button>

                 </div>
                      
                   
              </div>
             </div>
    </div>
  )
}

export default Home