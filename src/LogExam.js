import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Container, Row, Col, Table} from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

class LogExam extends Component {
    state = {
        data: []
    }
    getLogExam = () => {
        const dataStore = this.props.stateFromStore
        // axios.get(`http://localhost/at_exam/getLogExam.php?id=${dataStore.id}`) 
        axios.get(`${window.location.origin}/getLogExam.php?id=${dataStore.id}`)
        .then((res) => {
            this.setState({data:res.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidMount() { // ดึงข้อสอบจากฐานข้อมูล
        this.getLogExam()
    }
    render() {
        const dataStore = this.props.stateFromStore
        if (!dataStore.IsLoggedIn) return (<Redirect to='/'/>) // ถ้าไม่ Login ให้เด้งไปหน้าแรก
        return (
            <Container className="containBox">
                <Row className="mx-auto">
                    <Col md="12 mb-4">
                        <h5 className="topic text-center">สถิติย้อนหลัง 10 ครั้ง</h5>
                        <p className="text-center" style={{color:'#627498'}}>{dataStore.name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" lg="9" className="mx-auto">
                        <Table responsive striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>ครั้งที่</th>
                                    <th>วันที่</th>
                                    <th>คะแนน</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.num}</td>
                                                <td>{ `${item.day}/${item.month}/${Number(item.year)+543}` }</td>
                                                <td>{ item.score }</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
// export default LogExam
const mapStateToProps = (state) => {
    return {
        stateFromStore : state.data
    }
}
export default connect(mapStateToProps, null) (LogExam)
