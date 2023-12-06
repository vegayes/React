import React, {useState} from "react";

function SpringFront() {

    const [message, setMessage] = useState([]);
    const [user, setUser] = useState("");

    const getUserInfo = () => {
        fetch("/getUserInfo", {
                method:"POST",
                headers : {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                }, 
                body : JSON.stringify({
                    name : "홍길동",
                    age : 20
                })
        })
        .then((res) => res.text()) // text 형태 파싱하고
        .then((data) => setUser(data)) // 파싱 완료 -> 데이터 상태에 세팅
        .catch((err) => console.log(err)); // 예외발생하고 

    }

    const getPortNumber = () =>{
        
        fetch("/getPortNumber")
        .then((res) => res.json())
        .then((data) => setMessage(data))
        .catch((err) => console.log("err : " + err));

    }

    return (
        <>  
            <div>
                <p>1. 서버로부터 응답 받은 값</p>
                <button onClick={getPortNumber}>통신하기</button>

                <ul>
                    {message.map((el, idx) => <li key ={idx}>{el}</li>)}
                </ul>

            </div>


            <div>
                <p>2. 서버로 값 전달 후, 응답 받은 값</p>
                <button onClick={getUserInfo}>통신하기</button>
                <div>
                    {user && <li>{user}</li>}
                </div>
            </div>


        </>
    )
}

export default SpringFront;