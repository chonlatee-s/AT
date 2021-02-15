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
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> สถาปัตยกรรมคอมพิวเตอร์</p>
                            <p className="txtDetail">                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ระบบเครือข่ายคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ระบบปฏิบัติการคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ระบบเลขฐาน</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> โครงสร้างข้อมูลและอัลกอริทึม</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> การเขียนโปรแกรมคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> การวิเคราะห์และออกแบบระบบ</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ระบบฐานข้อมูล</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> การใช้งานโปรแกรมคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> กฏหมายที่เกี่ยวข้องกับคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> เทคโนโลยีสารสนเทศและการสื่อสาร</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> เทคโนโลยีดิจิทัล</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> การคิดเชิงคำนวณ</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> เทคโนโลยีปัญญาประดิษฐ์และข้อมูลมหัต</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> เทคโนโลยี Internet of Things (IoT)</p>
                            <p></p>
                            <p className="txtDetail">ปรับปรุงข้อสอบล่าสุด วันที่ 14 กุมภาพันธ์ 2564</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Topic
