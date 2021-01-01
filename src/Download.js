import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import download from './img/download.jpg';
class Download extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">ดาวน์โหลด</h5></Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col md="12" lg="3" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={download} className="img-fluid" width="120px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'5px', marginBottom:'0px', color:"#697f69", fontWeight:"300", fontSize:"12px"}}>printf(" สวมหน้ากากอนามัย ก่อนดาวน์โหลด ");</p>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">แบ่งปันข้อสอบ</p>
                            <p></p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> สถาปัตยกรรมคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบเครือข่ายคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบปฏิบัติการคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบเลขฐาน</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> การเขียนโปรแกรมคอมพิวเตอร์ ภาษา C และ ภาษา Python</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ระบบฐานข้อมูล</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เทคโนโลยีสารสนเทศและการสื่อสาร</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เทคโนโลยีปัญญาประดิษฐ์และข้อมูลมหัต</p>
                            <p></p>
                            <p className="txtDetail">ปรับปรุงข้อสอบล่าสุด วันที่ 1 มกราคม 2564</p>
                            <p className="txtDetail"><a href="https://drive.google.com/drive/folders/1FKL5nJ2hwifRDAB9mN2zmX-Wqfnj1Yp9?usp=sharing" target="_blank" rel="noreferrer">[ ดาวน์โหลด ]</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Download
