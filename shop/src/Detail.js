/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
`;

// class Detail2 extends React.Component{
// componentDidMount(){

// }
// componentWillUnmount(){
// }

// }

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState();

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });
  let history = useNavigate();
  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />
      {inputData}
      {alert === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes" + id + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          
          
          <Info 재고={props.재고}/>
          
          
          <button className="btn btn-danger" onClick={()=>{props.재고변경()}}>주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}



function Info(props){
  
  return (
  <p>재고 : {props.재고[0]}</p>
  
  )

}

export default Detail;
