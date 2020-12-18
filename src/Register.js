import React, { Component } from 'react';
import { Container, Row, Col, Alert, Button  } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class Register extends Component {
    responseGoogle = (res) => {
        let dataLogin = {
            UserId: res.googleId,
            Name: res.profileObj.name,
            Profile: res.profileObj.imageUrl,
            IsLoggedIn: true,
            type: 'google'
        }
        this.props.dispatchFromStore(dataLogin)
    }

    responseFacebook = (res) => {
        let dataLogin = {
            UserId: res.userID,
            Name: res.name,
            Profile: res.picture.data.url,
            IsLoggedIn: true,
            type: 'facebook'
        }
        this.props.dispatchFromStore(dataLogin)
    }
    render() {
        return (
            <Container className="containBox">
                <Row className="justify-content-md-center text-center">
                    <Col md={6}>
                        <Alert style={{backgroundColor:"#f9f7f3"}}>
                            <h5 className="topic2">ลงทะเบียนก่อนเข้าใช้งาน</h5>
                            <GoogleLogin
                                clientId="254303991922-di1i2i7bcp7fuvtp8ib5a7uirsq2kopm.apps.googleusercontent.com"
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
                                appId="761688894366809"
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
                        <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>ข้อตกลงการใช้งาน</span></NavLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <NavLink to="/PlansAndContact"><span style={{fontSize:'12px', fontWeight:'300'}}>รับสิทธิ์เข้าใช้งาน</span></NavLink>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Register
