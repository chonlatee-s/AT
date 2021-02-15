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
                        {/* <NavLink to="/RegisterAndTest">
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
                        </NavLink> */}
                         <NavLink to="/RegisterAndTest">
                            <Button variant="outline-info" className="btn btnFull mt-2">ทำข้อสอบ</Button>
                        </NavLink>
                        <NavLink to="/Download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-download showIcon" viewBox="0 0 16 16" style={{margin:"9px 0px 15px 15px"}}>
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                            <Button variant="info" className="btn btnFull mt-2 showTextMenu" style={{marginRight:"10px"}}> ดาวน์โหลด</Button>
                        </NavLink>
                        <NavLink to="/Topic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-journal-text showIcon" viewBox="0 0 16 16" style={{margin:"9px 0px 15px 15px"}}>
                                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                            </svg>
                            <Button variant="info" className="btn btnFull mt-2 showTextMenu" style={{marginRight:"10px"}}> เนื้อหาที่ออกสอบ</Button>
                        </NavLink>
                        <NavLink to="/AboutMe">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle showIcon" viewBox="0 0 16 16" style={{margin:"9px 0px 15px 15px"}}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
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
