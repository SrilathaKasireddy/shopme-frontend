import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import "./Navbar.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {  
  return (  
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg">
          <Container>
            
      <Navbar.Brand href="#home" id="header"><img 
      alt ="logo" src="https://img.icons8.com/ios-filled/25/000000/shopping-bag.png"/>
      <b>ShopMe</b></Navbar.Brand>
             
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="dropdown"  >
                <NavDropdown title="Clothing" className="hover-underline-animation">
                  <NavDropdown.Item href="/items" >Tops</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Dresses</NavDropdown.Item>
                  
                </NavDropdown>
                <NavDropdown title="Shoes" id="nav-dropdown" className="hover-underline-animation">
                  <NavDropdown.Item href="/items">New Collection</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Best Selling</NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Accessories" id="nav-dropdown" className="hover-underline-animation">
                  <NavDropdown.Item href="/items">Bags</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Jewellery</NavDropdown.Item>
                  
                </NavDropdown>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>

              </Nav>
            </Navbar.Collapse>

            <h6> <AccountCircleIcon style={{ margin: "1%", color: "black" }} />
            {/* {`${Username}`} */}
            </h6>

            {/* <Button className="logout" style={{
              backgroundColor: "#277970",
              color: "white",

            }} variant="Success" onClick={() => logout()}>Logout</Button> */}
          </Container>
        </Navbar>
      </header>
      {/* <hr style={{ color: "#DFBA21" }}></hr> */}
      <div style={{
        width: "100%",
        textAlign: "center", margin: "auto", borderRadius: "5px"
      }}>
        
         <Card style={{ backgroundColor: "whitesmoke", width: "100%" }} >
          <div  id ="background">
          <h1 style={{marginRight:"70%",paddingTop:"5%"}}>Now Open in New York!</h1>
          <br/>
         <button style={{marginRight:"70%",color:"white",padding:10,
         backgroundColor:"black",boxShadow:" 10px 10px 5px  grey"}}>Shop The New Arrivals</button>
          </div>
          
          <h2 >About Us</h2>
          <p style={{ textAlign: 'center',width: '70%', padding: "10px", margin: "auto"}}>ShopMe caters to thoughtful 
            shoppers who appreciate 
            unique designs and top quality pieces you just can’t find anywhere else.
             We are constantly curating fresh new collections and looking for 
             the next big thing our customers will love. Founded in Vienna in 2019, 
             we are proud to be your Online fashion Shop that
              you can rely on for our expert service and care.</p>
        </Card> 
      </div>

      <div style={{
        width: "100%",
        height:"40px",
        textAlign: "center", padding: "5%",backgroundColor:"black",color: "white"
      }}>Copyright©️ 2022 ShopMe | All rights reserved.</div>
    </div>
  );  
}  
export default NavBar;  