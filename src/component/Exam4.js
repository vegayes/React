import React, { useState } from "react";

//부모 컴포넌트
const Exam4 = () =>{
    const [id, setId] = useState("");

    const onChangeId = (event) =>{
        setId(event.target.value);
    }

    const [pw, setPw] = useState("");

    const onChangePw = (event) =>{
        setPw(event.target.value);
    }

    return(
        <>
            <Id onChangeId = {onChangeId}/>
            <Pw onChangePw={onChangePw}/>
            <div>
                <button disabled={id.length === 0 || pw.length ===0} >login</button>
            </div>
        </>
    );
}

 
// 자식 컴포넌트 Id
const Id = ({onChangeId}) =>{
    return (
        <div>
            <label htmlFor="id">ID : </label>
            <input id ="id" onChange={onChangeId}/>
        </div>
    );
}

// 자식 컴포넌트 Pw
const Pw = ({onChangePw}) =>{
    return (
        <div>
            <label htmlFor="pw">Pw : </label>
            <input id ="pw" onChange={onChangePw}/>
        </div>
    );
}


export default Exam4;
