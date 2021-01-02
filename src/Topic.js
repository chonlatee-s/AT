import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import welcome from './img/welcome.jpg';
class Topic extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">เนื้อหาที่ออกสอบ</h5></Col>
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
                            <p className="txtHead">เนื้อหาที่นำมาออกข้อสอบ ปรับปรุงตามสถานการณ์ปัจจุบัน</p>
                            <p></p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> สถาปัตยกรรมคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบเครือข่ายคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบปฏิบัติการคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบเลขฐาน</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> โครงสร้างข้อมูลและอัลกอริทึม</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> การเขียนโปรแกรมคอมพิวเตอร์ ภาษา C และ ภาษา Python</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> การวิเคราะห์และออกแบบระบบ</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบฐานข้อมูล</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> การใช้งานโปรแกรมคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> กฏหมายที่เกี่ยวข้องกับคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เทคโนโลยีสารสนเทศและการสื่อสาร</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เทคโนโลยีดิจิทัล</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> การคิดเชิงคำนวณ</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เทคโนโลยีปัญญาประดิษฐ์และข้อมูลมหัต</p>
                            <p></p>
                            <p className="txtDetail">ปรับปรุงข้อสอบล่าสุด วันที่ 1 มกราคม 2564</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Topic
