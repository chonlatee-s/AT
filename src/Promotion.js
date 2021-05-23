import React, { Component } from 'react';
import { Container, Row, Col, Card, CardDeck, Button} from 'react-bootstrap';
import bannerApp from './img/bannerApp2.png';

class Promotion extends Component {
    render() {
        return (
            <Container className="containPromotion">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Row className="justify-content-md-center text-center">
                            <Col> 
                                <a href="https://play.google.com/store/apps/details?id=com.robotApp.robot">
                                    <img src={bannerApp} style={{width:"350px"}} alt="แอปพคิเคชัน นายโรบอท"/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col> 
                                <p className="txtRobot" style={{color:'#627498'}}>แอปพลิเคชัน นายโรบอท</p>
                                <p className="txtTitleApp" style={{color:'#627498', paddingRight:'20px'}}> 
                                    แอปพลิเคชันนี้จัดทำขึ้นเพื่อให้ผู้ที่กำลังเตรียมตัวสอบเข้าทำงานในหน่วยงานราชการ 
                                    หรือรัฐวิสาหกิจ ที่เกี่ยวข้องกับสาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ 
                                    ข้อสอบเหล่านี้ได้ถูกรวบรวมมาจากผู้ที่มีประสบการณ์การสอบมานับครั้งไม่ถ้วน 
                                    จากหลากหลายสังกัด นอกจากนี้ ข้อสอบมีการปรับปรุง แก้ไข เพิ่มเติมอย่างต่อเนื่อง 
                                    เพื่อให้ทันต่อสถานการณ์ปัจจุบัน ดาวน์โหลดได้ฟรีที่ Google Play
                                </p>
                                <a href="https://play.google.com/store/apps/details?id=com.robotApp.robot"><Button variant="info" size="sm" className="btnFull" style={{marginLeft:'0px'}}> ดาวน์โหลดแอปพลิเคชัน</Button></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center text-center">
                    <Col md={10}>
                        <Row>
                            <Col mx="auto">
                                <br/><br/>
                                <p className="txtRobot" style={{color:'#627498', marginTop:'50px'}}> บริการเพื่อคุณ </p>
                                <CardDeck>
                                    <Card className="cardPlan1">
                                        <Card.Body>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-server" viewBox="0 0 16 16">
                                                <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                                                <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79z"/>
                                                <path d="M14.667 11.668c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
                                                </svg>
                                            </div>
                                            <br/>
                                            <Card.Title className="txtCardHead">ข้อสอบมากกว่า 500 ข้อ</Card.Title>
                                            <Card.Text><p className="txtCard">คัดเฉพาะเนื้อหาที่สำคัญ</p></Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="cardPlan2">
                                        <Card.Body>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-calendar2-week" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                                </svg>
                                            </div>
                                            <br/>
                                            <Card.Title className="txtCardHead">ปรับปรุงข้อสอบ</Card.Title>
                                            <Card.Text><p className="txtCard">ติดตามเทคโนโลยีที่ใช้ในปัจจุบัน</p></Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="cardPlan3">
                                        <Card.Body>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                                                </svg>
                                            </div>
                                            <br/>
                                            <Card.Title className="txtCardHead">ใช้งานฟรี</Card.Title>
                                            <Card.Text><p className="txtCard">ใช้งานฟรีทั้งเว็บไซต์ และแอปพลิเคชัน</p></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Promotion

