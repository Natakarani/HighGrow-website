import React, { useState } from 'react';
import './services.css';


function Services() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(true);
   
    const activeHome = () => {
        setHome(true);
        setServices(false);
    };

    const activeServices = () => {
     
        setHome(false);
        setServices(true);
    };

    return (
        <div>
            <div className='services-banner'>
                <div className='text-white'>
                    <h1 className='display-1'>Our Services <br /></h1>
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
                      
                    </button>
                </div>
            </div>

            <div className='services-margin text-white '>
                <div>
                    
                    <h1 className='text-center mb-5'>Our Expertise</h1>
                    <div className='services-cards d-flex gap-5 flex-wrap rounded-2'>
                    <div style={{minHeight:'400px'}} className='d-flex flex-column align-items-start justify-content-center p-3 rounded-2'>
                        <i class="fs-1 fw-bold icon bi bi-people"></i>
                            <h3 className='mt-3'>Staffing</h3>
                            <p>Connect with top talent to build your dream team.</p>
                            <div className='services-card1 d-flex gap-2 flex-wrap justify-content-center gap-1'>
                                <div>
                                    <h2>10+</h2>
                                    <small>years of experience</small>
                                </div>
                                <div>
                                    <h2>20+</h2>
                                    <small>clients and growing</small>
                                </div>
                                <div>
                                    <h2>300+</h2>
                                    <small>candidates placed</small>
                                </div>
                                <div>
                                    <h2>30k+</h2>
                                    <small>verified candidates</small>
                                </div>
                            </div>
                            <div className='w-100 justify-content-center d-flex align-items-center gap-2 orangeText rounded-3 mt-4'>
                            <button className='btn text-white'>
                                    Explore staffing      </button>
                                    <i class="text-white bi bi-arrow-right"></i>
                          
                            </div>
                        </div>

                        <div style={{minHeight:'400px'}} className='d-flex flex-column align-items-start justify-content-center p-3 rounded-2'>
                        <i class="fs-1 fw-bold icon bi bi-graph-up"></i>
                            <h3 className='mt-3'>Consulting</h3>
                            <p>Expert advice to drive your business forward.</p>
                            <div className='services-card1 d-flex gap-2 flex-wrap justify-content-center gap-1'>
                                <div>
                                    <h2>13+</h2>
                                    <small>years of business</small>
                                </div>
                                <div>
                                    <h2>40+</h2>
                                    <small>Happy clients </small>
                                </div>
                                <div>
                                    <h2>10+</h2>
                                    <small>Technologies</small>
                                </div>
                                <div>
                                    <h2>100+</h2>
                                    <small>consulting services</small>
                                </div>
                            </div>
                            <div className='w-100 justify-content-center d-flex align-items-center gap-2 orangeText rounded-3 mt-4'>
                            <button className='btn orangeText text-white'>
                                    Explore staffing</button>
                                    <i class="text-white bi bi-arrow-right"></i>
                               
                            </div>
                        </div>

                        <div style={{minHeight:'400px'}} className='d-flex flex-column align-items-start justify-content-center p-3 rounded-2'>
                        <i class="fs-1 fw-bold icon bi bi-graph-up"></i>
                            <h3 className='mt-3'>Technology</h3>
                            <p>Cutting-edge tech solutions for modern challenges.</p>
                            <div className='services-card1 d-flex gap-2 flex-wrap justify-content-center gap-1'>
                                <div>
                                    <h2>15+</h2>
                                    <small>Technologies</small>
                                </div>
                                <div>
                                    <h2>15+</h2>
                                    <small>applications merged </small>
                                </div>
                                <div>
                                    <h2>24/7</h2>
                                    <small>support</small>
                                </div>
                                <div>
                                    <h2>99.9%</h2>
                                    <small>upTime</small>
                                </div>
                            </div>
                            <div className='w-100 justify-content-center d-flex align-items-center gap-2 orangeText rounded-3 mt-4'>
                                <button className=' btn orangeText text-white'>
                                    Explore staffing</button>
                                    <i class="text-white bi bi-arrow-right"></i>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='emerging'>
                    <h1 className='mb-5 text-center'>Our Emerging services</h1>
                    <div className='d-flex flex-wrap gap-4 justify-content-between'>
                        <div>
                        <i class=" fa-solid fa-brain"></i>
                            <p>Gen AI</p>
                        </div>
                        <div>
                        <i class="fa-solid fa-shield-halved"></i>
                            <p>Cyber security AI</p>
                        </div>
                        <div>
                        <i class="fa-solid fa-cloud"></i>
                            <p>Cloud security </p>
                        </div>
                        <div>
                        <i class="fa-solid fa-gear"></i>
                            <p>Managed Services </p>
                        </div>
                        <div>
                        <i class="fa-solid fa-wifi"></i>
                            <p>wifi  </p>
                        </div>
                        <div>
                        <i class="fa-solid fa-cube"></i>
                            <p>Anything as service </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;
