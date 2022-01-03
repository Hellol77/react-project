/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "안녕 넌 누구니",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }
  function 가나다정렬() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={가나다정렬}>정렬버튼</button>

      {글제목.map((글,i) => {
        return (
          <div className="list" key={i}>
            <h3 onClick={()=>{누른제목변경(i)}}>{글}<span onClick={()=>{따봉변경(따봉 +1)}}>💖</span>{따봉}</h3>
            <p>2022-01-05</p>
            <hr />
          </div>
        );
      })}
      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}
      {/* <input onChange={ (e)=>{입력값변경(e.target.value) }}/> */}
      
      
      <div className='publish'>
        <input onChange={(e)=>{입력값변경(e.target.value)}}/> 
        <button onClick={()=>{글제목변경(글제목.concat(입력값))}}>저장</button>
      </div>
      
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        modal버튼
      </button>
      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목}/> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
