import React, { Component } from 'react';
import { Container, Row, Col, Alert  } from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

class Register extends Component {

    state = {
        showStatusLogin : false
    }

    checkLogin = () => {
        const base64 = require('base-64');
        const utf8 = require('utf8');
        let dataLogin = {
            name: '',
            IsLoggedIn: '',
            plan: ''
        }
        const email = document.getElementById('email').value
        const password = base64.encode(utf8.encode(document.getElementById('password').value))

        // axios.get(`http://localhost/at_exam/checkUser.php?email=${email}&password=${password}`) 
        axios.get(`${window.location.origin}/checkUser.php?email=${email}&password=${password}`)
        .then((res) => {
            if(res.data===false) this.setState({showStatusLogin:true}) // Login ไม่สำเร็จ
            else {
                dataLogin.name = res.data.name
                dataLogin.IsLoggedIn = true
                dataLogin.plan = res.data.plan
                dataLogin.check_date_exp = res.data.check_date_exp
                dataLogin.date_exp = `ใช้งานได้ถึง ${res.data.day}-${res.data.month}-${Number(res.data.year)+543}`
                this.props.dispatchFromStore(dataLogin)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    guestFree = () => {
        let dataLogin = {
            name: 'ผู้ใช้ทั่วไป',
            IsLoggedIn: true,
            plan: '1'
        }
        this.props.dispatchFromStore(dataLogin)
    }

    render() {

        const dataStore = this.props.stateFromStore
        if(dataStore.check_date_exp === '1') return <Redirect to='/Expire' /> // ถ้าหมดอายุ
        else {
            if(dataStore.IsLoggedIn) return <Redirect to='/Exam' />
        }

        return (
            <Container className="containBox">
                <Row className="justify-content-md-center text-center">
                    <Col md={5}>
                        <p/>
                        <Alert style={{
                            backgroundColor:"#f6fff6",
                            padding: "12px",
                            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.10)",
                            borderRadius: "5px"
                        }}>
                            <h5 className="topic2">เข้าสู่ระบบเพื่อทำข้อสอบ</h5>
                            {
                                (this.state.showStatusLogin) ? <p style={{margin:'10px', color:"#eb5749", fontWeight:"500", fontSize:"14px"}}> ไม่พบข้อมูล ตรวจสอบอีเมล และรหัสผ่านอีกครั้ง </p> : null
                            }
                            <input type="text" placeholder="อีเมล" className="login mb-2" id="email"/>
                            <input type="password" placeholder="รหัสผ่าน (ลืมรหัสผ่าน ติดต่อแอดมิน)" className="login mb-2" id="password"/>
                            <input type="button" className="btnLogin" value="เข้าสู่ระบบ" onClick={this.checkLogin}/>
                            <p className="txtLine"> &nbsp;&nbsp; หรือ &nbsp;&nbsp; </p>
                            <input type="button" className="btnLoginFree" value="ทดลองใช้ฟรี" onClick={this.guestFree}/>
                        </Alert>
                        <NavLink to="/Policy"><span style={{fontSize:'12px', fontWeight:'300'}}>ข้อตกลงการใช้งาน</span></NavLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>รับสิทธิ์เข้าใช้งาน</span></NavLink>
                    </Col>
                </Row>
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

