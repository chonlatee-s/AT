import React from 'react';
import fail from './img/404.png';
import {Container, Row, Col, Image} from 'react-bootstrap'
function Error() {
  return (
        <Container className="containBox">
                <Row className="justify-content-md-center text-center">
                    <Col md={6}>
                        <Image src={fail} className="img-fluid" width="200px" alt="404" />
                        <p style={{fontSize:'18px', fontWeight:'500', marginTop:"25px", color:"#627498", marginBottom:"5px"}}>ไม่พบหน้าที่ต้องการ</p>
                        <p style={{fontSize:'14px', fontWeight:'300', color:"#627498"}}>ยิ้มสักนิดก่อนจากกัน</p>
                    </Col>
                </Row>
            </Container>
  );
}

export default Error;
