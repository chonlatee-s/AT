import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import logo from './img/logo2.jpg';
class Menu extends Component {
    render() {
        return(
        <nav className="navbar fixed-top navbar-expand-sm navbar-light" style={{backgroundColor: "#ffffff"}}>
            <div className="container">
                <a href="https://นายโรบอท.com" className="navbar-brand" ><img src={logo} style={{width:"75px"}} alt="นายโรบอท"/><span className="logo_brand"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div className="navbar-nav ml-md-auto mb-2" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <a href ="https://xn--o3cdd5af5d5a4j.com/contents/">
                            <Button variant="outline-info" className="btn btnFull mt-2">คลังความรู้</Button>
                        </a>
                        <NavLink to="/RegisterAndTest">
                            <Button variant="outline-info" className="btn btnFull mt-2">ทำข้อสอบ</Button>
                        </NavLink>
                        <NavLink to="/Download">
                            <i className='fas fa-download showIcon' style={{fontSize:"30px", margin:"9px 0px 15px 15px", color:"#697f69"}}></i>
                            <Button variant="info" className="btn btnFull mt-2 showTextMenu" style={{marginRight:"10px"}}> ดาวน์โหลด</Button>
                        </NavLink>
                        <NavLink to="/Topic">
                            <i className='far fa-file-alt showIcon' style={{fontSize:"30px", margin:"9px 0px 15px 20px", color:"#697f69"}}></i>
                            <Button variant="info" className="btn btnFull mt-2 showTextMenu" style={{marginRight:"10px"}}> เนื้อหาที่ออกสอบ</Button>
                        </NavLink>
                        <NavLink to="/AboutMe">
                            <i className='far fa-user-circle showIcon' style={{fontSize:"32px", margin:"9px 0px 15px 20px", color:"#697f69"}}></i>
                            <Button variant="info" className="btn btnFull mt-2 showTextMenu" style={{marginRight:"10px"}}> ผู้ก่อตั้งเว็บไซต์</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}
export default Menu
