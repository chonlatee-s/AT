import React, { Component } from 'react'
import {Container, Row, Col, Image, Button, Alert } from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import welcome from './img/welcome.jpg';
class Welcome extends Component {
    state = {
        answer1 : false,
        answer2 : false
    }
    getValue1 = () => { this.setState({answer1:true, answer2:false})}
    getValue2 = () => { this.setState({answer2:true, answer1:false})}
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">แนวข้อสอบครูผู้ช่วย เอกคอมพิวเตอร์</h5></Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col md="12" lg="4" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={welcome} className="img-fluid" width="150px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'5px', marginBottom:'0px', color:"#697f69", fontWeight:"300", fontSize:"12px"}}>printf(" นายโรบอท ยินดีรับใช้ ");</p>
                    </Col>
                    <Col md="12" lg="8">
                        <div className="txtProfile" style={{marginLeft:'0px', marginTop:'5px'}}>
                            <p>คุณใช้งานครั้งแรก ใช่ หรือ ไม่ใช่ ?</p>
                            <Button variant="outline-success" size="sm" onClick={this.getValue1}>ใช่</Button> 
                            <Button variant="outline-warning" size="sm" onClick={this.getValue2}>ไม่ใช่</Button>
                            <p/>
                            {
                                (this.state.answer1) ? 
                                    <Alert variant="success">
                                        <h6> ยินดีที่ได้รู้จักครับ </h6>
                                        <NavLink to="/Policy"><span style={{fontSize:'12px', fontWeight:'300'}}>อ่านข้อตกลงการใช้งาน</span></NavLink>
                                    </Alert>
                                    : null
                            }
                                                        {
                                (this.state.answer2) ? 
                                    <Alert variant="info">
                                        <h6> ยินดีที่ได้พบกันอีกครั้ง </h6>
                                        <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>เข้าใจสิทธิ์การใช้งานแล้ว</span></NavLink> &nbsp;
                                        <NavLink to="/RegisterAndTest"><span style={{fontSize:'12px', fontWeight:'300'}}>ทำแบบทดสอบ</span></NavLink> 
                                    </Alert>
                                    : null
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Welcome
