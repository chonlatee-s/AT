import React from 'react';
import exp from './img/exp.jpg';
import {Container, Row, Col, Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

function Expire() {
  return (
        <Container className="containBox">
            <Row className="justify-content-md-center text-center">
                <Col md={6}>
                    <Image src={exp} className="img-fluid" width="200px" alt="404" />
                    <p style={{fontSize:'18px', fontWeight:'500', marginTop:"25px", color:"#627498", marginBottom:"5px"}}>บัญชีของคุณหมดอายุการใช้งาน</p>
                    <NavLink to="/PlansAndContact"><p style={{fontSize:'14px', fontWeight:'300', color:"#627498"}}>ไม่ต้องเสียใจนะ ต่ออายุการใช้งานได้ที่ <span style={{color:'#e7400d'}}>รับสิทธิ์เข้าใช้งาน</span></p></NavLink>
                </Col>
            </Row>
        </Container>
  );
}

export default Expire;
