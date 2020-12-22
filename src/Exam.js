import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Row, Col, ProgressBar, Button, Spinner, Image } from 'react-bootstrap'
import ExamList from './ExamList'
import Result from './Result'
import axios from 'axios'
import { connect } from 'react-redux'

class Exam extends Component {
     state = {
        waitResult: false, // รอสอบเสร็จเพราะต้องส่งข้อมูลไปหน้า Result ต่อ (เปิดตอนแสดงผลลัพธ์)
        waitData: false, // รอโหลดข้อสอบ ถ้าสอบเสร็จตรวจคำตอบเสร็จให้ปิด (เปิดตอนทำข้อสอบ)

        examLists: [{ id: '', question: '', ch1: '', ch2: '', ch3: '', ch4: '', answer: '', ref: '', reply: '0', check: false }],
        arrPosition: 0,
        score: 0,
        btnPrev: false,
        btnNext: true,
        btnCheckAnser: false,

        minute: 9,
        sec: 59,
        colorBar: 'danger',
        showText: false
    }
////////////////// step 1 pull exam /////////////////////////////
    getExam = () => {
       
        let exam = []
        var base64 = require('base-64');
        var utf8 = require('utf8');

        // axios.get(`http://localhost/at_exam/getExams.php`)
        axios.get(`${window.location.origin}/getExams.php`)
            .then((res) => {

                var bytes = base64.decode(res.data);
                var text = utf8.decode(bytes);
                var data = JSON.parse(text)
                exam = data.map((item) => {
                    return {
                        id: item.id,
                        question: item.question,
                        ch1: item.ch1,
                        ch2: item.ch2,
                        ch3: item.ch3,
                        ch4: item.ch4,
                        answer: item.answer,
                        ref: item.ref,
                        reply: '0', // เพิ่มมาใหม่ เพื่อเก็บคำตอบ
                        check: false
                    }
                })

                this.setState({
                    examLists: exam , waitData: true, showText: false
                }, () => {
                    this.startTimer() // รับข้อมูลเสร็จ ให้เวลาเริ่มทำงาน
                })

            })
            .catch((err) => {
                this.setState({ showText: true }) // ถ้าไม่พบข้อมูล
                console.log(err)
            })

    }
    componentDidMount() { // ดึงข้อสอบจากฐานข้อมูล
        this.getExam()
    }

/////////////////// step 2 start times ///////////////////////////////
    startTimer = () => {
        this.clockCall = setInterval(() => {
            this.decrementClock()
        }, 1000);
    }
    decrementClock = () => {
        if (this.state.sec !== 0) {
            this.setState({ sec: this.state.sec - 1 })
        }
        else {
            if (this.state.minute === 0) {
                clearInterval(this.clockCall)
                this.checkAnswer();
                // console.log("time out!!!")
            }
            else {
                this.setState({ minute: this.state.minute - 1 })
                this.setState({ sec: 59 })
            }
        }
    }
    changeZeroSec = (a) => {
        return a < 10 ? `0${a}` : a
    }

/////////////////////// step 3 control /////////////////////////////////
    nextQuestion = (data) => {
        // ถ้ายังไม่ถึงตำแหน่งสุดท้ายก็บวกเพิ่มเรื่อย ๆ
        if (this.state.arrPosition !== this.state.examLists.length - 1) this.setState({ btnPrev: true, arrPosition: this.state.arrPosition + 1 })
        // หาเจอตำแหน่งสุดท้ายให้ปุ่ม Next ซ่อน
        if (this.state.arrPosition + 1 === this.state.examLists.length - 1) { this.setState({ btnNext: false }) }
        const dataExam = [...this.state.examLists]

        // หาตำแหน่งที่กดมา
        const newData = dataExam.findIndex((item) => {
            return item.id === data.id
        })

        // แก้ไขเฉพาะตำแหน่งที่กดมา
        dataExam[newData] = {
            id: data.id,
            question: data.question,
            ch1: data.ch1,
            ch2: data.ch2,
            ch3: data.ch3,
            ch4: data.ch4,
            answer: data.answer,
            ref: data.ref,
            reply: data.reply,
            check: data.check
        }

        // อัพเดทข้อมูลใหม่
        this.setState({
            examLists: dataExam
        }, () => {
            this.checkFinished()
            this.checkBar()
        })
    }
    // สำหรับเช็คปุ่ม next prev
    setArr = (e) => {
        if (e === 'next') {
            this.setState({ btnPrev: true, arrPosition: this.state.arrPosition + 1 })
            if (this.state.arrPosition + 1 === this.state.examLists.length - 1) { this.setState({ btnNext: false }) }
        }
        else {
            this.setState({ btnNext: true, arrPosition: this.state.arrPosition - 1 })
            if (this.state.arrPosition - 1 === 0) { this.setState({ btnPrev: false }) }
        }
    }
    checkFinished = () => {
        let check = 0
        this.state.examLists.forEach((item) => {
            if (item.reply === '0') check += 1
        })
        if (check === 0) this.setState({ btnCheckAnser: true })
    }

