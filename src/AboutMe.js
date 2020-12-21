import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import profile from './img/profile2.jpg';
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
                            <Image src={profile} className="img-fluid profile" width="90px" alt="คอมพิวเตอร์" />
                        </Col>
                        <p style={{marginTop:'10px', marginBottom:'0px', color:"#697f69", fontWeight:"800", fontSize:"18px"}}>ชลธี สินสาตร์</p>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">การศึกษา</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ESL Program City College of San Francisco California United States</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ปริญญาตรี สาขาเทคโนโลยีคอมพิวเตอร์ คณะครุศาสตร์อุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                            <p className="txtHead">ประสบการณ์ด้านคอมพิวเตอร์</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> เป็นหนึ่งในทีมของสถาบันสหกิจศึกษาและพัฒนาสื่ออิเล็กทรอนิสก์ไทย-เยอรมัน ออกแบบและพัฒนาเกมการแข่งขัน ตอบปัญหาทางธรรมะ ในงานวิสาขบูชาโลก</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> พัฒนาแอปพลิเคชันจัดการโภชนาการโคนม และถวายรายงานกรมสมเด็จพระเทพรัตนราชสุดาฯ ในงานวันโคนมแห่งชาติ</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ชนะเลิศการประกวดสื่อการสอน ประเภทซอฟต์แวร์ ในงาน Teaching Academy 2015 (ระดับประเทศ)</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ชนะเลิศการประกวดทำเว็บไซต์วันต่อต้านยาเสพติด ในระดับอุดมศึกษา</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> พัฒนาโปรแกรมตรวจโรคเบื้องต้นด้วยปิงปองเจ็ดสีให้กับโรงพยาบาลส่งเสริมสุขภาพตำบล</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ครูสาขาคอมพิวเตอร์ธุรกิจ</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> พัฒนาเว็บไซต์สอบครูผู้ช่วย ครูผู้ช่วย.com</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> พัฒนาแอปพลิเคชันสอบครูผู้ช่วย ครูผู้ช่วย</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> หัวหน้างานศูนย์ข้อมูลสารสนเทศ</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> พัฒนาระบบสารสนเทศให้องค์กรต่าง ๆ เช่น กระทรวงพาณิชย์, เบทราโก, สมศ.</p>
                            <p className="txtHead">กำลังศึกษา</p>
                            <p className="txtDetail"><i className='far fa-check-circle'></i> ปฏิสัมพันธ์ระหว่างมนุษย์กับคอมพิวเตอร์ (Human–computer interaction)</p>
                            <p></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutMe
