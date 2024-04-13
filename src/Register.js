import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
// import Ads from './Ads';

class Register extends Component {

    guestFree = () => {
        let dataLogin = {
            name: 'ผู้ใช้ทั่วไป',
            IsLoggedIn: true
        }
        this.props.dispatchFromStore(dataLogin)
    }

    render() {
        const dataStore = this.props.stateFromStore
        if(dataStore.IsLoggedIn) return <Redirect to='/Exam' />

        return (
            <Container className="containBox">
                <Row className="justify-content-md-center text-center">
                    <Col md={6}>
                        <Alert style={{
                            backgroundColor:"#f6fff6",
                            padding: "12px",
                            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.10)",
                            borderRadius: "5px"
                        }}>
                            <p className="topic2">แนวข้อสอบวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ</p>
                            <Alert style={{backgroundColor:'#f8f2e8'}}>
                                <p style={{fontSize:'16px', marginBottom:'5px', color:'#b28644'}}>เลี้ยงชานมไข่มุกแอดมิน :)</p>
                                <p style={{fontSize:'12px', margin:'0px', color:'#b28644'}}>พร้อมเพย์ 082 781 8941 ชลธี สินสาตร์</p>
                            </Alert>
                            <hr/>
                            <input type="button" className="btnLoginFree" value="ทำข้อสอบ" onClick={this.guestFree}/>
                        </Alert>
                        <NavLink to="/Policy"><span style={{fontSize:'12px', fontWeight:'300'}}>ข้อตกลงการใช้งาน</span></NavLink>
                    </Col>
                </Row>
                {/* <Ads/> */}
            </Container>
        );
    }
}

// export default Register
const mapStateToProps = (state) => { //mapStateToProps แปลงค่า state ให้เป็น props
    return {
        stateFromStore : state.data // เก็บค่า state ที่ได้จาก stroe
    }
}
const mapDispatchToProps = dispatch => { //mapDispatchToProps ฟังก์ชันที่ store ส่งมาให้กับคออมโพเนนต์ ผ่าน props
    return {
        dispatchFromStore : (dataLogin) => { // เมื่อคอมโพเนนต์ปัจจุบันต้องการใช้ dispatch ก็ใช้คำสั่งนี้เลย
            return dispatch({ type:'ADD_DATA', playload:dataLogin }) // เรียกใช้ dispatch ผ่านค่าฟังก์ชัน
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Register) // ผ่านค่า map ไปยังฟังก์ขัน connect