    checkCount = () => {
        let count = 0
        this.state.examLists.map((item) => {
            return item.reply !== '0' ? count += 1 : null
        })
        return count
    }
    checkBar = () => {
        let bar = this.checkCount()
        if ((bar * 100) / this.state.examLists.length >= 80) this.setState({ colorBar: 'info' })
        else if ((bar * 100) / this.state.examLists.length >= 45) this.setState({ colorBar: 'warning' })
        else this.setState({ colorBar: 'danger' })
    }
    
////////////////////////////// step 4 check answer ////////////////////////////////////
    checkAnswer = () => {
        clearInterval(this.clockCall)
        let result = 0
        this.state.examLists.forEach((item) => {
            if (item.answer === item.reply) result += 1
        })
        this.setState({ score: result, waitResult: true, waitData: false })
    }
/////////////////////////////////////// END FUNCTION ////////////////////////////////////////////////////////////
    render() {
        const dataStore = this.props.stateFromStore
        if (!dataStore.IsLoggedIn) return (<Redirect to='/'/>) // ถ้าไม่ Login ให้เด้งไปหน้าแรก
        return(
            <Container className="containBox">
                {
                this.state.waitData ? /// ถ้าโหลดข้อมูลเสร็จแล้วให้แสดง
                <div>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <Image src={dataStore.Profile} roundedCircle style={{ width: "50px", height: "50px", border: '2px solid #ddd' }} />
                                <div style={{ fontSize: '12px', fontWeight: '300', paddingBottom: '5px', paddingTop: '1px' }}>{dataStore.Name}</div>
                            </div>
                            <p style={{ fontSize: "16px", fontWeight: 500, margin: "3px", color: "#627498" }} className="text-center">
                                {
                                    this.state.minute !== 0 ? 'เวลา ' + this.changeZeroSec(this.state.minute) + ' : ' + this.changeZeroSec(this.state.sec) + ' นาที'
                                        : this.state.sec !== 0 ? 'เวลา ' + this.changeZeroSec(this.state.sec) + ' วินาที' : 'หมดเวลา'
                                }
                            </p>
                            <ProgressBar className="mb-2" striped variant={this.state.colorBar} now={(this.checkCount() * 100) / this.state.examLists.length} label={`${Math.round((this.checkCount() * 100) / this.state.examLists.length)}%`} style={{ height: "10px" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <ExamList
                                questionAll={this.state.examLists[this.state.arrPosition]}
                                number={this.state.arrPosition}
                                nextQuestion={this.nextQuestion.bind(this)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2">
                            {
                                this.state.btnPrev ? // ถ้าเป็นจริงให้แสดง
                                    <div onClick={() => this.setArr('prev')} style={{ cursor: "pointer" }}>
                                        <svg style={{ color: "#5b785b" }} className="bi bi-arrow-left" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    : null // เป็นเท็จให้ซ่อน
                            }
                        </Col>
                        <Col xs="8" className="text-center">
                            {
                                this.state.btnCheckAnser // ถ้าตอบครบแล้วให้แสดงปุ่มตรวจคำตอบ
                                    ? <Button variant="outline-info" className="btnFull" onClick={this.checkAnswer}>ตรวจคำตอบ</Button>
                                    : null // ถ้าตอบไม่ครบให้ซ่อน
                            }
                        </Col>
                        <Col xs="2" style={{ textAlign: "right" }}>
                            {
                                this.state.btnNext ? // ถ้าเป็นจริงให้แสดง
                                    <div onClick={() => this.setArr('next')} style={{ cursor: "pointer" }}>
                                        <svg style={{ color: "#5b785b" }} className="bi bi-arrow-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    : null // เป็นเท็จให้ซ่อน
                            }
                        </Col>
                    </Row>
                </div>
                : // ถ้ายังโหลดข้อสอบไม่เสร็จ
                    this.state.waitResult ? <Result result={this.state.examLists} score={this.state.score} />
                        :
                        <Row>
                            <Col xs="12" className="text-center">
                                <Spinner animation="grow" variant="info" />
                                <Spinner animation="grow" variant="danger" />
                                <Spinner animation="grow" variant="warning" />

                                <p style={{ fontSize: "16px", marginTop:"10px" }}>{this.state.showText ? 'ไม่พบข้อมูล' : 'กรุณารอสักครู่'}</p>
                            </Col>
                        </Row>
                }
            </Container>
        );
    }
}
// export default Exam
// จัดการ Store 
const mapStateToProps = (state) => {
    return {
        stateFromStore: state.data
    }
}
export default connect(mapStateToProps, null)(Exam)