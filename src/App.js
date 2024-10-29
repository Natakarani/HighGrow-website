import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AboutUs from './pages/aboutUs/About';
import Footer from './components/footer/Footer';

import Career from './pages/career/Career';
import Services from './pages/services/Services';
import ServicesConsulting from './pages/services/servicesConsulting/ServicesConsulting';
import ServiceTechno from './pages/services/serviceTechno/ServiceTechno';
import ServiceStaff from './pages/services/serviceStaff/ServiceStaff';
import Contact from './components/contact/Contact';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service-consult' element={<ServicesConsulting />} />
          <Route path='/service-techno' element={<ServiceTechno />} />
          <Route path='/service-staff' element={<ServiceStaff />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/career' element={<Career/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
