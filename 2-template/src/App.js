import React from 'react'
import NavBar from './NavBar'
import HeroSection from './Herosection'
import AppSection from './AppSection'
import CardSection from './CardSection'
import Footer from './Footer'


const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;