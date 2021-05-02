import React,{useState} from 'react'
import ThemeContext from './Context/ThemeContext'
import HeroSection from './components/HeroSection'
import Header from './components/Header'

const App = () => {
   const themeHook = useState("light");
   return(
     <ThemeContext.Provider value={themeHook}>
       <div>
         <Header />
         <HeroSection />
       </div>
     </ThemeContext.Provider>
    )


}

export default App