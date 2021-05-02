import './App.css';
import NavBar from './NavBar';
import MasterSection from './MasterSection'
import PortFolioSection from './PortFolioSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import CopyrightSection from './CopyrightSection'

function App() {
  return (
   <div>
     <NavBar/>
     <MasterSection/>
     <PortFolioSection/>
     <AboutSection/>
     <ContactSection/>
     <Footer/>
     <CopyrightSection/>
   </div>
  );
}

export default App;
