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
                    <Col><h5 className="topic text-center">"สวัสดีครับ นายท่าน"</h5></Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col md="12" lg="4" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={welcome} className="img-fluid" width="200px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'5px', marginBottom:'0px', color:"#697f69", fontWeight:"300", fontSize:"12px"}}>printf(" นายโรบอท ยินดีรับใช้ ");</p>
                    </Col>
                    <Col md="12" lg="8">
                        <div className="txtProfile" style={{marginLeft:'0px'}}>
                            <p className="codeComment">// ช่วงนี้ ERROR บ่อย ช่วยตอบคำถามผมที</p>
                            <p className="">printf(" นี่คือการใช้งานครั้งแรก ใช่ หรือ ไม่ใช่ ? ");</p>
                            <Button variant="outline-success" size="sm" onClick={this.getValue1}>ใช่</Button> 
                            <Button variant="outline-warning" size="sm" onClick={this.getValue2}>ไม่ใช่</Button>
                            <p/>
                            {
                                (this.state.answer1) ? 
                                    <Alert variant="success">
                                        <Alert.Heading> ยินดีที่ได้รู้จัก นายท่านคนใหม่ </Alert.Heading>
                                        <NavLink to="/Policy"><span style={{fontSize:'12px', fontWeight:'300'}}>กรุณาอ่าน ข้อตกลงการใช้งาน</span></NavLink>
                                    </Alert>
                                    : null
                            }
                                                        {
                                (this.state.answer2) ? 
                                    <Alert variant="info">
                                        <Alert.Heading> ยินดีที่ได้พบกันอีกครั้ง </Alert.Heading>
                                        <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>ถ้าเข้าใจสิทธิ์การใช้งานแล้ว</span></NavLink> &nbsp;
                                        <NavLink to="/RegisterAndTest"><span style={{fontSize:'12px', fontWeight:'300'}}>เริ่มทำแบบทดสอบได้เลย</span></NavLink> 
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
