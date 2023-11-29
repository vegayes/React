// 상태 내리꽂기 (Props Drilling) 
// : 부모가 가진 상태(state)를 자식에게 전달해서 자식이 사용할 수 있게끔 하는 것

import React, { Component, useState } from 'react';

// 부모 컴포넌트
// 부모의 상태값 자식에게 전달 : props
function Exam3(){

    const [name, setName] = useState("아이셔"); // useState를 이용해서 상태 초기화
    // 리액트 컴포넌트의 state를 변경해야 할 때,
    // 무조건 setState를 통해서 업데이트를 해주어야하며,
    // 업데이트 하는 과정에서 기존의 상태값을 직접적으로 수정하면 안됨.
    // == 불변성의 법칙
    // setName은 변경할 때 사용하는 State변경함수임.
    // 

    return(
        <MyComponent name={name}/>
    );
}



// 자식 컴포넌트
// html 구조만 가진 상태
function MyComponent(props){

    return(
        <div>
            <p>안녕</p>
            <p>나는 {props.name}야.</p>
            <p>{props.age}</p>
            <OtherComponent name = {props.name}/>
        </div>
    );
}

// 자식의 자식 컴포넌트
function OtherComponent(props){
    return(
        <div>{props.name}</div>
    )
}


export default Exam3;