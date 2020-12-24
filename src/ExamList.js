import React, { Component } from 'react'
import {ListGroup, Image} from 'react-bootstrap'

class ExamList extends Component {
    mange = (e) => {
        let data =  {
            id : this.props.questionAll.id, 
            question : this.props.questionAll.question, 
            ch1 : this.props.questionAll.ch1, 
            ch2 : this.props.questionAll.ch2, 
            ch3 : this.props.questionAll.ch3, 
            ch4 : this.props.questionAll.ch4, 
            answer : this.props.questionAll.answer, 
            ref: this.props.questionAll.ref,
            img:  this.props.questionAll.img,
            reply : e.currentTarget.id,
            check: this.props.questionAll.answer===e.currentTarget.id?true:false // ตรวจถูกผิดตรงนี้ได้เลย  ไม่ต้องส่งไปตรวจเซิร์ฟเวอร์ เปลืองโหลด
        }
        this.props.nextQuestion(data)
    }

    render() {
        let s1,s2,s3,s4 = { color : '#5b785b' }
        if(this.props.questionAll.reply === '1'){
            s1 = {color:'#e7400d'}
            s2 = {color:'#5b785b'}
            s3 = {color:'#5b785b'}
            s4 = {color:'#5b785b'}
        }else if(this.props.questionAll.reply === '2'){
            s1 = {color:'#5b785b'}
            s2 = {color:'#e7400d'}
            s3 = {color:'#5b785b'}
            s4 = {color:'#5b785b'}
        }
        else if(this.props.questionAll.reply === '3'){
            s1 = {color:'#5b785b'}
            s2 = {color:'#5b785b'}
            s3 = {color:'#e7400d'}
            s4 = {color:'#5b785b'}
        }
        else if(this.props.questionAll.reply === '4'){
            s1 = {color:'#5b785b'}
            s2 = {color:'#5b785b'}
            s3 = {color:'#5b785b'}
            s4 = {color:'#e7400d'}
        }
        else{
            s1 = {color:'#5b785b'}
            s2 = {color:'#5b785b'}
            s3 = {color:'#5b785b'}
            s4 = {color:'#5b785b'}
        }
  
        return (
            <ListGroup variant="flush">
                { this.props.questionAll.img  === "" ? null :<div className="text-center"><Image src = {this.props.questionAll.img} style={{margin:'10px', width:'300px'}}/></div> }
                <ListGroup.Item  style={{backgroundColor:"#697f69", color:"#fff"}}><span style={{fontWeight:500, fontSize:"18px"}}>ข้อ { this.props.number+1 } { this.props.questionAll.question }</span></ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="1" onClick = { this.mange } action as="div">
                        <span style={s1}>ก. { this.props.questionAll.ch1 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="2" onClick = { this.mange } action as="div">
                        <span style={s2}>ข. { this.props.questionAll.ch2 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="3" onClick = { this.mange } action as="div">
                        <span style={s3}>ค. { this.props.questionAll.ch3 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item  style={{cursor:"pointer", fontWeight:300}} id="4" onClick = { this.mange } action as="div">
                        <span style={s4}>ง. { this.props.questionAll.ch4 }</span>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        );
    }
}

export default ExamList;
