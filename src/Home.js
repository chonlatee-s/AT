import React, { Component } from 'react'
import Promotion from './Promotion';
import Register from './Register';

class Home extends Component {
    render() {
        return(
            <div>
                <Promotion/>
                <div style={{backgroundColor:'#d1ecf1', paddingTop:'1px', paddingBottom:'35px', height:'100%'}}>
                <Register/>
                </div>
                <br/>
            </div>
        );
    }
}
export default Home
