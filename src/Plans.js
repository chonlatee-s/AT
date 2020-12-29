import React, { Component } from 'react'
import {Container, Row, Col, Card, CardDeck, Alert, Badge} from 'react-bootstrap'
class Plans extends Component {
    render() {
        return(
            <div className="containBox">
            <Container>
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">ขั้นตอนที่ 1 เลือกรูปแบบการใช้งาน</h5>
                    </Col>
                    
                </Row>
                <Row className="justify-content-md-center">
                    <Col mx="auto">
                        <CardDeck>
                            <Card className="cardPlan1">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 1 ทดลองใช้ฟรี</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบจำนวน 1 - 50 ข้อ</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ดาวน์โหลดเอกสารต่าง ๆ ฟรี</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ใช้งานได้ทันที ไม่ต้องขอรับสิทธิ์</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 0 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card className="cardPlan2">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 2 อุ่นใจ</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบจำนวน 1 - 500 ข้อ</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ปรับปรุงข้อสอบให้ตรงกับปัจจุบัน</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ดาวน์โหลดเอกสารต่าง ๆ ฟรี</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ใช้งานได้ 1 ปี</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price"><span className="txtPlan">จาก 79 เหลือ</span> ราคา 59 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card className="cardPlan3">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 3 คู่ใจ&nbsp;&nbsp;<Badge pill variant="warning">ยอดนิยม</Badge></Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบจำนวน 1,000 ข้อ ขึ้นไป</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ปรับปรุงข้อสอบให้ตรงกับปัจจุบัน</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ดาวน์โหลดเอกสารต่าง ๆ ฟรี</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ใช้งานได้ 2 ปี</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;<span>พิเศษ สมัครเป็นคู่ลดเหลือ 69 บาท</span></p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price"><span className="txtPlan">จาก 99 เหลือ</span> ราคา 79 บาท <span style={{fontSize:"14px"}}></span></small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        <p style={{fontSize:'12px', fontWeight:'300', margin:'8px 0px 0px 0px', textAlign:'center', color:'#e7400d'}}>" ราคาพิเศษ 1 มกราคม - 31 มีนาคม 2564 "</p>
                    </Col>
                </Row>
            </Container>

            <Container style={{marginTop:"65px"}}>
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">ขั้นตอนที่ 2 ติดต่อรับสิทธิ์ใช้งาน</h5></Col>
                </Row>
                <Row>
                    <Col mx="auto" className="text-center" style={{color:"#5b785b"}}>
                        <Alert style={{backgroundColor:"#f6fff6"}}>
                            <i className='fab fa-facebook'></i>
                            <span style={{fontSize:"14px", fontWeight:'300'}}> <a href="https://facebook.com/chonlatee.sinsart/" target="_blank" rel="noreferrer">Chonlatee Sinsart</a></span>
                            &nbsp; หรือ &nbsp;
                            <i className='fas fa-phone-square'></i> 
                            <span style={{fontSize:"14px", fontWeight:'300'}}> 08-2781-8941</span>
                        </Alert>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Plans
