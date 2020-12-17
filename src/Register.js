import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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
            <Container style={{ marginTop: "120px" }}>
                <Row className="justify-content-md-center text-center">
                    <Col xs={12}>
                        <GoogleLogin
                            clientId="254303991922-di1i2i7bcp7fuvtp8ib5a7uirsq2kopm.apps.googleusercontent.com"
                            onSuccess={this.responseGoogle}
                            buttonText="ลงทะเบียนด้วย Google"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} style={{
                                    fontSize: '16px',
                                    backgroundColor: "#ff5f5f",
                                    color: "#ffffff",
                                    border: 'none',
                                    padding: '10px',
                                    width: '50%',

                                }}>ลงทะเบียนด้วย Google</button>
                            )}
                        />
                        <p style={{ marginTop: '12px' }}>หรือ</p>
                        <FacebookLogin
                            appId="761688894366809"
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            isMobile={false}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} style={{
                                    fontSize: '16px',
                                    backgroundColor: "#395794",
                                    color: "#ffffff",
                                    border: 'none',
                                    padding: '10px',
                                    width: '50%'
                                }}>ลงทะเบียนด้วย Facebook</button>
                            )}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Register
