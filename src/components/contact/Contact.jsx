import React from 'react';
import './contact.css';
import mapImage from './maps.png';
import Button from './../../../node_modules/bootstrap/js/src/button';
import { beforeRead } from './../../../node_modules/@popperjs/core/dist/esm/enums';
function Contact() {
  return (
    <div>
      <div className='contact-banner'>
        <div className='text-white'>
          <h1 className='display-1 fw-bold'>Let's Connect <br /></h1>
          <p className='fs-5'>We're here to listen, understand your needs, and provide tailored solutions. Reach out to us and let's start a conversation about how we can support your business goals.</p>
        </div>
      </div>
      
      <div className='contact text-white'>
        <div className='d-flex flex-wrap gap-5'>
          <div className='contact-card'>
            <i className="fs-2 icon bi bi-geo-alt"></i>
            <h4>Our Office</h4>
            <p className='grayText'>140 Towerview Ct #107, Cary, NC 27513, United States</p>
          </div>
          <div className='contact-card'>
            <i className="fs-2 icon bi bi-telephone"></i>
            <h4>Phone</h4>
            <p className='grayText'>+1 919-371-8749</p>
          </div>
          <div className='contact-card'>
            <i className="fs-2 icon bi bi-envelope"></i>
            <h4>Email</h4>
            <p className='grayText'>hr@highbrowtechnology.com</p>
          </div>
        </div>

        <div className='contactForm d-flex gap-5'>
          <div>
            <h4>Send us a message</h4>
            <div className='d-flex flex-column'>
              <label className='mb-2'>Business Vector</label>
              <select>
                <option>Technology</option>
                <option>Staffing</option>
                <option>Consulting</option>
              </select>
            </div>
            <div className='d-flex flex-column'>
              <label className='my-2'>Service</label>
              <select>
                <option>Custom software development</option>
                <option>AI solutions</option>
                <option>Cloud migration</option>
              </select>
            </div>
            <div className='d-flex gap-2 flex-column'>
                          <label className='mt-2'>Name</label>
              <input type='text' placeholder='Enter full name'/>
            </div>
            <div className='gap-2 d-flex flex-column'>
              <label className='mt-2'>Email</label>
              <input type='email' placeholder='Enter email address'/>
            </div>
            <div className='gap-2 d-flex flex-column'>
              <label className='mt-2'>Phone</label>
              <input type='tel' placeholder='Enter phone number'/>
            </div>
            <div className='gap-2 d-flex flex-column'>
              <label className='mt-2'>Address</label>
              <textarea rows='3' cols='15'/>
            </div>
          </div>

          <div>
            {/* Embedding a Google Maps Static Image */}
           <a href='https://www.google.com/maps/@12.9989714,77.5504773,15z?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D'> <img
  src={mapImage}
  alt="Office Location on Map"/></a>

            <h4 className='mt-3'>Additional Details</h4>
            <div className='d-flex gap-2'>
              <i className="fs-5 bi bi-clock"></i>
              <p>Business Hours: Mon-Fri, 9 AM - 6 PM EST</p>
            </div>
            <div className='d-flex gap-2'>
              <i className="fs-5 bi bi-globe"></i>
              <p>Serving clients globally</p>
            </div>
                  </div>
                  
              </div>
              
              <div className='send d-flex gap-2 align-items-center'>
                  <button className='btn text-white'>send message</button>
                  <i class="bi bi-arrow-right"></i>
              </div>

              <div className='ready'>
                  <h1 className='text-center'> Ready to Transform Your Business?</h1>
                  <p className='grayText text-center my-3'>
              Whether you have a specific project in mind or just want to explore how we can help, we're here to support your journey to innovation and success. Let's start a conversation and discover the possibilities together.</p>
              </div>
      </div>
    </div>
  );
}

export default Contact;
