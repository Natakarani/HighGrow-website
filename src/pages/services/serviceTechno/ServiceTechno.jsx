import React, { useState } from 'react'
import './servicetechno.css'

function ServiceTechno() {
    const [home, setHome] = useState(false);
    const [services, setServices] = useState(false);
   const [techno,setTechno]=useState(true)
    const activeHome = () => {
        setTechno(false)
        setHome(true);
        setServices(false);
    };

    const activeServices = () => {
        setTechno(false)
        setHome(false);
        setServices(true);
    };
    const activeTechno = () => {
        setTechno(true)
        setHome(false);
        setServices(true);
    };

    return (
        <div>
            <div className='techno-banner'>
                <div className='text-white'>
                    <h1 className='display-1 fw-bold'>Technology Services <br /></h1>
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
                            className={`${techno ? 'active' : ''} fs-6`} 
                            onClick={activeTechno}
                        >
                            Technology
                        </small>
                    </button>
                </div>
            </div>

            <div className='services-margin text-white ' style={{marginTop:'180px'}}>
                <div>
                    <h1 className='text-center'>Innovating for Future</h1>
                    <p className='my-5 grayText'>At Highbrow Technology, we're at the forefront of technological innovation. Our Technology Services are designed to propel your business into the future, leveraging cutting-edge solutions to solve complex challenges and drive digital transformation.</p>
                </div>

               
                <div className='consult text-white'>
                <h1 className='text-center mb-5'>Our Technology solutions</h1>
                <div className='d-flex flex-wrap gap-3'>
                        <div className='text-center'>
                        <i class="fa-solid fa-brain"></i>
                        <p className='my-3'>AI/ML Solutions</p>
                        <small className='grayText'>Harness the power of artificial intelligence and machine learning to gain insights and automate processes.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-gear"></i>
                        <p>LLM, AI-Powered Analytics</p>
                        <small className='grayText'>Leverage large language models and AI-driven analytics for advanced data interpretation and decision-making.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-cloud"></i>
                        <p>Cloud Migration</p>
                        <small className='grayText'>Seamlessly transition your infrastructure and applications to the cloud for enhanced scalability and efficiency..</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-mobile-screen"></i>
                        <p>Mobile App Development</p>
                        <small className='grayText'>Create intuitive and powerful mobile applications that engage users and drive business growth.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-globe"></i>
                        <p>Web Design, Application Development</p>
                        <small className='grayText'>Development
                        Build stunning websites and robust web applications that deliver exceptional user experiences.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-code"></i>
                        <p>Microservices API Development</p>
                        <small className='grayText'>Develop scalable and flexible microservices architectures for improved agility and performance.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-gear"></i>
                        <p>Application Support, Maintenance</p>
                        <small className='grayText'>Ensure the ongoing performance and reliability of your applications with our comprehensive support services.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-database"></i>
                        <p>Data Migration</p>
                        <small className='grayText'>Securely and efficiently transfer your data between systems, ensuring integrity and continuity.</small>
                        </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <p>Automation Services</p>
                        <small className='grayText'>Streamline your operations with intelligent automation solutions that boost productivity and reduce errors.</small>
                        </div>
                        <div className='text-center'>
                        <i class="fa-regular fa-circle-up"></i>
                        <p>Legacy Modernization</p>
                        <small className='grayText'>Transform your legacy systems into modern, agile applications that meet today's business needs.</small>
                    </div>
                </div>
                </div>

                <div className='consult text-white'>
                <h1 className='text-center mb-5'>Advanced AI/ML Services</h1>
                <div className='d-flex flex-wrap gap-3'>
                        <div className='text-center'>
                        <i class="fa-solid fa-display"></i>
                        <p className='my-3'>AI Model Training</p>
                        <small className='grayText'>Develop and train custom AI models tailored to your specific business needs and datasets.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-microscope"></i>
                        
                        <p>RLHF Implementation</p>
                        <small className='grayText'>Implement Reinforcement Learning from Human Feedback to fine-tune AI models for improved performance and alignment.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-area"></i>
                        <p>Natural Language Processing</p>
                        <small className='grayText'>SBuild advanced NLP systems for text analysis, sentiment analysis, and language understanding.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-area"></i>
                        <p>Computer Vision Solutions</p>
                        <small className='grayText'>Develop image and video analysis systems for object detection, facial recognition, and more.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-database"></i>
                        <p>Data Annotation Services</p>
                        <small className='grayText'>Provide high-quality data labeling and annotation services for training machine learning models.</small>
                    </div>
                        <div className='text-center'>
                        <i class="fa-solid fa-chart-line"></i>
                        <p>AI Model Optimization</p>
                        <small className='grayText'>Optimize AI models for improved performance, efficiency, and deployment on various platforms.</small>
                    </div>
                      
                </div>
                </div>
                <div className='excel'>
                    <h1 className='text-center'>Technology we excel In</h1>
                    <div className='d-flex flex-wrap gap-2 mt-5'>
                        <button className='btn'>Python</button>
                        <button className='btn'>Java</button>
                        <button className='btn'>React</button>
                        <button className='btn'>Next.js</button>
                        <button className='btn'>Tensorflow</button>
                        <button className='btn'>AWS</button>
                        <button className='btn'>Python</button>
                        <button className='btn'>Azure</button>
                        <button className='btn'>Docker</button>
                        <button className='btn'>MongoDB</button>
                        <button className='btn'>PostgreSQL</button>
                        <button className='btn'>GraphSQL</button>
                    </div>
                </div>

                <div className='impact-techno text-white'>
                    <h1 className='text-center mb-5'>Our technological impact</h1>
                    <div className='d-flex flex-wrap align-items-center justify-content-center gap-5'>
                        <div className='d-flex justify-content-center flex-column align-items-center gap-4'>
                        <i class="fs-3 fa-solid fa-code"></i>
                            <h1 className='my-3'>15+</h1>
                            <small className='grayText'>Technologies Mastered</small>
                        </div>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                        <i class="fs-3 fa-solid fa-mobile-screen-button"></i>
                            <h1 className='my-3'>15+</h1>
                            <small className='grayText'>Applications Under Management</small>
                        </div>
                    </div>
                </div>

                <div className='ready'>
                    <h1 className='text-center'>Ready to Revolutionize Your Technology?</h1>
                    <p className='my-4 text-center grayText'> Discover how our cutting-edge technology services can transform your business, streamline your operations, and give you a competitive edge in the digital world. Let's innovate together and build the future of your industry.</p>
                    <div className='d-flex justify-content-center'>
                    <button className='py-2 btn my-3 text-white btn px-3'>Get started today</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceTechno;
