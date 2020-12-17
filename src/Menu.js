import React, { Component } from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
class Menu extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="md" style={{backgroundColor:"#fff"}} fixed="top">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavLink to="/Exam">
                        <Button variant="outline-primary" className="btn btnFull mt-2">ทำข้อสอบ</Button>
                    </NavLink>
                    <NavLink to="/PlansAndContact">
                        <Button variant="success" className="btn btnFull mt-2"> รับสิทธิ์เข้าใช้งาน</Button>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Menu
