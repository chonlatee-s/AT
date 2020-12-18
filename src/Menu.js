import React, { Component } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
class Menu extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="md" style={{backgroundColor:"#fff"}} fixed="top">
            <Navbar.Brand>
                <NavLink to="/">ศูนย์หนึ่ง</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavLink to="/Exam">
                        <Button variant="outline-info" className="btn btnFull mt-2">ทำข้อสอบ</Button>
                    </NavLink>
                    <NavLink to="/PlansAndContact">
                        <Button variant="info" className="btn btnFull mt-2" style={{marginRight:"10px"}}> รับสิทธิ์เข้าใช้งาน</Button>
                    </NavLink>
                </Nav>
                <NavLink to="/AboutMe">
                    <i className='far fa-user-circle' style={{fontSize:"34px", margin:"14px 0px 10px 10px", color:"#b7996c"}}></i>
                </NavLink>
                {/* <NavLink to="/">
                    <i className='fas fa-file-alt' style={{fontSize:"21px", margin:"14px 10px 10px 10px", color:"#b7996c"}}></i>
                </NavLink> */}
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Menu
