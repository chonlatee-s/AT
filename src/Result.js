import React, { Component } from 'react'
import {Container, Row, Col, ProgressBar, Alert, Image} from 'react-bootstrap'

// import { connect } from 'react-redux'

class Result extends Component {
    
    render() {
        // const dataStore = this.props.stateFromStore
        return (
            <Container className="containBox">
                <Row className="justify-content-md-center">
                    <Col md="12 mb-4">
                        <h5 className="topic text-center">เฉลยข้อสอบ</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="3" className="text-center mb-2">

                {/* { 
                    dataStore.IsLoggedIn?
                    <div>
                        <Image src ={dataStore.Profile} roundedCircle style={{width:"60px", height:"60px", border: '3px solid #ddd'}}/>
                        <div style={{fontSize:'14px', fontWeight:'300', paddingBottom:'5px', paddingTop:'3px'}}>{dataStore.Name}</div>
                    </div>
                    :null
                       
                } */}
                    
                    <Alert style={{backgroundColor:"#697f69"}}>
                        <p style={{margin:"0px", fontSize:"21px", color:"#fff"}}>คะแนนรวม</p>
                        <p style={{fontSize:"60px", margin:"0px", color:"#fff"}}>{`${this.props.score}/${this.props.result.length}`}</p>
                        <ProgressBar striped variant="info" now={(this.props.score*100)/this.props.result.length} label={`${(this.props.score*100)/this.props.result.length}%`} style={{height: "10px"}}/>
                    </Alert>
                    </Col>
                    <Col md="12" lg="9">
                        <div className="txtProfile">
                            {
                                this.props.result.map((item,index)=>{
                                    return (
                                        <div key={index}>
                                            <p className="question">ข้อ {index+1} {item.question}</p>
                                            <p className="result"><span style={{color:"#5b785b", fontWeight:300}}>ตอบ</span> 
                                                {
                                                    item.reply==='1' ?  ' '+item.ch1 :
                                                    item.reply==='2' ?  ' '+item.ch2 :
                                                    item.reply==='3' ?  ' '+item.ch3 : 
                                                    item.reply==='4' ?  ' '+item.ch4 : ' ไม่ได้ตอบคำถาม'
                                                }
                                            </p>
                                            
                                            {
                                                item.check===true ? null : 
                                                <p className="result">
                                                <span style={{color:"#5b785b", fontWeight:300}}>เฉลย </span>
                                                    {
                                                        item.answer==='1' ? item.ch1 :
                                                        item.answer==='2' ? item.ch2 :
                                                        item.answer==='3' ? item.ch3 : item.ch4
                                                    }
                                                </p>
                                            }
                                           
                                            <div className="checkAns">
                                                {
                                                    item.check===true ? 
                                                    <svg className="bi bi-check" width="0.8em" height="0.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                                    </svg>
                                                    :
                                                    <svg className="bi bi-x" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                                                    </svg>
                                                }
                                                <span style={{fontSize:"10px"}}> 
                                                {
                                                    item.ref===''?<del>อ้างอิง</del>
                                                    :<a href={item.ref} target="_blank" rel="noopener noreferrer">อ้างอิง</a>
                                                }
                                                </span>
                                            </div>
                                            <hr style={{marginTop:"0px"}}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         stateFromStore : state.data
//     }
// }
// export default connect(mapStateToProps, null) (Result)
export default Result