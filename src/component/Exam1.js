import React, { Component } from 'react';

class Exam1 extends Component {

    constructor(props){
        super(props); // 초기화 
        this.state = { count : 0};
    }

    handleClick = () => {
       this.setState({count : this.state.count +1}); 
       // 현재 상태의 count를 1을 더한 값을 세팅하겠다.
    }


    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Exam1;