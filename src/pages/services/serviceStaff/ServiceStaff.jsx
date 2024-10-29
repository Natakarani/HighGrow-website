import React, { useState } from 'react'
import './serviceSTaff.css'
function ServiceStaff() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(false);
   const [staff,setSTaff]=useState(true)
    const activeHome = () => {
        setSTaff(false)
        setHome(true);
        setServices(false);
    };

    const activeServices = () => {
        setSTaff(false)
        setHome(false);
        setServices(true);
    };
    const activeStaff = () => {
        setSTaff(true)
        setHome(false);
        setServices(true);
    };

    return (
        <div>
            <div className='staff-banner'>
                <div className='text-white'>
                    <h1 className='display-1 fw-bold'>Staffing Services <br /></h1>
                    <button className='rounded-5 px-4 btn text-white mt-4'>
                        <small 
                            className={`${home ? 'active' : ''} fs-6`} 
                            onClick={activeHome}
                        >
                            Home
                        </small>
                         <i className=" mx-2 fa-solid fa-chevron-right"></i>
                        <small 
                            className={`${services ? 'active' : ''} fs-6`} 
                            onClick={activeServices}
                        >
                            Services
                        </small>
                        <i className=" mx-2 fa-solid fa-chevron-right"></i>
                        <small 
                            className={`${setSTaff ? 'active' : ''} fs-6`} 
                            onClick={activeStaff}
                        >
                            Technology
                        </small>
                    </button>
                </div>
            </div>

            <div className='services-margin text-white '>
                <div>
                    <h1 className='text-center'>Empowering Your Workforce</h1>
                    <p className='my-5 grayText'>At Highbrow Technology, we understand that your team is the backbone of your success. Our Staffing Services are designed to connect you with top-tier talent, ensuring your organization has the skills and expertise needed to thrive in today's competitive landscape.</p>
                </div>

               

                <div className='consult text-white'>
                <h1 className='text-center mb-5'>Our Staff solutions</h1>
                <div className='d-flex flex-wrap gap-3'>
                        <div className='text-center'>
                        <i class="fa-solid fa-file-contract"></i>
                        <p className='my-3'>Contingency Search</p>
                       
                        </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-handshake"></i>
                      
                        <p className='my-3'>Agreement Recruiting</p>
                       
                        </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-clock"></i>
                       
                        <p className='my-3'>Freelance or Contract Help </p>
                       
                        </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-gear"></i>
                        <p className='my-3'>Managed Services</p>
                       
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-cube"></i>
                        <p>Permanent Recruitment</p>
                       
                    </div>
                        <div className='text-center'>
                        <i class="bi bi-person-check"></i>
                       
                        <p>Temporary Help</p>
                      
                    </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-user"></i>
                        <p>Recruitment Process Outsourcing </p>
                       
                    </div>
                       
                       
                </div>
                </div>



                <div className='consult consult1 text-white'>
                <h1 className='text-center mb-5'>Our Imapct In Numbers</h1>
                <div className='d-flex flex-wrap gap-3'>
                        <div className='text-center'>
                        <i class="fa-regular fa-clock"></i>
                        <h3 className='my-3'>10+</h3>
                        <p className='grayText'>Years of Experience in Staffing.</p>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-cube"></i>
                        <h3 className='my-3'>20+</h3>
                        <p className='grayText'>Clients and Growing</p>
                    </div>
                        <div className='text-center'>
                        <i class="bi bi-person-check"></i>
                        <h3 className='my-3'>300+</h3>
                       
                        <p className='grayText'>Candidates placed</p>
                       
                    </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-user"></i>
                        <h3 className='my-3'>3,000+</h3>
                     
                            <p className='grayText'>Vetted Candidates in Database</p>
                        
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-file"></i>
                        <h3 className='my-3'>1,00,000+</h3>
                       
                        <p className='grayText'>CVs in Databank</p>
                        
                    </div>
                      
                      
                </div>
                </div>

                <div className='benefits text-white'>
                    <h1 className='my-5 text-center'>Benefits of Our AI-Powered Recruitment Strategies</h1>
                    <div className='d-flex gap-3 flex-wrap'>
                        <div>
                            <p className='fw-bold mb-3'>Effective Consultations</p>
                            <small className='grayText'>Our AI-driven approach ensures that we understand your needs precisely, leading to more effective consultations and better-matched candidates.</small>
                        </div>
                        <div>
                            <p className='fw-bold mb-3'>Successful Strategy</p>
                            <small className='grayText'>Leverage our data-driven insights to develop a recruitment strategy that aligns perfectly with your organization's goals and culture.</small>
                        </div>
                        <div>
                            <p className='fw-bold mb-3'>Expert Talents</p>
                            <small className='grayText'>Access a pool of pre-vetted, highly skilled professionals across various industries and specializations.</small>
                        </div>
                        <div>
                            <p className='fw-bold mb-3'>Faster Closing Time</p>
                            <small className='grayText'>Our AI-powered matching algorithms significantly reduce the time-to-hire, ensuring you get the right talent when you need it.</small>
                        </div>
                        <div>
                            <p className='fw-bold mb-3'>Competitive Pricing</p>
                            <small className='grayText'>Benefit from our efficient processes and large talent pool, resulting in competitive pricing for top-tier staffing solutions.</small>
                        </div>
                        <div>
                            <p className='fw-bold mb-3'>Dedicated Teams for Clients </p>
                            <small className='grayText'>Enjoy personalized service with dedicated teams that understand your unique staffing needs and organizational culture.</small>
                        </div>
                    </div>
                </div>

                <div className='ready text-white'>
                    <h1 className='text-center'>
                    Ready to Transform Your Workforce?</h1>
                    <p className='my-4 grayText text-center'>Discover how our AI-powered staffing solutions can help you build the team you need to drive your business forward. Let's collaborate to find the perfect talent for your organization.
                    </p>
                    <div className='d-flex justify-content-center mt-3'>
                    <button className='text-white btn'>Get started today</button>
                    </div>
                    
                </div>
              
            </div>
        </div>
    );
}

export default ServiceStaff;
