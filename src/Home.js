import React, { Component } from 'react'
import Promotion from './Promotion';
import Register from './Register';

class Home extends Component {
    render() {
        return(
            <div>
                <Promotion/>
                <Register/>
                <br/>
            </div>
        );
    }
}
export default Home
