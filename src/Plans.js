import React, { Component } from 'react'
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap'
class Plans extends Component {
    render() {
        return(
            <div style={{marginTop:"120px"}}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="auto"><h5>ขั้นตอนที่ 1 เลือกแพลน</h5></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col mx="auto">
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 1 แบ่งปันความรู้ (ใช้งานฟรี)</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard">- ข้อสอบคอมพิวเตอร์ 1-50 ข้อ</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 0 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 2 ช่วยค่ากาแฟ</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard">- ข้อสอบคอมพิวเตอร์ 1-500 ข้อ</p>
                                        <p className="txtCard">- ดาวน์โหลดเอกสารต่าง ๆ</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="price">ราคา 49 บาท</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="txtCardHead">แบบที่ 3 เก็บแรงแต่งงาน (คุ้มมาก แนะนำ)</Card.Title>
                                    <Card.Text>
                                        <p className="txtCard">- ข้อสอบคอมพิวเตอร์ตั้งแต่ 1,000 ข้อ ขึ้นไป</p>
                                        <p className="txtCard">- ดาวน์โหลดข้อสอบ ภาค ก และ ข เพิ่มเติม</p>
                                        <p className="txtCard">- ดาวน์โหลดเอกสารต่าง ๆ</p>
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
                    <Col xs="auto"><h5>ขั้นตอนที่ 2 รับสิทธิ์ใช้งาน</h5></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card className="mb-2">
                            <Card.Header>ช่องทางติดต่อขอรับสิทธิ์ มีดังนี้</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p className="txtCard">Facebook</p>
                                    <p className="txtCard">Email</p>
                                    <p className="txtCard">โทรศัพท์</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Plans
