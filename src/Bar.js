import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Bar() {
    return (
        <Container fluid className="boxBar">
            <Row>
                <Col>
                    <p>Admin</p>
                    <p style={{fontSize:"14px"}}>สงวนลิขสิทธิ์ © 2562 ศูนย์หนึ่ง.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Bar;

