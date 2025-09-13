import './App.css';
import { Routes, Route } from "react-router-dom";
// import Hero from './components/Hero';
import {motion} from "framer-motion";
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Photograhy from './pages/Photography';
import Error from './pages/Error';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1 }}
    >
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="pricing" element={ <Pricing/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="photography" element={ <Photograhy/> } />
        {/* <Route path="videography" element={ <Videography/> } /> */}
        <Route path="faqs" element={ <FAQs/> } />
        <Route path="tos" element={ <TermsOfService/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </motion.div>
  );
}

export default App;
