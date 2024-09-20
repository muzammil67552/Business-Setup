/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// Resources Page
import Blogs from './pages/Blogs';
// Services Pages
import InvestCompany from './pages/InvestCompany';
import LLCLicense from './pages/LLCLicense';
import LocalSponsor from './pages/LocalSponsor';
import ProServices from './pages/ProServices';
import VisaClearance from './pages/VisaClearance';
//Faq
import Contact from './components/Contact';

import CompanyInfo from './components/CompanyInfo.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Blogs under Resources */}
        <Route path="/resources/blogs" element={<Blogs />} />
        
        {/* Services Routes */}
        <Route path="/service/investor-company-formation" element={<InvestCompany />} />
        <Route path="/service/llc-license-formation" element={<LLCLicense />} />
        <Route path="/service/local-sponsorship" element={<LocalSponsor />} />
        <Route path="/service/pro-service" element={<ProServices />} />
        <Route path="/service/oman-visa-clearance" element={<VisaClearance />} />
        {/* Faq PAges */}
        <Route path="/contact" element={<div className="mt-36 "><Contact /></div>} />
        
        {/* Add other routes if necessary */}

      </Routes>
      <CompanyInfo/>
      <Footer />
    </Router>
  );
}

export default App;
