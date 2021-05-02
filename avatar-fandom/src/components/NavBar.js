import React from 'react'
import styles from '../components/navstyle.module.css'
// import  {Navbar, Nav}  from 'react-bootstrap'


class NavBar extends React.Component{

    render(){

        return(

            // <Navbar >
            //     <Navbar.Brand href="#home">Avatar Fandom</Navbar.Brand>
            //     <Nav className="mr-auto">
            //         <Nav.Link href="#home">Home</Nav.Link>
            //         <Nav.Link href="#features">Features</Nav.Link>
            //         <Nav.Link href="#pricing">Pricing</Nav.Link>
            //     </Nav>
            // </Navbar>

            <div>
                <ul>
                    <li><a  href="/">Avatar Fandom</a></li>                    
                </ul>
            </div>
            
        )

    }

}

export default NavBar