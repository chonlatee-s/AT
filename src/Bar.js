import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Bar() {
    return (
        <Container fluid className="boxBar">
            <hr style={{marginTop:"0px"}}/>
            <Row>
                <Col>
                    <p style={{margin:"0px"}}>แนวข้อสอบวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ</p>
                    <p>สงวนลิขสิทธิ์ © 2564 นายโรบอท.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bar;

