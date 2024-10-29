import React, { useEffect, useRef } from 'react'
import './aboutUs.css'
import { Link } from 'react-router-dom'

function AboutUs({ scrollToMission, scrollToVision }) {
   
  return (
      <div>
          
         <div className='logo-banner'>
             <div className='text-white'>
                 <h1 className='display-1'>Empowering <br></br>Innovation</h1>
                  <p className='mt-4 fs-4 grayText'>Discover the story behind Highbrow Technology and our commitment to excellence.</p>
                 <button className='bg-secondary rounded-5 px-4 btn text-white mt-4'><small className='fs-6'>Home</small> <i class="fa-solid fa-chevron-right"></i> <small className='fs-6 orangeFont'>about</small> </button>
             </div>
          </div>
          <div>
              
          </div>
         
      <div className='about text-white'>
      <div className='about-card'>
        <h1 className='mb-5 text-center'>Who We Are</h1>
        <div className=' d-flex gap-4 align-items-center justify-content-center'>
          <p className='grayText'>Highbrow Technology Inc. is a leading provider of innovative technology solutions and strategic staffing services. With over a decade of experience, we've established ourselves as a trusted partner for businesses seeking to navigate the complex digital landscape.
           <br/><br/>
           Our team of experts combines deep industry knowledge with cutting-edge expertise to deliver tailored solutions that drive growth, optimize operations, and create lasting value for our clients.</p>
          <img src='https://img.freepik.com/free-photo/low-angle-male-coworkers-meeting-office_23-2148339373.jpg?ga=GA1.1.132014876.1707307712&semt=ais_hybrid'></img>
        </div>
        </div>

              <Link to='/about-us' style={{textDecoration:'none',color:'white'}}>
              <div>
          <div className='mission p-3 rounded-2'>
          <div className='d-flex align-items-center gap-3'>
          <i className="orangeFont fs-1 fw-bold bi bi-bullseye"></i>
          <h3 className='m-0 orangeFont'>Our Mission</h3>
        </div>
          <p className='grayText mt-2'>To empower businesses through innovative technology solutions and strategic staffing, driving growth and success in an ever-evolving digital landscape through seamless integration of people, efficient processes, and unparalleled know-how.</p>
        </div>
    </div>
        </Link>
       
        <Link to='/about-us' style={{textDecoration:'none',color:'white'}}>
    <div>
                  <div className='mission p-3 rounded-2'>
          <div className='d-flex align-items-center gap-3'>
          <i class="bi bi-lightbulb orangeFont fs-1 "></i>
          <h3 className='orangeFont m-0 orangeFont'>Our Vision</h3>
        </div>
          <p className='grayText mt-2'>To be a globally respected technology organization that provides the power of unparalleled solutions and consulting, with an aim to create jobs worldwide, foster visionary leaders, and establish a centre of excellence in the pursuit of technological advancement and workforce empowerment.</p>
        </div>
                  </div>
                  </Link>

        <div className='impact'>
          <h1 className='text-center'>Our Impact</h1>
          <div className='d-flex flex-wrap gap-4 align-items-center justify-content-between my-5'>
            <div className='d-flex align-items-center justify-content-center flex-column'>
              <i class="orangeFont fs-1 bi bi-people"></i>
              <h3 className='fw-bold'>40+</h3>
              <p className='grayText'>Happy clients</p>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <i class="orangeFont fs-1 bi bi-box-seam"></i>
              <h3 className='fw-bold'>40+</h3>
              <p className='grayText'>Happy clients</p>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <i class="orangeFont fs-1 bi bi-globe"></i>
              <h3 className='fw-bold'>4+</h3>
              <p className='grayText'>Countries Served </p>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <i class="orangeFont fs-1 bi bi-gift"></i>
              <h3 className='fw-bold'>13+</h3>
              <p className='grayText'>Years of excellence</p>
            </div>

          </div>
        </div>
        
        <div>
           <div className='coreValues'>
          <div className='d-flex gap-5 justify-content-center mb-5'>
            <i className="fs-1 orangeFont fw-bold bi bi-heart"></i>
            <h1 className='orangeFont'>Our Core Values</h1>

          </div>
          <div className='d-flex coreValues-card flex-wrap mt-4 gap-4'>
            <div>
              <p className='fs-5 orangeFont mb-3'>Turning Promises into Results</p>
              <p className='fs-6 grayText'>We are committed to delivering on our promises, ensuring that every project leads to tangible results for our clients.</p>
            </div>
            <div>
              <p className='orangeFont mb-3'>Ensuring Customer Delight</p>
              <p className='grayText'>Our ultimate goal is not just satisfaction, but to delight our customers with exceptional service and solutions.</p>
            </div>
            <div>
              <p className='orangeFont mb-3'>Ethical & Transparent</p>
              <p className='grayText'>We uphold the highest standards of ethics and transparency in all our business dealings and relationships.</p>
            </div>
            <div>
              <p className='orangeFont mb-3'>Innovation & Creativity</p>
              <p className='grayText'>We foster a culture of innovation, constantly seeking creative solutions to complex challenges.</p>
            </div>
            <div>
              <p className='orangeFont mb-3'>Strive for Excellence</p>
              <p className='grayText'>In all our pursuits, we aim for excellence, setting high standards and continuously improving our skills and services.</p>
            </div>
            <div>
              <p className='orangeFont mb-3'>Trust, Value, and Service</p>
              <p className='grayText'>We believe in building trust, delivering value, and providing outstanding service to our clients and partners.</p>
            </div>
          </div>
        </div>
    </div>
        

        <div className='nextStep text-white'>
            <h1 className='text-center fw-bold mb-3'>Ready To Transform Your Business</h1>
            <p className='text-center grayText mx-5'>Discover how our innovative solutions and expert team can help you navigate the digital landscape and achieve your business goals..</p>
            <div className='d-flex justify-content-center'>
            <button className='px-3 text-center mt-3 btn darkBtn text-white'>Get In Touch</button>
            </div>
           
        </div>

      </div>
      
     
        
        
      
    </div>
  )
}

export default AboutUs