import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import profile from './img/profile.jpg';
class AboutMe extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">ผู้ก่อตั้ง นายโรบอท.com</h5></Col>
                </Row>
                <Row>
                    <Col md="12" lg="3" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={profile} className="img-fluid profile" width="80px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'10px', marginBottom:'0px', color:"#697f69", fontWeight:"300", fontSize:"14px"}}>ชลธี สินสาตร์</p>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">การศึกษา</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ESL Program, City College of San Francisco</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ปริญญาตรี สาขาเทคโนโลยีคอมพิวเตอร์ คณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                            <p className="txtHead">ประสบการณ์ด้านคอมพิวเตอร์</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> เป็นหนึ่งในทีมของสถาบันสหกิจศึกษาและพัฒนาสื่ออิเล็กทรอนิกส์ไทย-เยอรมัน ออกแบบและพัฒนาเกมการแข่งขัน ตอบปัญหาทางธรรมะ ในงานวันวิสาขบูชาโลก</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ชนะเลิศการประกวดสื่อการสอน ประเภทซอฟต์แวร์ ในงาน Teaching Academy 2015 (ระดับประเทศ)</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> พัฒนาแอปพลิเคชันจัดการโภชนาการโคนม ให้กับองค์การส่งเสริมกิจการโคนมแห่งประเทศไทย</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> พัฒนาโปรแกรมตรวจโรคเบื้องต้นด้วยปิงปองเจ็ดสีให้กับโรงพยาบาลส่งเสริมสุขภาพตำบล</p>
                            <p className="txtDetail">                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> พัฒนาระบบสารสนเทศให้องค์กรต่าง ๆ เช่น กระทรวงพาณิชย์ เบทราโก สมศ.</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ครูสาขาคอมพิวเตอร์ธุรกิจ</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> พัฒนาเว็บไซต์สอบครูผู้ช่วย ครูผู้ช่วย.com</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> พัฒนาแอปพลิเคชันสอบครูผู้ช่วย ครูผู้ช่วย</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> หัวหน้างานศูนย์ข้อมูลสารสนเทศ</p>
                            <p className="txtHead">กำลังศึกษา</p>
                            <p className="txtDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                                </svg> ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์ (Human–computer interaction)</p>
                            <p></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutMe
