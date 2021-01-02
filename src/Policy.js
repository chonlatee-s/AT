import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
class Policy extends Component {
    render() {
        return(
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col><h5 className="topic text-center">ข้อตกลงการใช้งาน</h5></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            <p className="txtHead">เกี่ยวกับนายโรบอท.com</p>
                            <p className="txtDetail">เว็บไซต์นี้จัดทำขึ้นเพื่อให้ผู้ที่กำลังเตรียมตัวสอบครูผู้ช่วย หรือข้าราชการอื่น ๆ 
                            ที่เกี่ยวข้องกับสาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ข้อสอบเหล่านี้ได้ถูกรวบรวมมาจากผู้ที่มีประสบการณ์การสอบมานับครั้งไม่ถ้วน
                            จากทุกสังกัด นอกจากนี้ ข้อสอบมีการปรับปรุงตลอดเวลา เพื่อให้ทันต่อสถานการณ์ปัจจุบัน
                            </p>
                            <p className="txtHead">ขั้นตอนการเลือกรูปแบบการใช้งาน และขอรับสิทธิ์</p>
                            <p className="txtDetail">สำหรับรูปแบบการใช้งานมีทั้งหมด 3 รูปแบบ ผู้เข้าทดสอบจะต้องเลือกอย่างใดอย่างหนึ่ง
                            หลังจากเลือกรูปแบบการใช้งานเสร็จ ในกรณีที่เลือกแบบที่ 2 และ 3 จะต้องแจ้งให้ผู้ดูแลระบบทราบ เพื่อที่จะได้อนุมัติสิทธิ์การเข้าใช้งาน
                            ยกเว้นกรณีที่เลือก แบบที่ 1 สามารถเข้าใช้งานได้ทันที แต่จะมีข้อจำกัดบางอย่างตามที่ได้แจ้งไว้
                            </p>
                            <p className="txtHead">การลงทะเบียนเข้าใช้งาน</p>
                            <p className="txtDetail">ผู้เข้าทดสอบที่ได้รับสิทธิ์แบบที่ 2 และ 3 จะต้องเข้าสู่ระบบก่อนทำข้อสอบ เพื่อให้ระบบตรวจสอบความถูกต้อง
                            สำหรับข้อมูลเพื่อเข้าสู่ระบบ จะได้รับหลังจากที่มีการขอสิทธิ์ และอนุมัติสิทธิ์แล้ว หนึ่งผู้ใช้งานต่อหนึ่งสิทธิ์ หากตรวจสอบพบกว่าทำผิดกฎดังกล่าว ผู้ดูแลระบบ
                            จะดำเนินการตัดสิทธิ์ทันที โดยไม่บอกล่วงหน้า
                            </p>
                            <p className="txtHead">ก่อนจากกัน</p>
                            <p className="txtDetail">ขอขอบคุณทุกท่านที่มาร่วมทดสอบกับนายโรบอท.com  
                            ข้อสอบทุกข้อที่มีอยู่ในระบบ ล้วนถูกคัดกรองแล้วเป็นอย่างดี รวมไปถึงเนื้อหาต่าง ๆ ที่ครอบคลุมหลักสูตรการสอบในวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ
                            ขอให้ผู้ทดสอบฝึกทำข้อสอบบ่อย ๆ จนขึ้นใจ รับรองว่าวิชาเอกจะไม่ใช่เรื่องยากอีกต่อไป หากมีเวลาว่างเมื่อไหร่ก็แวะมา เราพร้อมเปิดรอเสมอ สุดท้ายนี้ ขอให้โชคดีมีชัยในการสอบด้วยเทอญ
                            </p>
                            <p/>
                            <p className="txtDetail">หากมีข้อสงสัย คำแนะนำ หรือคำติชมใด ๆ แจ้งได้ที่อีเมล kruchonlatee@gmail.com</p>
                            <p className="txtDetail">ผู้ดูแลระบบ</p>
                            <hr/>
                            <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>รับสิทธิ์เข้าใช้งาน</span></NavLink>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <NavLink to="/RegisterAndTest"><span style={{fontSize:'12px', fontWeight:'300'}}>ทำแบบทดสอบ</span></NavLink>
                            
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Policy
