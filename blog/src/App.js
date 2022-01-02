
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "안녕 넌 누구니",
  ]);
  let [따봉,따봉변경]=useState(0);
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0]='여자 코트 추천';
    글제목변경(newArray);
  
  }
  function 가나다정렬(){
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
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉 +1)}}>💖</span>{따봉}</h3>
        <p>2022-01-03</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2022-01-04</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2022-01-05</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
