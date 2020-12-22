import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Bar() {
    return (
        <Container fluid className="boxBar">
            <hr style={{marginTop:"0px"}}/>
            <Row>
                <Col>
                    <p style={{margin:"0px"}}>แนวข้อสอบครูผู้ช่วย เอกคอมพิวเตอร์</p>
                    <p>สงวนลิขสิทธิ์ © 2563 นายโรบอท.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bar;

