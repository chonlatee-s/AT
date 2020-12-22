import React, { Component } from 'react';
import { Container, Row, Col, Alert, Button  } from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { connect } from 'react-redux'
import axios from 'axios'

class Register extends Component {

    RegisterLoginSentData = (dataLogin) => {
        // ลงทะเบียนเข้าฐานข้อมูล 
        let qs = require('qs');
        var base64 = require('base-64');
        var utf8 = require('utf8');

        // เช็คว่ามีการลงทะเบียนหรือยัง
        // axios.get(`http://localhost/at_exam/getIdRegis.php?UserId=${dataLogin.UserId}`) 
        axios.get(`${window.location.origin}/getIdRegis.php?UserId=${dataLogin.UserId}`)
        .then((res) => {

            var bytes = base64.decode(res.data);
            var text = utf8.decode(bytes);
            var data = JSON.parse(text)

            if(data.length === 0) { // ถ้ายังไม่ลงทะเบียน ให้นำข้อมูลไปลงทะเบียน
                // axios.post(`http://localhost/at_exam/sentUser.php`, qs.stringify(dataLogin))
                axios.post(`${window.location.origin}/sentUser.php`, qs.stringify(dataLogin)) // encode ให้อยู่ในรูปแบบของ String
                .then((res) => {
                    this.props.dispatchFromStore(dataLogin) // เก็บข้อมูลใน DB สำเร็จก่อน ค่อยเอาไปเก็บใน store
                }).catch((err) => {
                    console.log(err)
                })
            }else { // ถ้ามี เอาข้อมูลมาใช้
                dataLogin.Plan = data[0].plan
                this.props.dispatchFromStore(dataLogin)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    responseGoogle = (res) => {
        let dataLogin = {
            UserId: res.googleId,
            Name: res.profileObj.name,
            Profile: res.profileObj.imageUrl,
            IsLoggedIn: true,
            Plan: '1',
            Type: 'google'
        }
        this.RegisterLoginSentData(dataLogin) // เรียกใช้ฟังก์ชันลงทะเบียน
    }

    responseFacebook = (res) => {
        let dataLogin = {
            UserId: res.userID,
            Name: res.name,
            Profile: res.picture.data.url,
            IsLoggedIn: true,
            Plan: '1',
            Type: 'facebook'
        }
        this.RegisterLoginSentData(dataLogin)
    }

    render() {
        const dataStore = this.props.stateFromStore
        if(dataStore.IsLoggedIn) return <Redirect to='/Exam' />
        return (
            <Container className="containBox">
                <Row>
                    <Col className="text-center">
                        <i><p style={{marginTop:'20px', marginBottom:'30px', color:"#627498", fontWeight:"500", fontSize:"16px"}}>printf ( " แนวข้อสอบครูผู้ช่วย เอกคอมพิวเตอร์ " ) ;</p></i>
                    </Col>
                </Row>
                <Row className="justify-content-md-center text-center">
                    <Col md={6}>
                        <Alert style={{backgroundColor:"#f6fff6"}}>
                            <h5 className="topic2">ลงทะเบียนก่อนเข้าใช้งาน</h5>
                            <GoogleLogin
                                clientId="254303991922-nigsnvlpreviefu3elonr5seecbc95af.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                render={renderProps => (
                                   
                                    <Button  onClick={renderProps.onClick} style={{
                                        backgroundColor: "#ff5f5f",
                                        color: "#ffffff",
                                        border: 'none',
                                        width: '100%',
                                        height:'100%',
                                        padding:'10px'
                                    }}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                    </svg>&nbsp;&nbsp;
                                    ลงทะเบียน</Button >
                                )}
                            />
                            <p className="txtLine"> &nbsp;&nbsp; หรือ &nbsp;&nbsp; </p>
                            <FacebookLogin
                                appId="1826695754154361"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                isMobile={false}
                                render={renderProps => (
                                    <Button onClick={renderProps.onClick} style={{
                                        fontSize: '16px',
                                        backgroundColor: "#395794",
                                        color: "#ffffff",
                                        border: 'none',
                                        padding: '10px',
                                        width: '100%',
                                        height:'100%'
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg> &nbsp;&nbsp; 
                                    ลงทะเบียน</Button>
                                )}
                            />
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

