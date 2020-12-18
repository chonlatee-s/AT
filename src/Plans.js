import React, { Component } from 'react'
import {Container, Row, Col, Card, CardDeck, Alert, Badge} from 'react-bootstrap'
class Plans extends Component {
    render() {
        return(
            <div className="containBox">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="auto"><h5 className="topic">ขั้นตอนที่ 1 เลือกแพลน</h5></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col mx="auto">
                        <CardDeck>
                            <Card className="cardPlan1">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 1 ใช้งานฟรี</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบคอมพิวเตอร์ 1-30 ข้อ</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 0 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card className="cardPlan2">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 2</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบคอมพิวเตอร์ 1-500 ข้อ</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ปรับปรุงข้อสอบให้ตรงกับปัจจุบัน</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 49 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card className="cardPlan3">
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 3 &nbsp;&nbsp;<Badge pill variant="warning">แนะนำ</Badge></Card.Title>
                                    <Card.Text>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ข้อสอบคอมพิวเตอร์ตั้งแต่ 1,000 ข้อ ขึ้นไป</p>
                                        <p className="txtCard"><i className='far fa-check-circle'></i> &nbsp;ปรับปรุงข้อสอบให้ตรงกับปัจจุบัน</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 69 บาท</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>

            <Container style={{marginTop:"60px"}}>
                <Row className="justify-content-md-center">
                    <Col xs="auto"><h5 className="topic">ขั้นตอนที่ 2 ติดต่อรับสิทธิ์เข้าใช้งาน</h5></Col>
                </Row>
                <Row>
                    <Col mx="auto" className="text-center" style={{color:"#b7996c"}}>
                        <Alert style={{backgroundColor:"#f9f7f3"}}>
                            <i className='fab fa-facebook'></i>
                            <span style={{fontSize:"18px"}}> soonnung</span> &nbsp;&nbsp;
                            <i className='fas fa-phone-square'></i>
                            <span style={{fontSize:"14.5px"}}> 0827818941</span>
                        </Alert>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Plans
