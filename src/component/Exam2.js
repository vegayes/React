import React, { useState } from 'react';

const Exam2 = () => {

    // useState 상태 관리 ( hook )
    const [count, setCount] = useState(0); //count는 변수 : 0 , setCount는 함수 

    const handelClick = () => {
        setCount(count +1);
    }


    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handelClick}>Increment</button>
        </div>
    );
};

export default Exam2;