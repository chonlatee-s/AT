import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import welcome from './img/welcome.jpg';
class Topic extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">เลี้ยงกาแฟแอดมิน</h5></Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col md="12" lg="3" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={welcome} className="img-fluid" width="120px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'5px', marginBottom:'0px', color:"#697f69", fontWeight:"300", fontSize:"12px"}}>printf(" hello world ");</p>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">ขอบคุณที่เป็นส่วนหนึ่งในการทำให้เว็บไซต์นี้อยู่ได้ เพื่อประโยชน์กับผู้ที่จะสอบครูผู้ช่วยต่อไป</p>
                            <p className="txtHead">หารค่ากาแฟได้ที่ ธ.กรุงไทย 317-0-125591 ชลธี สินสาตร์ หรือพร้อมเพย์ 082 781 8941</p>
                            <p></p>
                            <p className="txtDetail">รายได้ส่วนหนึ่งจะนำไปจ่ายค่า Domain, Host และ SSL</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Topic
