import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import profile from './img/profile.jpg';
class AboutMe extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col xs="auto"><h5 className="topic">เกี่ยวกับผู้จัดทำ</h5></Col>
                </Row>
                <Row>
                    <Col md="12" lg="3" className="text-center mb-2">
                        <Col mx="auto">
                            <Image src={profile} className="img-fluid profile" width="120px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'10px', marginBottom:'0px', color:"#697f69", fontWeight:"800", fontSize:"18px"}}>ชลธี สินสาตร์</p>
                        {/* <p style={{marginTop:'0px', color:"#5b785b", fontWeight:"300", fontSize:"12px"}}>ผู้ดูแลระบบ</p> */}
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">การศึกษา</p>
                            <p className="txtDetail">- ESL Program City College of San Francisco California United States</p>
                            <p className="txtDetail">- ปริญญาตรี เทคโนโลยีคอมพิวเตอร์ คณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                            <p className="txtHead">ประสบการณ์ด้านคอมพิวเตอร์</p>
                            <p className="txtDetail">- เป็นหนึ่งในทีมของสถาบันสหกิจศึกษาและพัฒนาสื่ออิเล็กทรอนิสก์ไทย-เยอรมัน ออกแบบและพัฒนาเกมการแข่งขัน ตอบปัญหาทางธรรมะ ในงานวิสาขบูชาโลก</p>
                            <p className="txtDetail">- พัฒนาแอปพลิเคชันจัดการโภชนาการโคนม และถวายรายงานกรมสมเด็จพระเทพรัตนราชสุดาฯ ในงานวันโคนมแห่งชาติ</p>
                            <p className="txtDetail">- ชนะเลิศการประกวดสื่อการสอน ประเภทซอฟต์แวร์ ในงาน Teaching Academy 2015 (ระดับประเทศ)</p>
                            <p className="txtDetail">- ครูสาขาคอมพิวเตอร์ธุรกิจ</p>
                            <p className="txtDetail">- หัวหน้างานศูนย์ข้อมูลสารสนเทศ</p>
                            <p className="txtDetail">- พัฒนาโปรแกรมตรวจโรคเบื้องต้นด้วยปิงปองเจ็ดสีให้กับโรงพยาบาลส่งเสริมสุขภาพตำบล</p>
                            <p className="txtDetail">- พัฒนาเว็บไซต์สอบครูผู้ช่วย ครูผู้ช่วย.com</p>
                            <p className="txtDetail">- พัฒนาแอปพคิเคชันสอบครูผู้ช่วย ครูผู้ช่วย</p>
                            <p className="txtDetail">- พัฒนาระบบสารสนเทศให้องค์กรต่าง ๆ เช่น กระทรวงพาณิชย์, เบทราโก, สมศ.</p>
                            <p className="txtHead">กำลังศึกษา</p>
                            <p className="txtDetail">- ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์</p>
                            <p></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutMe
