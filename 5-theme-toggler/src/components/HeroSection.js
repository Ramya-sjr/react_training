import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../colors'

const HeroSection = () =>{
    const [theme, setTheme] = useContext(ThemeContext);
    // const[setTheme] = useContext(ThemeContext)[1];
    const currentTheme = AppTheme[theme];

    return(
        <div
        style = {{
            padding : "1rem",
            backgroundColor : `${currentTheme.backgroundColor}`,
            color : `${currentTheme.color}`,
            textAlign : "center"


        }}
        >
            <h1>Context API Theme Toggler</h1>
            <p>This is a nice para</p>
            <button style={{
                backgroundColor : "#26ae60",
                padding : "10px 15px",
                fontSize : "20px",
                color : "#fff",
                border : `${currentTheme.border}`
            }} 
            onClick = { () => {
                setTheme( theme === "light" ? "dark" : "light")
            } }
            >Toggle</button>
        </div>
    )
}

export default HeroSection