import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// Resources Page
import Blogs from './pages/Blogs';
import BlogBusinessSetOman from './pages/BlogBusinessSetOman';
import BlogForeignerCanBusiness from './pages/BlogForeignerCanBusiness';
// Services Pages
import InvestCompany from './pages/InvestCompany';
import LLCLicense from './pages/LLCLicense';
import CompanyReg from './pages/CompanyReg';
import ProServices from './pages/ProServices';
import VisaClearance from './pages/VisaClearance';
import MobileandHardware from './pages/MobileandHardware';
import Garments from './pages/Garments';
import Carpentry from './pages/Carpentry';
// Faq
import Contact from './components/Contact';
import Faq from './pages/Faq';
import CompanyInfo from './components/CompanyInfo';
import QuoteForm from './components/QuoteForm';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsappChatIcons from './components/WhatsappChatIcons';

// 404 Page
import NotFound from './components/NotFound'; // Import a 404 page component (create if not exists)

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Blogs under Resources */}
        <Route path="/resources/blogs" element={<Blogs />} />
        <Route path="/blogs/business-setup-oman" element={<BlogBusinessSetOman />} />
        <Route path="/blogs/business-Foreigner-setup-oman" element={<BlogForeignerCanBusiness />} />
        
        {/* Services Routes */}
        <Route path="/service/investor-company-formation" element={<InvestCompany />} />
        <Route path="/service/llc-license-formation" element={<LLCLicense />} />
        <Route path="/service/company-registration" element={<CompanyReg />} />
        <Route path="/service/pro-service" element={<ProServices />} />
        <Route path="/service/oman-visa-clearance" element={<VisaClearance />} />
        <Route path="/service/oman-mobile-hardware" element={<MobileandHardware />} />
        <Route path="/service/oman-garments-services" element={<Garments/>} />
        <Route path="/service/oman-carpentry-services" element={<Carpentry/>}/>

        {/* Faq Pages */}
        <Route path="/contact" element={<div className="mt-36"><Contact /></div>} />
        <Route path="/faq/technical" element={<Faq />} />

        {/* Quote Form */}
        <Route path="/calculated-form" element={<QuoteForm />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} /> {/* This will catch all undefined routes */}
      </Routes>
      
      <CompanyInfo />
      <WhatsappChatIcons />
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;