import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
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
                        <p className="txtDetail">เว็บไซต์นี้จัดทำขึ้นเพื่อให้ผู้ที่กำลังเตรียมตัวสอบครูผู้ช่วย หรือข้าราชการอื่น ๆ 
                            ที่เกี่ยวข้องกับสาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ข้อสอบเหล่านี้ได้ถูกรวบรวมมาจากผู้ที่มีประสบการณ์การสอบมานับครั้งไม่ถ้วน
                            จากทุกสังกัด นอกจากนี้ ข้อสอบมีการปรับปรุง แก้ไข เพิ่มเติมอย่างต่อเนื่อง เพื่อให้ทันต่อสถานการณ์ปัจจุบัน 
                            </p>
                            
                            <p/>
                            <p className="txtDetail">สามารถทำข้อสอบได้ฟรี ไม่มีค่าใช้จ่ายใด ๆ แต่ถ้าอยากเลี้ยงกาแฟแอดมินสักแก้ว ก็ยินดีครับ :)
                            ร่วมหารค่ากาแฟได้ที่ ธ.กรุงไทย 317-0-125591 ชลธี สินสาตร์ หรือพร้อมเพย์ 082 781 8941
                            </p>

                            <p/>
                            <p className="txtDetail">หากมีข้อสงสัย คำแนะนำ หรือคำติชมใด ๆ แจ้งได้ที่อีเมล kruchonlatee@gmail.com</p>
                            <p className="txtDetail">ผู้ดูแลระบบ</p>
                            <hr/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Policy
