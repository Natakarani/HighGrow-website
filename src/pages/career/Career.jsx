import React from 'react'
import './career.css'
function Career() {
  return (
    <div>
    <div>
    
    <div className='career-banner'>
        <div className='text-white'>
            <h2 className='display-1'>Join Our Team Of Innovators</h2>
            <p className='fs-5 mt-4'>At Highbrow Technology, we're building the future of technology. Be part of something extraordinary.</p>
        </div>
    </div>

    <div className='hero-page'>
    <div className='text-white pt-5 mt-5'>
        <h3 className='text-center mb-5'>Why Work with Us</h3>
        <div className='d-flex flex-wrap gap-3 hero-cards'>
             <div className='rounded-3 p-3'>
                <i class="fs-1 bi bi-mortarboard"></i>
                <p>Continuous Learning</p>
                <small className='grayText'>Access to online courses, conferences, and workshops to keep your skills sharp and grow your career.</small>
            </div>
            <div className='rounded-3 p-3'>
                    <i class="fs-1 bi bi-activity"></i>
                    <p>Cutting-Edge Projects</p>
                <small className='grayText'>Work on innovative projects using the latest technologies and methodologies.</small>
                </div>
                <div className='rounded-3 p-3'>
                    <i class="fs-1 fw-bold bi bi-people"></i>
                    <p>Remote Work Options</p>
                    <small className='grayText'>Flexible work arrangements including remote and hybrid options for many positions.</small>
                </div>
                <div className='rounded-3 p-3'>
                    <i class="fs-1 fw-bold bi bi-globe"></i>
                    <p>Collaborative Culture</p>
                    <small className='grayText'>Join a team of passionate professionals in a supportive and inclusive work environment.</small>
                </div>
                <div className='rounded-3 p-3'>
                <i class="fs-1 fw-bold bi bi-cup-hot"></i>
                    <p>Work-Life Balance</p>
                    <small className='grayText'>We value your personal time with generous PTO, paid holidays, and flexible schedules.</small>
                </div>
        </div>
        </div>
        
        <div className='careerMeet text-white d-flex gap-3 align-items-center justify-content-center' style={{marginTop:'160px'}}>
        <div>
            <h3 className='mb-4'>Our Culture</h3>
            <p className='grayText'>At Highbrow Technology, we foster a culture of innovation, collaboration, and continuous growth. Our team members are encouraged to think creatively, take initiative, and contribute their unique perspectives to solve complex challenges.</p>
                <p className='grayText'>We believe in work-life balance, diversity and inclusion, and creating an environment where everyone can thrive both personally and professionally.</p>

        </div>
       <img src='https://img.freepik.com/free-photo/team-architects-business-meeting_329181-19215.jpg?ga=GA1.1.287837636.1663933397&semt=ais_hybrid'></img>
        </div>
        
        <h3 className='accordation-margin mb-5 fw-bold text-center'>Open Positions</h3>
        <div className="accordion" id="accordionExample">
<div className="accordion-item" style={{ backgroundColor: 'black' }}>
<h2 className="accordion-header">
<button
  className="accordion-button"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseOne"
  aria-expanded="true"
  aria-controls="collapseOne"
  style={{ backgroundColor: 'black', color: 'white' }} // Change background and text color
>
  Sr Systems Requirements - II Multiple Requirements
</button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ backgroundColor: '#222', color: 'white' }}>
                        <small>Work on writing unit test cases to validate if the business requirements and test strategies are being met; understand the functional design, requirements, configuration workbook; as well as collaborate with cross functional teams to integrate various features of the warehouse. Travel to various unanticipated client sites.</small><br></br>
                        <small><b className='my-5'>Requirements:</b></small>
                        <br></br>
                        <small>Bachelor's deg. (or foreign equi. degree) in Comp. Sci., Comp. Info. Sys., Electrical & Electronics Engg, Electronics & Communication Engg., Comp. Apps., Bus. Admin., Engg. (any field), Math., MIS or rel. with 5 yrs. of progressive experience in IT and knowledge of at least 7 techs. from the following list: Azure, AWS, Java, J2EE, Python, XML, JDBC, Servlets, Oracle, C, C++, MySQL, Web Sphere, VB.Net, Junit, SQL Server, ASP.Net, VB Script, HTML, CSS, SSIS, SSRS, Linux & Unix.</small><br></br>
<button className='text-white btn mt-3 darkBtn'>Apply Now</button>
</div>
</div>
</div>
<div className="accordion-item" style={{ backgroundColor: 'black' }}>
<h2 className="accordion-header">
<button
  className="accordion-button collapsed"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseTwo"
  aria-expanded="false"
  aria-controls="collapseTwo"
  style={{ backgroundColor: 'black', color: 'white' }} // Change background and text color
>
  System Analyst,II - Multiple positions
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{ backgroundColor: '#222', color: 'white' }}>
                        <small>Work on writing unit test cases to validate if the business requirements and test strategies are being met; understand the functional design, requirements, configuration workbook; as well as collaborate with cross functional teams to integrate various features of the warehouse. Travel to various unanticipated client sites.</small><br></br>

                       <small> <b >Requirements : </b></small><br></br>
                        <small>Bachelor's deg. (or foreign equi. degree) in Comp. Sci., Comp. Info. Sys., Electrical & Electronics Engg, Electronics & Communication Engg., Comp. Apps., Bus. Admin., Engg. (any field), Math., MIS or rel. with 5 yrs. of progressive experience in IT Azure, AWS, Java, J2EE, Python, XML, JDBC, Servlets, Oracle, C, C++, MySQL, Web Sphere, VB.Net, Junit, SQL Server, ASP.Net, VB Script, HTML, CSS, SSIS, SSRS, Linux & Unix.</small>
                        <br></br>
                       <button className='text-white btn mt-3 darkBtn'>Apply Now</button>

</div>
</div>
</div>
        </div>
        
        <div className='nextStep text-white'>
            <h3 className='text-center fw-bold mb-3'>Ready To Take the next step</h3>
            <p className='text-center grayText'>Join our team of innovators and help shape the future of technology.<br></br> We're always looking for passionate individuals to contribute to our mission.</p>
            <div className='d-flex justify-content-center'>
            <button className='px-3 text-center mt-3 btn darkBtn text-white'>View All Openings</button>
            </div>
           
        </div>
        
    </div>
  
</div>
</div>
  )
}

export default Career