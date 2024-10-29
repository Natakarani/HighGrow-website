import React, { useState } from 'react'

import './servicesConsult.css'
import { Link } from 'react-router-dom';
function ServicesConsulting() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(false);
   const [consult,setConsult]=useState(true)
    const activeHome = () => {
     setConsult(false)
        setHome(true);
        setServices(false);
    };

    const activeServices = () => {
     setConsult(false)
        setHome(false);
        setServices(true);
    };
    const activeConsult = () => {
        setConsult(true)
        setHome(false)
        setServices(false)
    }

    return (
        <div>
            <div className='services-banner'>
                <div className='text-white'>
                    <h1 className='display-1'>Consulting Services <br /></h1>
                    <button className='rounded-5 px-4 btn text-white mt-4'>
                        <Link to='/' style={{textDecoration:'none',color:'white'}}>
                        <small 
                            className={`${home ? 'active' : ''} fs-6`} 
                            onClick={activeHome}
                        >
                            Home
                            </small>
                            </Link>
                        <i className=" mx-2 fa-solid fa-chevron-right"></i>
                        <Link to='/services' style={{textDecoration:'none',color:'white'}}>
                        <small 
                            className={`${services ? 'active' : ''} fs-6`} 
                            onClick={activeServices}
                        >
                            Services
                            </small>
                            </Link>
                        <i className=" mx-2 fa-solid fa-chevron-right"></i>
                        <Link to='/service-consult' style={{ textDecoration: 'none', color: 'white' }}>
                        <small 
                            className={`${consult ? 'active' : ''} fs-6`} 
                            onClick={activeConsult}
                        >
                            Consulting
                        </small>
                       </Link>
                    </button>
                </div>
            </div>

            <div className='services-intro'>
            <div className='text-white text-center'>
                <h1>
                    Transforming Businesses Through Expert Consulting</h1>
                    <p className='technology mt-4 grayText'>
                At Highbrow Technology, we offer a wide range of consulting services designed to help businesses navigate complex challenges, optimize their operations, and drive growth. Our team of expert consultants brings deep industry knowledge and cutting-edge expertise to every engagement.
                </p>
                </div>
                
                <div className='consult text-white'>
                <h1 className='text-center mb-5'>Our consulting solutions</h1>
                <div className='d-flex flex-wrap gap-3'>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-simple"></i>
                        <p>Workday Consulting Services</p>
                        <small className='grayText'>Optimize your HR and financial management with our Workday expertise.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-cloud"></i>
                        <p>SAP Consulting Services</p>
                        <small className='grayText'>Leverage SAP solutions to streamline your business processes and enhance efficiency.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-gear"></i>
                        <p>PEGA Consulting Services</p>
                        <small className='grayText'>Automate and optimize your business processes with our PEGA consulting.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-line"></i>
                        <p>Salesforce Consulting Services</p>
                        <small className='grayText'>Maximize your CRM potential with our Salesforce expertise.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-brands fa-gitter"></i>
                        <p>Guidewire Consulting</p>
                        <small className='grayText'>Transform your insurance operations with our Guidewire consulting services.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-lightbulb"></i>
                        <p>Digital Transformation Consulting</p>
                        <small className='grayText'>Navigate the digital landscape and drive innovation in your organization.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-simple"></i>
                        <p>Strategy Consulting</p>
                        <small className='grayText'>Develop winning strategies to achieve your business goals and stay ahead of the competition.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-user"></i>
                        <p>HR Consulting</p>
                        <small className='grayText'>Optimize your human resources practices to attract and retain top talent</small>
                    </div>
                </div>
                </div>
                
                <div className='impact text-white text-center'>
                    <h1 className='mb-5'>Our impact In Numbers</h1>
                    <div className='d-flex flex-wrap gap-2 justify-content-between'>
                        <div>
                        <i class="fa-solid fa-chart-simple"></i>
                            <h1>13+</h1>
                            <small>Years of experience</small>
                        </div>
                        <div>
                        <i class="fa-regular fa-heart"></i>
                            <h1>40+</h1>
                            <small>Happy clients</small>
                        </div>
                        <div>
                        <i class="fa-solid fa-gear"></i>
                            <h1>10+</h1>
                            <small>Technologies</small>
                        </div>
                        <div>
                        <i class="fa-solid fa-chart-bar"></i>
                            <h1>100+</h1>
                            <small>Consulting services provided</small>
                        </div>
                    </div>
                </div>

                <div className='ready text-white'>
                    <h1 className='text-center'>Ready to Transform Your business</h1>
                    <p className='grayText text-center graText my-4'>Discover how our expert consulting services can help you overcome challenges, seize opportunities, and achieve your business objectives. Let's work together to drive your organization forward.</p>
                    <div className='d-flex justify-content-center'>
                    <button className='btn p-2 text-white'>Get started today</button>
                    </div>
                  
                </div>
            </div>

          

           

           
        </div>
    );
}

export default ServicesConsulting;
